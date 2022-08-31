import React from 'react'
// @ts-ignore
import { Field, Form } from 'react-final-form'
import Button from '@mui/material/Button'
import Checkbox from '@mui/material/Checkbox'
import FormControl from '@mui/material/FormControl'
import MenuItem from '@mui/material/MenuItem'
import Select from '@mui/material/Select'
import TextField from '@mui/material/TextField'

import Card from './Card'

function SelectAdapter({ input }: { input: any }) {
  return (
    <FormControl fullWidth>
      <Select displayEmpty {...input}>
        <MenuItem value={'#ff0000'}>❤️ Red</MenuItem>
        <MenuItem value={'#00ff00'}>💚 Green</MenuItem>
        <MenuItem value={'#0000ff'}>💙 Blue</MenuItem>
      </Select>
    </FormControl>
  )
}

function CheckboxAdapter({ className, input }: { input: any; className: string }) {
  return <Checkbox {...input} className={className} />
}

const TextFieldAdapter = ({ input, meta, ...rest }: { input: any; meta: any; rest: any[] }) => (
  <TextField {...input} {...rest} fullWidth />
)

export default function ThirdPartyComponent(): JSX.Element {
  function onSubmit(...rest: any[]) {
    console.log('onSubmit => ', rest)
  }

  return (
    <Card label='Third-Party Components'>
      <Form
        onSubmit={onSubmit}
        initialValues={{ stooge: 'larry', employed: false }}
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
            <div>
              <label>First Name</label>
              <Field
                name='firstName'
                component={TextFieldAdapter}
                type='text'
                placeholder='First Name'
                className='third_party'
              />
            </div>
            <div>
              <label>Last Name</label>
              <Field
                name='lastName'
                component={TextFieldAdapter}
                type='text'
                placeholder='Last Name'
                className='third_party'
              />
            </div>
            <div>
              <label>Employed</label>
              {/* @ts-ignore */}
              <Field name='employed' component={CheckboxAdapter} type='checkbox' className='third_party' />
            </div>
            <div>
              <label>Favorite Color</label>
              <Field name='favoriteColor' component={SelectAdapter}>
                <option />
                <option value='#ff0000'>❤️ Red</option>
                <option value='#00ff00'>💚 Green</option>
                <option value='#0000ff'>💙 Blue</option>
              </Field>
            </div>
            <div>
              <label>Toppings</label>
              <Field name='toppings' component='select' multiple>
                <option value='chicken'>🐓 Chicken</option>
                <option value='ham'>🐷 Ham</option>
                <option value='mushrooms'>🍄 Mushrooms</option>
                <option value='cheese'>🧀 Cheese</option>
                <option value='tuna'>🐟 Tuna</option>
                <option value='pineapple'>🍍 Pineapple</option>
              </Field>
            </div>
            <div>
              <label>Sauces</label>
              <div>
                <label>
                  {/* @ts-ignore */}
                  <Field name='sauces' component={CheckboxAdapter} type='checkbox' value='ketchup' /> Ketchup
                </label>
                <label>
                  {/* @ts-ignore */}
                  <Field name='sauces' component={CheckboxAdapter} type='checkbox' value='mustard' /> Mustard
                </label>
                <label>
                  {/* @ts-ignore */}
                  <Field name='sauces' component={CheckboxAdapter} type='checkbox' value='mayonnaise' /> Mayonnaise
                </label>
                <label>
                  {/* @ts-ignore */}
                  <Field name='sauces' component={CheckboxAdapter} type='checkbox' value='guacamole' /> Guacamole 🥑
                </label>
              </div>
            </div>
            <div>
              <label>Best Stooge</label>
              <div>
                <label>
                  <Field name='stooge' component='input' type='radio' value='larry' /> Larry
                </label>
                <label>
                  <Field name='stooge' component='input' type='radio' value='moe' /> Moe
                </label>
                <label>
                  <Field name='stooge' component='input' type='radio' value='curly' /> Curly
                </label>
              </div>
            </div>
            <div>
              <label>Notes</label>
              <Field name='notes' component='textarea' placeholder='Notes' />
            </div>
            <div className='buttons'>
              <Button type='submit' disabled={submitting || pristine} variant='contained'>
                Submit
              </Button>
              <Button type='button' onClick={form.reset} disabled={submitting || pristine} variant='outlined'>
                Reset
              </Button>
            </div>
            {/* @ts-ignore */}
            <pre>{JSON.stringify(values, 0, 2)}</pre>
          </form>
        )}
      />
    </Card>
  )
}
