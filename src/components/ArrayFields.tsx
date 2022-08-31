import * as React from 'react'
import arrayMutators from 'final-form-arrays'
import { Field, Form } from 'react-final-form'

import FieldArray from './ffcollection'
import Card from './Card'

const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms))

const onSubmit = async (values: any) => {
  await sleep(300)
  // @ts-ignore
  window.alert(JSON.stringify(values, 0, 2))
}

export default function ArrayFields(): JSX.Element {
  return (
    <Card label='Array Fields'>
      <Form
        onSubmit={onSubmit}
        mutators={{
          ...arrayMutators,
        }}
        // @ts-ignore
        render={({
          handleSubmit,
          form: {
            mutators: { push, pop },
          }, // injected from final-form-arrays above
          pristine,
          form,
          submitting,
          // values,
        }) => (
          <form onSubmit={handleSubmit} className='simple_form'>
            <div>
              <label>Company</label>
              <Field name='company' component='input' />
            </div>
            <div className='buttons'>
              <button type='button' onClick={() => push('customers', undefined)}>
                Add Customer
              </button>
              <button type='button' onClick={() => pop('customers')}>
                Remove Customer
              </button>
            </div>
            <FieldArray name='customers'>
              {({ fields }) =>
                // @ts-ignore
                fields.map((name, index) => (
                  <div key={name}>
                    <label>Cust. #{index + 1}</label>
                    <Field name={`${name}.firstName`} component='input' placeholder='First Name' />
                    <Field name={`${name}.lastName`} component='input' placeholder='Last Name' />
                    <span onClick={() => fields.remove(index)} style={{ cursor: 'pointer' }}>
                      ❌
                    </span>
                  </div>
                ))
              }
            </FieldArray>

            <div className='buttons'>
              <button type='submit' disabled={submitting || pristine}>
                Submit
              </button>
              <button type='button' onClick={form.reset} disabled={submitting || pristine}>
                Reset
              </button>
            </div>
          </form>
        )}
      ></Form>
    </Card>
  )
}
