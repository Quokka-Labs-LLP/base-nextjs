import * as React from 'react';
import styled from 'styled-components';

import { Card } from './';

/**
 * .attrs
 *
 * This is a chainable method that attaches some props to a styled component.
 * The first and only argument is an object that will be merged into the rest
 * of the component's props. The attrs object accepts the following values:
 */
export const Input = styled.input.attrs((props) => ({
    type: 'text',
    size: props.size || '1em',
}))`
    border: 2px solid palevioletred;
    margin: ${(props) => props.size};
    padding: ${(props) => props.size};
`;

const NativeInput = styled.input`
    padding: 0.5em;
    margin: 0.5em;
    color: ${(props: { inputColor: string }) => props?.inputColor || 'palevioletred'};
    background: papayawhip;
    border: none;
    border-radius: 3px;
`;

export default function InputWithAttrs(): JSX.Element {
    return (
        <Card label="Passed Props">
            <pre className="language-tsx">
                <code>
                    {`
import styled from 'styled-components'

export interface InputProps {
    inputColor?: string
}

/**
 * Passed Props
 *
 * If the styled target is a simple element (e.g. styled.div), styled-components
 * passes through any known HTML attribute to the DOM. If it is a custom React
 * component (e.g. styled(MyComponent)), styled-components passes through all
 * props.
 *
 * Usage:
 * <Input />
 * <Input inputColor='tomato' />
 */
export const Input = styled.input\`
    padding: 0.5em;
    margin: 0.5em;
    color: \${(props: InputProps) => props?.inputColor || 'palevioletred'};
    background: papayawhip;
    border: none;
    border-radius: 3px;
\`

<Input defaultValue="@probablyup" type="text" />
<Input defaultValue="@geelen" type="text" inputColor="rebeccapurple" />
                          `}
                </code>
            </pre>
            <Input defaultValue="@probablyup" type="text" />
            <NativeInput defaultValue="@geelen" type="text" inputColor="rebeccapurple" />
        </Card>
    );
}
