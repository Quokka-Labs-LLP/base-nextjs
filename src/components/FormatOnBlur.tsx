import React from 'react'
// @ts-ignore
import { Field, Form } from 'react-final-form'
import numeral from 'numeral'

import Card from './Card'

export default function FormatOnBlur(): JSX.Element {
  function onSubmit(values: any) {
    // @ts-ignore
    window.alert(JSON.stringify(values, 0, 2))
  }

  const formatPrice = (value: any) =>
    value === undefined
      ? '' // make controlled
      : numeral(value).format('$0,0.00')

  return (
    <Card label='Format On Blur Example'>
      <Form
        onSubmit={onSubmit}
        validate={(values: any) => {
          const errors: any = {}
          if (!values.username) errors.username = 'Required'
          if (!values.password) errors.password = 'Required'
          return errors
        }}
        render={({
          handleSubmit,
          form,
          submitting,
          pristine,
          values,
        }: {
          handleSubmit: any
          form: any
          submitting: any
          pristine: any
          values: any
        }) => (
          <form onSubmit={handleSubmit} className='simple_form'>
            <div>
              <label>Product Name</label>
              <Field name='name' component='input' type='text' placeholder='Product Name' />
            </div>
            <div>
              <label>Price</label>
              <Field name='price' component='input' type='text' format={formatPrice} formatOnBlur placeholder='$0.00' />
            </div>
            <div className='buttons'>
              <button type='submit' disabled={submitting || pristine}>
                Submit
              </button>
              <button type='button' onClick={form.reset} disabled={submitting || pristine}>
                Reset
              </button>
            </div>
            {/* @ts-ignore */}
            <pre>{JSON.stringify(values, 0, 2)}</pre>
          </form>
        )}
      />
    </Card>
  )
}
