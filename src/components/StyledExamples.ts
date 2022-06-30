import styled, { createGlobalStyle, css, keyframes } from 'styled-components'

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
export const Input = styled.input`
  padding: 0.5em;
  margin: 0.5em;
  color: ${(props: any) => props?.inputColor || 'palevioletred'};
  background: papayawhip;
  border: none;
  border-radius: 3px;
`

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
}))`
  border: 2px solid palevioletred;
  margin: ${(props) => props.size};
  padding: ${(props) => props.size};
`

/**
 * shouldForwardProp
 *
 * This is a more dynamic, granular filtering mechanism than transient props.
 * It's handy in situations where multiple higher-order components are being
 * composed together and happen to share the same prop name.shouldForwardProp
 * works much like the predicate callback of Array.filter. A prop that fails
 * the test isn't passed down to underlying components, just like a transient
 * prop.
 *
 * Keep in mind that, as in this example, other chainable methods should always
 * be executed after .withConfig.
 *
 * Usage:
 * <Comp hidden draggable='true'>
 *   Drag Me!
 * </Comp>
 *
 */
export const Comp = styled('div')
  .withConfig({
    shouldForwardProp: (prop, defaultValidatorFn) => !['hidden'].includes(prop) && defaultValidatorFn(prop),
  })
  .attrs({ className: 'foo' })`
  color: red;
  &.foo {
    text-decoration: underline;
  }
`

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
export const GlobalStyle = createGlobalStyle`
  body {
    color: ${(props: any) => (props.whiteColor ? 'white' : 'black')};
  }
`

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
`
export const Button = styled.div`
  ${btn}
`

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
`

export const FadeInButton = styled.button`
  animation: 1s ${fadeIn} ease-out;
`
