import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { Router } from './Router';
import { GlobalStyle } from './styles/global/index';
import { adaptedTheme } from './styles/themes/default';

export function App() {
  return (
    <ThemeProvider theme={adaptedTheme}>
      <GlobalStyle />
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </ThemeProvider>
  );
}
