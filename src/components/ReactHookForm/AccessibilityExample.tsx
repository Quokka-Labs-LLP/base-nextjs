import React from 'react'
import { useForm } from 'react-hook-form'

import Card from '../Card'

export default function AccessibilityExample(): JSX.Element {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
  // eslint-disable-next-line
  const onSubmit = (data: any) => console.log(data)

  return (
    <Card label='Accessibility Example'>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor='name'>Name</label>

        {/* use aria-invalid to indicate field contain error */}
        <input
          id='name'
          aria-invalid={errors.name ? 'true' : 'false'}
          {...register('name', { required: true, maxLength: 30 })}
        />

        {/* use role="alert" to announce the error message */}
        {errors.name && errors.name.type === 'required' && <span role='alert'>This is required</span>}
        {errors.name && errors.name.type === 'maxLength' && <span role='alert'>Max length exceeded</span>}

        <input type='submit' />
      </form>
    </Card>
  )
}
