import * as React from 'react';
import styled from 'styled-components';

import { Card, Input } from './';

// Input's attrs will be applied first, and then this attrs obj
const StyledInput = styled(Input).attrs({
    type: 'password',
})`
    // similarly, border will override Input's border
    border: 2px solid aqua;
`;

export default function PasswordInput(): JSX.Element {
    return (
        <Card label=".attrs">
            <pre className="language-tsx">
                <code>
                    {`
import styled from 'styled-components'

/**
 * .attrs
 *
 * This is a chainable method that attaches some props to a styled component.
 * The first and only argument is an object that will be merged into the rest
 * of the component's props. The attrs object accepts the following values:
 */
export const Input1 = styled.input.attrs((props) => ({
    type: 'text',
    size: props.size || '1em',
}))\`
    border: 2px solid palevioletred;
    margin: \${(props) => props.size};
    padding: \${(props) => props.size};
\`

// Input's attrs will be applied first, and then this attrs obj
const PasswordInput = styled(Input1).attrs({
    type: 'password',
})\`
    // similarly, border will override Input's border
    border: 2px solid aqua;
\`

<Input1 placeholder="A bigger text input" size="2em" />
<PasswordInput placeholder="A bigger password input" size="2em" />
                          `}
                </code>
            </pre>
            {/* eslint-disable */}
            {/* @ts-ignore */}
            <StyledInput placeholder="A bigger password input" size="2em" />
        </Card>
    );
}
