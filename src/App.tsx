import React from 'react';
import './App.css';
import FirebaseSocialLogin from './components/Auth/FirebaseSocialLogin';

const App: React.FC = () => {
    return (
        <div>
            <FirebaseSocialLogin />
        </div>
    );
};

export default App;
