import * as React from 'react'
import { Field, Form } from 'react-final-form'

import Card from './Card'

const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms))

const onSubmit = async (values: any) => {
  await sleep(300)
  // @ts-ignore
  window.alert(JSON.stringify(values, 0, 2))
}

function Fields({
  names,
  subscription,
  fieldsState = {},
  children,
  originalRender,
}: {
  names: any
  subscription: any
  fieldsState: any
  children: any
  originalRender: any
}) {
  if (!names.length) {
    return (originalRender || children)(fieldsState)
  }
  const [name, ...rest] = names
  return (
    <Field name={name} subscription={subscription}>
      {fieldState => (
        // @ts-ignore
        <Fields
          names={rest}
          subscription={subscription}
          originalRender={originalRender || children}
          fieldsState={{ ...fieldsState, [name]: fieldState }}
        />
      )}
    </Field>
  )
}

export default function FieldsComponentExample(): JSX.Element {
  return (
    <Card label='Fields Component'>
      <Form
        onSubmit={onSubmit}
        initialValues={{ employed: false }}
        // @ts-ignore
        render={({
          handleSubmit,
          pristine,
          form,
          submitting,
          // values,
        }) => (
          <form onSubmit={handleSubmit} className='simple_form'>
            <div>
              <label>First Name</label>
              <Field name='firstName' component='input' type='text' placeholder='First Name' />
            </div>
            <div>
              <label>Last Name</label>
              <Field name='lastName' component='input' type='text' placeholder='Last Name' />
            </div>
            <div>
              <label>Employed</label>
              <Field name='employed' component='input' type='checkbox' />
            </div>
            <div>
              <label>Notes</label>
              <Field name='notes' component='textarea' placeholder='Notes' />
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
            <Fields names={['firstName', 'lastName', 'employed', 'notes']}>
              {/* @ts-ignore */}
              {fieldsState => <pre>{JSON.stringify(fieldsState, undefined, 2)}</pre>}
            </Fields>
          </form>
        )}
      ></Form>
    </Card>
  )
}
