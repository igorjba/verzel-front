import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    font-family: 'Montserrat', sans-serif;
  }

  :focus {
    outline: 0;
    box-shadow: 0 0 0 2px ${(props) => props.theme['colors'].surface.outline};
  }

  body {
    background-color: ${(props) => props.theme['colors'].surface.background};
    color : ${(props) => props.theme['colors'].text.color1};
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font: 400 1rem ${(props) => props.theme['fontFamily'].primary};
  } 
`