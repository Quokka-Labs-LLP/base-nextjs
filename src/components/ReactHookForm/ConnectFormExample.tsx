import React from 'react'
import { FormProvider, useForm, useFormContext } from 'react-hook-form'

import Card from '../Card'

// eslint-disable-next-line
export function ConnectForm({ children }: any): JSX.Element {
  const methods = useFormContext()
  
  return children({ ...methods })
}

// eslint-disable-next-line
export function DeepNest() {
  return (
    <ConnectForm>
      {/* eslint-disable-next-line */}
      {({ register }: any) => <input placeholder='First Name' {...register('deepNestedInput')} />}
    </ConnectForm>
  )
}

export default function ConnectFormExample(): JSX.Element {
  const methods = useForm()

  return (
    <Card label='Connect Form Example'>
      <FormProvider {...methods}>
        <form>
          <DeepNest />
        </form>
      </FormProvider>
    </Card>
  )
}
