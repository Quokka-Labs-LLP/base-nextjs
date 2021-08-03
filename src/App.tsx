import React from 'react';
import './App.css';
import { getRequest } from './services/httpService';

const App: React.FC = () => {
  const clickHandler = (): void => {
    getRequest('users')
  }

  return (
    <div className="App">
      <button type="button" onClick={clickHandler}>Click</button>
    </div>
  )
}

export default App;
