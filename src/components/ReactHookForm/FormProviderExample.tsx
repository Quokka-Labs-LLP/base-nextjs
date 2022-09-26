import React, { memo } from 'react'
import { useForm, FormProvider, useFormContext } from 'react-hook-form'

import Card from '../Card'

// we can use React.memo to prevent re-render except isDirty state changed
// eslint-disable-next-line react/display-name
const NestedInput = memo(
  // eslint-disable-next-line
  ({ register, formState: { isDirty } }: any) => (
    <div>
      <input {...register('test')} />
      {isDirty && <p>This field is dirty</p>}
    </div>
  ),
  (prevProps, nextProps) => prevProps.formState.isDirty === nextProps.formState.isDirty,
)

export function NestedInputContainer(): JSX.Element {
  const methods = useFormContext()

  return <NestedInput {...methods} />
}

export default function FormProviderExample(): JSX.Element {
  const methods = useForm()
  // eslint-disable-next-line
  const onSubmit = (data: any) => console.log(data)
  console.log(methods.formState.isDirty) // make sure formState is read before render to enable the Proxy

  return (
    <Card label='Form Provider Example'>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          <NestedInputContainer />
          <input type='submit' />
        </form>
      </FormProvider>
    </Card>
  )
}
