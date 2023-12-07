import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    font-family: ${(props) => props.theme['fontFamily'].primary};
  }

  :focus {
    outline: 0;
    box-shadow: 0 0 0 2px ${(props) => props.theme['colors'].shadow.outline};
  }

  body {
    background-color: ${(props) => props.theme['colors'].background.primary};
    color : ${(props) => props.theme['colors'].text.primary};
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font: 400 1rem ${(props) => props.theme['fontFamily'].primary};
  } 
`