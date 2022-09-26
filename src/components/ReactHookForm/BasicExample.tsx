import React from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'

import Card from '../Card'

type Inputs = {
  example: string
  exampleRequired: string
}

export default function BasicExample(): JSX.Element {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>()
  const onSubmit: SubmitHandler<Inputs> = data => console.log(data)

  console.log(watch('example')) // watch input value by passing the name of it

  return (
    <Card label='Basic Example'>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* register your input into the hook by invoking the "register" function */}
        <input defaultValue='test' {...register('example')} placeholder='Inputs' />

        {/* include validation with required or other standard HTML validation rules */}
        <input {...register('exampleRequired', { required: true })} placeholder='Inputs' />
        {/* errors will return when field validation fails  */}
        {errors.exampleRequired && <span>This field is required</span>}

        <input type='submit' />
      </form>
    </Card>
  )
}
