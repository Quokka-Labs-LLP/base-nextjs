import React from 'react'
import { useForm } from 'react-hook-form'

import Card from '../Card'

export default function App(): JSX.Element {
  const { register, handleSubmit } = useForm()
  // eslint-disable-next-line
  const onSubmit = (data: any) => console.log(data)

  return (
    <Card label='Validation Example'>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register('firstName', { required: true, maxLength: 20 })} placeholder='First Name' />
        <input {...register('lastName', { pattern: /^[A-Za-z]+$/i })} placeholder='Last Name' />
        <input type='number' {...register('age', { min: 18, max: 99 })} placeholder='Your age' />
        <input type='submit' />
      </form>
    </Card>
  )
}
