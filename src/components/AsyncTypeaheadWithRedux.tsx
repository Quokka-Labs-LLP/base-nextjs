import * as React from 'react'
import { Field, Form } from 'react-final-form'
import setFieldData from 'final-form-set-field-data'
import { Provider } from 'react-redux'

import GithubUserTypeahead from './AsyncTypeaheadRedux/GithubUserTypeahead'
import configureStore from './AsyncTypeaheadRedux/store'
import Card from './Card'

const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms))

const onSubmit = async (values: any) => {
  await sleep(300)
  // @ts-ignore
  window.alert(JSON.stringify(values, 0, 2))
}

const store = configureStore()

function CustomForm(): JSX.Element {
  return (
    <Form
      onSubmit={onSubmit}
      mutators={{ setFieldData }}
      render={({ handleSubmit, pristine, submitting, values }) => (
        <form onSubmit={handleSubmit} className='simple_form'>
          <div>
            <label>Github users</label>
            <GithubUserTypeahead name='user1' />
          </div>
          <div>
            <label>Github users 2</label>
            <GithubUserTypeahead name='user2' />
          </div>
          <div className='buttons'>
            <button type='submit' disabled={submitting || pristine}>
              Submit
            </button>
          </div>
          {/* @ts-ignore */}
          <pre>{JSON.stringify(values, 0, 2)}</pre>
        </form>
      )}
    />
  )
}

export default function AsyncTypeaheadWithRedux(): JSX.Element {
  return (
    <Card label='Array Fields'>
      <Provider store={store}>
        <CustomForm />
      </Provider>
    </Card>
  )
}
