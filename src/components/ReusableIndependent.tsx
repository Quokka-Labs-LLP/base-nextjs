import React from 'react'
// @ts-ignore
import { Field, Form } from 'react-final-form'

import Card from './Card'

const Error = ({ name }: { name: string }) => (
  <Field
    name={name}
    subscription={{ touched: true, error: true }}
    render={({ meta: { touched, error } }: { meta: any }) => (touched && error ? <span>{error}</span> : null)}
  />
)

export default function ReusableIndependent(): JSX.Element {
  function onSubmit(values: any) {
    // @ts-ignore
    window.alert(JSON.stringify(values, 0, 2))
  }

  return (
    <Card label='Reusable Independent Error Component'>
      <Form
        onSubmit={onSubmit}
        validate={(values: any) => {
          const errors: any = {}
          if (!values.firstName) {
            errors.firstName = 'Required'
          }
          if (!values.lastName) {
            errors.lastName = 'Required'
          }
          if (!values.age) {
            errors.age = 'Required'
          } else if (isNaN(values.age)) {
            errors.age = 'Must be a number'
          } else if (values.age < 18) {
            errors.age = 'No kids allowed'
          }
          return errors
        }}
        // @ts-ignore
        render={({ handleSubmit, reset, submitting, pristine, values }) => (
          <form onSubmit={handleSubmit} className='simple_form'>
            <div>
              <label>First Name</label>
              <Field name='firstName' component='input' placeholder='First Name' />
              <Error name='firstName' />
            </div>
            <div>
              <label>Last Name</label>
              <Field name='lastName' component='input' placeholder='Last Name' />
              <Error name='lastName' />
            </div>
            <div>
              <label>Age</label>
              <Field name='age' component='input' type='number' placeholder='Age' />
              <Error name='age' />
            </div>
            <div className='buttons'>
              <button type='submit' disabled={submitting}>
                Submit
              </button>
              <button type='button' onClick={reset} disabled={submitting || pristine}>
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
