import { ComponentType, ReactElement, createElement, useRef } from 'react'

import {
  version as ffversion,
  FieldValidator,
  FieldSubscription,
  fieldSubscriptionItems,
  ARRAY_ERROR,
} from 'final-form'
import { version as rffversion, useField, useForm } from 'react-final-form'
// @ts-ignore
import { Mutators } from 'final-form-array'

export type FieldArrayRenderProps = {
  fields: {
    forEach: (iterator: (name: string, index: number) => void) => void
    insert: (index: number, value: any) => void
    map: (iterator: (name: string, index: number) => any) => any[]
    move: (from: number, to: number) => void
    name: string
    pop: () => void
    push: (value: any) => void
    remove: (index: number) => any
    shift: () => any
    swap: (indexA: number, indexB: number) => void
    unshift: (value: any) => void
    value: any[]
  }
  meta: any
}

export type RenderableProps<T> = {
  children: (props: T) => ReactElement
  component: ComponentType<any>
  render: (props: T) => ReactElement
}

export type UseFieldArrayConfig = {
  subscription?: FieldSubscription
  defaultValue?: any
  initialValue?: any
  isEqual?: any
  validate?: any //(value: ?(any[]), allValues: Object, meta: ?FieldState<any>) => ?any
}

export type FieldArrayProps = { name: string } & UseFieldArrayConfig & RenderableProps<FieldArrayRenderProps>

function defaultIsEqual(a: any[], b: any[]) {
  return (
    a === b || (Array.isArray(a) && Array.isArray(b) && a.length === b.length && !a.some((d, index) => d !== b[index]))
  )
}

function useConstant(init: () => any): any {
  const ref = useRef()

  if (!ref.current) ref.current = init()

  return ref.current
}

const all: FieldSubscription = fieldSubscriptionItems.reduce((result: any, key: any) => {
  result[key] = true
  return result
}, {})

const useFieldArray = (
  name: string,
  {
    subscription = all,
    defaultValue,
    initialValue,
    isEqual = defaultIsEqual,
    // @ts-ignore
    validate: validateProp,
  }: UseFieldArrayConfig = {},
  // @ts-ignore
): FieldArrayRenderProps => {
  const form = useForm('useFieldArray')

  const formMutators: Mutators = form.mutators
  const hasMutators = !!(formMutators && formMutators.push && formMutators.pop)

  if (!hasMutators) {
    throw new Error(`Array mutators not found. You need to provide the mutators from final-form-arrays to your form`)
  }

  const mutators = useConstant(() =>
    // curry the field name onto all mutator calls
    Object.keys(formMutators).reduce((result: any, key: any) => {
      result[key] = (...args: any[]) => formMutators[key](name, ...args)
      return result
    }, {}),
  )

  const validate: FieldValidator<any> = useConstant(() => (value: any, allValues: any, meta: any) => {
    if (!validateProp) return undefined

    const error = validateProp(value, allValues, meta)

    if (!error || Array.isArray(error)) {
      return error
    } else {
      const arrayError: any[] = []
      // gross, but we have to set a string key on the array
      ;(arrayError as any)[ARRAY_ERROR] = error
      return arrayError
    }
  })

  const {
    meta: { length, ...meta },
    input,
    ...fieldState
  } = useField(name, {
    subscription: { ...subscription, length: true },
    defaultValue,
    initialValue,
    isEqual,
    validate,
    format: v => v,
  })

  const forEach = (iterator: (name: string, index: number) => void): void => {
    const len = length || 0
    for (let i = 0; i < len; i++) iterator(`${name}[${i}]`, i)
  }

  const map = (iterator: (name: string, index: number) => any): any[] => {
    const len = length || 0
    const results: any[] = []

    for (let i = 0; i < len; i++) results.push(iterator(`${name}[${i}]`, i))
    return results
  }

  return {
    fields: {
      name,
      forEach,
      length: length || 0,
      map,
      ...mutators,
      ...fieldState,
      value: input.value,
    },
    meta,
  }
}

function renderComponent(props: RenderableProps<any>, name: string): JSX.Element {
  const { render, children, component, ...rest } = props

  if (component) {
    return createElement(component, { ...rest, children, render })
  }

  if (render) {
    return render(children === undefined ? rest : { ...rest, children })
  }

  if (typeof children !== 'function') {
    throw new Error(`Must specify either a render prop, a render function as childre, or a component prop to ${name}`)
  }

  return children(rest)
}

const versions = {
  'final-form': ffversion,
  'react-final-form': rffversion,
  'react-final-form-collection': '1.0.0',
}

export default function FieldArray({
  name,
  subscription,
  defaultValue,
  initialValue,
  isEqual,
  validate,
  ...rest
}: FieldArrayProps) {
  const { fields, meta } = useFieldArray(name, {
    subscription,
    defaultValue,
    initialValue,
    isEqual,
    validate,
  })

  return renderComponent(
    {
      // @ts-ignore
      fields,
      meta: { ...meta, __versions: versions },
      ...rest,
    },
    `FieldArray(${name})`,
  )
}
