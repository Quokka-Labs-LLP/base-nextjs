import React from 'react';
import './App.css';
import { httpService } from './services/httpService';

const App: React.FC = () => {
  const clickHandler = (): void => {
    httpService.getRequest('users')
  }

  return (
    <div className="App">
      <button type="button" onClick={clickHandler}>Click</button>
    </div>
  )
}

export default App;
