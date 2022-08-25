import React from 'react';

import { Button, Drag, FadeInButton, GlobalStyle, InputWithAttrs, PasswordInput } from './components';
import './App.css';

export default function App(): JSX.Element {
    return (
        <div style={{ maxWidth: '1440px', margin: '10px auto 100px' }}>
            <h1 style={{ textAlign: 'center', fontWeight: 400 }}>Welcome to React-v17 with Typescript.</h1>
            <p style={{ textAlign: 'center', margin: 0 }}>React: v17.0.2</p>
            <p style={{ textAlign: 'center', margin: 0 }}>Typescript: v4.3.5</p>
            <p style={{ textAlign: 'center', margin: 0 }}>Styled-Components: v5.3.5</p>

            <div
                style={{
                    display: 'grid',
                    gridTemplateColumns: '49% 49%',
                    gridColumnGap: '20px',
                    gridRowGap: '40px',
                    marginBottom: '20px',
                    marginTop: '40px',
                }}
            >
                <GlobalStyle />
                <FadeInButton />
                <Drag />
                <Button />
                <InputWithAttrs />
                <PasswordInput />
            </div>
        </div>
    );
}
