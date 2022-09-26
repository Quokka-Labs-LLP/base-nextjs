import React from 'react'
import { useForm } from 'react-hook-form'

import Card from '../Card'

export default function App(): JSX.Element {
  const { register, handleSubmit } = useForm()
  // eslint-disable-next-line
  const onSubmit = (data: any) => console.log(data)

  return (
    <Card label='Register Fields Example'>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input placeholder='First Name' {...register('firstName')} />
        <select {...register('gender')}>
          <option value='female'>female</option>
          <option value='male'>male</option>
          <option value='other'>other</option>
        </select>
        <input type='submit' />
      </form>
    </Card>
  )
}
