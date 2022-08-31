import React from 'react'
// @ts-ignore
import { Field, Form } from 'react-final-form'

import Card from './Card'

export default function FieldLevelValidation(): JSX.Element {
  // eslint-disable-next-line
  function onSubmit(...rest: any[]) {
    console.log('onSubmit => ', rest)
  }

  const required = (value: any) => (value ? undefined : 'Required')
  const mustBeNumber = (value: any) => (isNaN(value) ? 'Must be a number' : undefined)
  const minValue = (min: number) => (value: any) =>
    isNaN(value) || value >= min ? undefined : `Should be greater than ${min}`
  const composeValidators =
    (...validators: any[]) =>
    (value: any) =>
      validators.reduce((error, validator) => error || validator(value), undefined)

  return (
    <Card label='Field-Level Validation Example'>
      <Form
        onSubmit={onSubmit}
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
            <Field name='firstName' validate={required}>
              {({ input, meta }: { input: any; meta: any }) => (
                <div>
                  <label>First Name</label>
                  <input {...input} type='text' placeholder='First Name' />
                  {meta.error && meta.touched && <span>{meta.error}</span>}
                </div>
              )}
            </Field>
            <Field name='lastName' validate={required}>
              {({ input, meta }: { input: any; meta: any }) => (
                <div>
                  <label>Last Name</label>
                  <input {...input} type='text' placeholder='Last Name' />
                  {meta.error && meta.touched && <span>{meta.error}</span>}
                </div>
              )}
            </Field>
            <Field name='age' validate={composeValidators(required, mustBeNumber, minValue(18))}>
              {({ input, meta }: { input: any; meta: any }) => (
                <div>
                  <label>Age</label>
                  <input {...input} type='text' placeholder='Age' />
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
