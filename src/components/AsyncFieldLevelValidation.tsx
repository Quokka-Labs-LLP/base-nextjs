import React from 'react'
// @ts-ignore
import { Field, Form } from 'react-final-form'

import Card from './Card'
import Spinner from './Spinner'

const required = (value: any) => (value ? undefined : 'Required')
const mustBeNumber = (value: any) => (isNaN(value) ? 'Must be a number' : undefined)
const minValue = (min: number) => (value: any) =>
  isNaN(value) || value >= min ? undefined : `Should be greater than ${min}`
const composeValidators =
  (...validators: any[]) =>
  (value: any) =>
    validators.reduce((error, validator) => error || validator(value), undefined)

const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms))
const simpleMemoize = (fn: any) => {
  let lastArg: any
  let lastResult: any
  return (arg: any) => {
    if (arg !== lastArg) {
      lastArg = arg
      lastResult = fn(arg)
    }
    return lastResult
  }
}

const usernameAvailable = simpleMemoize(async (value: any) => {
  if (!value) {
    return 'Required'
  }
  await sleep(400)
  if (~['john', 'paul', 'george', 'ringo'].indexOf(value && value.toLowerCase())) {
    return 'Username taken!'
  }
})

export default function AsyncFieldLevelValidation(): JSX.Element {
  // eslint-disable-next-line
  function onSubmit(...rest: any[]) {
    console.log('onSubmit => ', rest)
  }

  return (
    <Card
      label='Asynchronous Record-Level Validation'
      description='Usernames John, Paul, George or Ringo will fail async validation.'
    >
      <Form
        onSubmit={onSubmit}
        // @ts-ignore
        render={({ handleSubmit, reset, submitting, pristine, values }) => (
          <form onSubmit={handleSubmit} className='simple_form'>
            <Field name='username' validate={usernameAvailable}>
              {({ input, meta }: { input: any; meta: any }) => (
                <div>
                  <label>Username</label>
                  <input {...input} type='text' placeholder='Username' />
                  {meta.error && meta.touched && <span>{meta.error}</span>}
                  {meta.validating && <Spinner />}
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
