import React, { useEffect, useState } from 'react'
// @ts-ignore
import { Field, Form } from 'react-final-form'

import Card from './Card'

const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms))

const load = async () => {
  await sleep(2000)
  return {
    username: 'erikras',
    firstName: 'Erik',
  }
}

export default function LoadingAndInitialValues(): JSX.Element {
  const [data, setData] = useState({ loading: true })

  function onSubmit(values: any) {
    // @ts-ignore
    window.alert(JSON.stringify(values, 0, 2))
  }

  useEffect(() => {
    ;(async function () {
      const res = await load()
      setData({
        loading: false,
        ...res,
      })
    })()
  }, [])

  return (
    <Card label='Reusable Independent Error Component'>
      <Form
        onSubmit={onSubmit}
        initialValues={data}
        render={({
          handleSubmit,
          pristine,
          form,
          submitting,
          values,
        }: {
          handleSubmit: any
          form: any
          submitting: any
          pristine: any
          values: any
        }) => (
          <form onSubmit={handleSubmit} className='simple_form'>
            {data.loading ? (
              <div className='loading'>loading...</div>
            ) : (
              <>
                <div>
                  <label>Username</label>
                  <Field name='username' component='input' placeholder='Username' />
                </div>
                <div>
                  <label>First Name</label>
                  <Field name='firstName' component='input' placeholder='First Name' />
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
              </>
            )}
          </form>
        )}
      />
    </Card>
  )
}
