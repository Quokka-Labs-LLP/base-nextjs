import React, { forwardRef } from 'react'
import { useForm } from 'react-hook-form'

import Card from '../Card'

// The following component is an example of your existing Input Component
// eslint-disable-next-line
const Input = ({ label, register, required }: any) => (
  <input {...register(label, { required })} placeholder={label} />
)

// you can use forwardRef to pass the ref too
// eslint-disable-next-line react/display-name
const Select = forwardRef(
  // eslint-disable-next-line
  ({ onChange, onBlur, name, label }: { onChange: any; onBlur: any; name: any; label: any }, ref) => (
    <>
      <label>{label}</label>
      {/* eslint-disable-next-line */}
      {/* @ts-ignore */}
      <select name={name} ref={ref} onChange={onChange} onBlur={onBlur}>
        <option value='20'>20</option>
        <option value='30'>30</option>
      </select>
    </>
  ),
)

export default function IntegrateExistingExample(): JSX.Element {
  const { register, handleSubmit } = useForm()

  // eslint-disable-next-line
  const onSubmit = (data: any) => {
    alert(JSON.stringify(data))
  }

  return (
    <Card label='Integrat on Existing UI'>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input label='First Name' register={register} required />
        <Select label='Age' {...register('Age')} />
        <input type='submit' />
      </form>
    </Card>
  )
}
