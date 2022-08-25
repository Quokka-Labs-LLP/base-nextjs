import * as React from 'react';
import styled, { css } from 'styled-components';

import { Card } from './';

/**
 * css
 *
 * A helper function to generate CSS from a template literal with interpolations.
 * You need to use this if you return a template literal with functions inside an
 * interpolation due to how tagged template literals work in JavaScript.
 *
 * If you're interpolating a string you do not need to use this, only if you're
 * interpolating a function.
 */
const btn = css`
    background: palevioletred;
    border-radius: 3px;
    border: none;
    color: white;
    padding: 4px 8px;
    width: fit-content;
    margin: 8px;
`;

const Div = styled.div`
    ${btn}
`;

export default function Button(): JSX.Element {
    return (
        <Card label="css()">
            <pre className="language-tsx">
                <code>
                    {`
import { css } from 'styled-components'

/**
 * css
 *
 * A helper function to generate CSS from a template literal with interpolations.
 * You need to use this if you return a template literal with functions inside an
 * interpolation due to how tagged template literals work in JavaScript.
 *
 * If you're interpolating a string you do not need to use this, only if you're
 * interpolating a function.
 */
const btn = css\`
    background: palevioletred;
    border-radius: 3px;
    border: none;
    color: white;
    padding: 4px 8px;
    width: fit-content;
    margin: 8px;
\`

export const Button = styled.div\`
    \${btn}
\`

<Button>Normal</Button>
`}
                </code>
            </pre>
            <Div>Normal</Div>
        </Card>
    );
}
