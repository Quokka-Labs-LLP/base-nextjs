import React from 'react'
// @ts-ignore
import { Field, Form } from 'react-final-form'

import Card from './Card'

export default function RecordLevelValidationExample(): JSX.Element {
  // eslint-disable-next-line
  function onSubmit(...rest: any[]) {
    console.log('onSubmit => ', rest)
  }

  return (
    <Card label='Record-Level Validation Example'>
      <Form
        onSubmit={onSubmit}
        validate={(values: any) => {
          const errors: any = {}
          if (!values.username) {
            errors.username = 'Required'
          }
          if (!values.password) {
            errors.password = 'Required'
          }
          if (!values.confirm) {
            errors.confirm = 'Required'
          } else if (values.confirm !== values.password) {
            errors.confirm = 'Must match'
          }
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
            <Field name='username'>
              {({ input, meta }: { input: any; meta: any }) => (
                <div>
                  <label>Username</label>
                  <input {...input} type='text' placeholder='Username' />
                  {meta.error && meta.touched && <span>{meta.error}</span>}
                </div>
              )}
            </Field>
            <Field name='password'>
              {({ input, meta }: { input: any; meta: any }) => (
                <div>
                  <label>Password</label>
                  <input {...input} type='password' placeholder='Password' />
                  {meta.error && meta.touched && <span>{meta.error}</span>}
                </div>
              )}
            </Field>
            <Field name='confirm'>
              {({ input, meta }: { input: any; meta: any }) => (
                <div>
                  <label>Confirm</label>
                  <input {...input} type='password' placeholder='Confirm' />
                  {meta.error && meta.touched && <span>{meta.error}</span>}
                </div>
              )}
            </Field>
            <div className='buttons'>
              <button type='submit' disabled={submitting}>
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
