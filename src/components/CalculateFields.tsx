import * as React from 'react'
import { Field, Form } from 'react-final-form'
import createDecorator from 'final-form-calculate'

import Card from './Card'

const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms))

const onSubmit = async (values: any) => {
  await sleep(300)
  // @ts-ignore
  window.alert(JSON.stringify(values, 0, 2))
}

const calculator = createDecorator(
  {
    field: 'minimum', // when minimum changes...
    updates: {
      // ...update maximum to the result of this function
      maximum: (minimumValue: any, allValues: any) => Math.max(minimumValue || 0, allValues.maximum || 0),
    },
  },
  {
    field: 'maximum', // when maximum changes...
    updates: {
      // update minimum to the result of this function
      minimum: (maximumValue: any, allValues: any) => Math.min(maximumValue || 0, allValues.minimum || 0),
    },
  },
  {
    field: /day\[\d\]/, // when a field matching this pattern changes...
    updates: {
      // ...update the total to the result of this function
      total: (_: any, allValues: any) =>
        (allValues.day || []).reduce((sum: number, value: any) => sum + Number(value || 0), 0),
    },
  },
)

export default function CalculateFields(): JSX.Element {
  return (
    <Card label='Calculate Fields'>
      <Form
        onSubmit={onSubmit}
        decorators={[calculator]}
        render={({
          handleSubmit,
          // @ts-ignore
          reset,
          pristine,
          submitting,
          values,
        }) => (
          <form onSubmit={handleSubmit} className='simple_form'>
            <div>
              <label>Minimum</label>
              <Field name='minimum' component='input' type='number' placeholder='Minimum' />
            </div>
            <div>
              <label>Maximum</label>
              <Field name='maximum' component='input' type='number' placeholder='Maximum' />
            </div>
            <hr />
            <div>
              <label>Monday</label>
              <Field name='day[0]' component='input' type='number' placeholder='Monday' />
            </div>
            <div>
              <label>Tuesday</label>
              <Field name='day[1]' component='input' type='number' placeholder='Tuesday' />
            </div>
            <div>
              <label>Wednesday</label>
              <Field name='day[2]' component='input' type='number' placeholder='Wednesday' />
            </div>
            <div>
              <label>Thursday</label>
              <Field name='day[3]' component='input' type='number' placeholder='Thursday' />
            </div>
            <div>
              <label>Friday</label>
              <Field name='day[4]' component='input' type='number' placeholder='Friday' />
            </div>
            <hr />
            <div>
              <label>Total</label>
              <Field name='total' component='input' type='number' readOnly placeholder='Total' />
            </div>
            <hr />
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
      ></Form>
    </Card>
  )
}
