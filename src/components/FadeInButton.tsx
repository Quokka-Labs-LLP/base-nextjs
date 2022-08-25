import * as React from 'react';
import styled, { keyframes } from 'styled-components';

import { Card } from './';

/**
 * keyframes
 *
 * A helper method to create keyframes for animations.
 */
const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const FadeIn = styled.button`
    animation: 1s ${fadeIn} ease-out;
`;

export default function FadeInButton(): JSX.Element {
    return (
        <Card label="keyframes">
            <pre className="language-tsx">
                <code>
                    {`
import { keyframes } from 'styled-components'

/**
 * keyframes
 *
 * A helper method to create keyframes for animations.
 */
const fadeIn = keyframes\`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
\`

export const FadeInButton = styled.button\`
    animation: 1s \${fadeIn} ease-out;
\`

<FadeInButton>Fade in Button</FadeInButton>
`}
                </code>
            </pre>
            <FadeIn>Fade in Button</FadeIn>
        </Card>
    );
}
