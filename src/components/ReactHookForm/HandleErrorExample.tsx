import React from 'react'
import { useForm } from 'react-hook-form'

import Card from '../Card'

export default function HandleErrorExample(): JSX.Element {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm()
  // eslint-disable-next-line
  const onSubmit = (data: any) => console.log(data)

  return (
    <Card label='Handle Error'>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          placeholder='First Name'
          {...register('firstName', { required: true })}
          aria-invalid={errors.firstName ? 'true' : 'false'}
        />
        {errors.firstName?.type === 'required' && <p role='alert'>First name is required</p>}

        <input
          placeholder='Email ID'
          {...register('mail', { required: 'Email Address is required' })}
          aria-invalid={errors.mail ? 'true' : 'false'}
        />
        {/* eslint-disable-next-line */}
        {/* @ts-ignore */}
        {errors.mail && <p role='alert'>{errors.mail?.message}</p>}

        <input type='submit' />
      </form>
    </Card>
  )
}
