import React from 'react'
// @ts-ignore
import { FORM_ERROR } from 'final-form'
// @ts-ignore
import { Field, Form } from 'react-final-form'

import Card from './Card'

export default function SubmissionError(): JSX.Element {
  function onSubmit(values: any) {
    if (values.username !== 'tanmay') {
      return { username: 'Unknown username' }
    }
    if (values.password !== 'qwerty') {
      return { [FORM_ERROR]: 'Login Failed' }
    }
    window.alert('LOGIN SUCCESS!')
  }

  return (
    <Card label='Submission Error'>
      <Form
        onSubmit={onSubmit}
        validate={(values: any) => {
          const errors: any = {}
          if (!values.username) errors.username = 'Required'
          if (!values.password) errors.password = 'Required'
          return errors
        }}
        render={({
          submitError,
          handleSubmit,
          form,
          submitting,
          pristine,
          values,
        }: {
          submitError: any
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
                  {(meta.error || meta.submitError) && meta.touched && <span>{meta.error || meta.submitError}</span>}
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
            {submitError && <div className='error'>{submitError}</div>}
            <div className='buttons'>
              <button type='submit' disabled={submitting}>
                Log In
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
