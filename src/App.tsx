import React from 'react'

import SimpleExample from './components/SimpleExample'
import RecordLevelValidationExample from './components/RecordLevelValidationExample'
import FieldLevelValidation from './components/FieldLevelValidation'
import AsyncFieldLevelValidation from './components/AsyncFieldLevelValidation'
import SubmissionError from './components/SubmissionError'
import ThirdPartyComponent from './components/ThirdPartyComponent'
import FormatOnBlur from './components/FormatOnBlur'
import ReusableIndependent from './components/ReusableIndependent'
import LoadingAndInitialValues from './components/LoadingAndInitialValue'
import ArrayFields from './components/ArrayFields'
import FieldsComponentExample from './components/FieldsComponentExample'
import CalculateFields from './components/CalculateFields'
import AsyncTypeaheadWithRedux from './components/AsyncTypeaheadWithRedux'
import './App.css'

export default function App(): JSX.Element {
  return (
    <div style={{ maxWidth: '1280px', margin: '10px auto 100px' }}>
      <h1 style={{ textAlign: 'center', fontWeight: 300 }}>Welcome to React v18 with Typescript.</h1>
      <p style={{ textAlign: 'center', margin: 0 }}>React: v18.1.0</p>
      <p style={{ textAlign: 'center', margin: 0 }}>Typescript: v4.7.3</p>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '48% 48%',
          gap: '40px',
          marginBottom: '20px',
          marginTop: '30px',
        }}
      >
        <SimpleExample />
        <RecordLevelValidationExample />
        <FieldLevelValidation />
        <AsyncFieldLevelValidation />
        <SubmissionError />
        <ThirdPartyComponent />
        <FormatOnBlur />
        <ReusableIndependent />
        <LoadingAndInitialValues />
        <ArrayFields />
        <FieldsComponentExample />
        <CalculateFields />
        <AsyncTypeaheadWithRedux />
      </div>
    </div>
  )
}
