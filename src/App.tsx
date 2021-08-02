import './App.css';
import axiosInstance from './services/httpInterceptor';
import { getRequest } from './services/httpService';

function App() {
  const clickHandler = () => {
    getRequest('https://jsonplaceholder.typicode.com/users')
  }

  return (
    <div className="App">
      <button type="button" onClick={clickHandler}>Click</button>
    </div>
  );
}

export default App;
