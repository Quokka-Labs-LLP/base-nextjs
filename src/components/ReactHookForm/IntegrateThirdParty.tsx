import React from 'react'
// eslint-disable-next-line
// @ts-ignore
import Select from 'react-select'
import { useForm, Controller } from 'react-hook-form'
import Input from '@material-ui/core/Input'

import Card from '../Card'

export default function IntegrateThirdpartyExample(): JSX.Element {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      firstName: '',
      select: {},
    },
  })
  // eslint-disable-next-line
  const onSubmit = (data: any) => console.log(data)

  return (
    <Card label='Integrate Third Party'>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name='firstName'
          control={control}
          render={({ field }) => <Input placeholder='First name' {...field} />}
        />
        <Controller
          name='select'
          control={control}
          render={({ field }) => (
            <Select
              {...field}
              options={[
                { value: 'chocolate', label: 'Chocolate' },
                { value: 'strawberry', label: 'Strawberry' },
                { value: 'vanilla', label: 'Vanilla' },
              ]}
            />
          )}
        />
        <input type='submit' />
      </form>
    </Card>
  )
}
