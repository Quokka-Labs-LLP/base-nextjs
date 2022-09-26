import React from 'react'

import {
  BasicExample,
  RegisterFieldsExample,
  ValidationExample,
  IntegrateExistingExample,
  IntegrateThirdParty,
  ControlInputExample,
  HandleErrorExample,
  SchemaExample,
  AccessibilityExample,
  ConnectFormExample,
  FormProviderExample,
} from './components'

import './App.css'

export default function App(): JSX.Element {
  return (
    <div style={{ maxWidth: '1280px', margin: '10px auto 100px' }}>
      <h1 style={{ textAlign: 'center' }}>Welcome to React v18 with Typescript.</h1>
      <p style={{ textAlign: 'center', margin: 0 }}>React: v18.1.0</p>
      <p style={{ textAlign: 'center', margin: 0 }}>Typescript: v4.7.3</p>

      <h1 style={{ textAlign: 'center', fontWeight: 400 }}>React Hook Form</h1>
      <div className='wrapper'>
        <BasicExample />
        <RegisterFieldsExample />
        <ValidationExample />
        <IntegrateExistingExample />
        <IntegrateThirdParty />
        <ControlInputExample />
        <HandleErrorExample />
        <SchemaExample />
        <AccessibilityExample />
        <ConnectFormExample />
        <FormProviderExample />
      </div>
    </div>
  )
}
