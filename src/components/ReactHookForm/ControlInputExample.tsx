import React from 'react'
import { useForm, Controller } from 'react-hook-form'
import { Checkbox } from '@material-ui/core'

import Card from '../Card'

export default function ControlInputExample(): JSX.Element {
  const { handleSubmit, control } = useForm({
    defaultValues: {
      checkbox: false,
    },
  })
  // eslint-disable-next-line
  const onSubmit = (data: any) => console.log(data)

  return (
    <Card label='Control Input Example'>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name='checkbox'
          control={control}
          rules={{ required: true }}
          render={({ field }) => <Checkbox {...field} />}
        />
        <label>Click this</label>
        <br />
        <input type='submit' />
      </form>
    </Card>
  )
}
