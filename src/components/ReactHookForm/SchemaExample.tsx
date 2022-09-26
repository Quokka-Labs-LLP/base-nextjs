import React from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

import Card from '../Card'

const schema = yup
  .object({
    firstName: yup.string().required(),
    age: yup.number().positive().integer().required(),
  })
  .required()

export default function SchemaExample(): JSX.Element {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  })
  // eslint-disable-next-line
  const onSubmit = (data: any) => console.log(data)

  return (
    <Card label='Schema Validation Example'>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input placeholder='First Name' {...register('firstName')} />
        {/* eslint-disable-next-line */}
        {/* @ts-ignore */}
        <p>{errors.firstName?.message}</p>

        <input placeholder='Age' {...register('age')} />
        {/* eslint-disable-next-line */}
        {/* @ts-ignore */}
        <p>{errors.age?.message}</p>

        <input type='submit' />
      </form>
    </Card>
  )
}
