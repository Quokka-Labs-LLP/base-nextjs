import * as React from 'react';
import { createGlobalStyle } from 'styled-components';

import { Card } from '.';

export interface GlobalStyleProps {
    whiteColor?: string;
}

/**
 * createGlobalStyle
 *
 * A helper function to generate a special StyledComponent that handles global
 * styles. Normally, styled components are automatically scoped to a local CSS
 * class and therefore isolated from other components. In the case of
 * createGlobalStyle, this limitation is removed and things like CSS resets or
 * base stylesheets can be applied.
 *
 * Usage:
 * <GlobalStyle whiteColor />
 */
const GlobalStyles = createGlobalStyle`
  body {
    color: ${(props: GlobalStyleProps) => (props.whiteColor ? 'white' : 'black')};
  }
`;

export default function GlobalStyle(): JSX.Element {
    return (
        <Card label="createGlobalStyle()">
            <pre className="language-tsx">
                <code>
                    {`
import { createGlobalStyle } from 'styled-components'

export interface GlobalStyleProps {
    whiteColor?: string
}
/**
 * createGlobalStyle
 *
 * A helper function to generate a special StyledComponent that handles global
 * styles. Normally, styled components are automatically scoped to a local CSS
 * class and therefore isolated from other components. In the case of
 * createGlobalStyle, this limitation is removed and things like CSS resets or
 * base stylesheets can be applied.
 *
 * Usage:
 * <GlobalStyle whiteColor />
 */
export const GlobalStyle = createGlobalStyle\`
  body {
    color: \${(props: GlobalStyleProps) =>
      (props.whiteColor ? 'white' : 'black')};
  }
\`

<GlobalStyle />
`}
                </code>
            </pre>
            <GlobalStyles />
        </Card>
    );
}
