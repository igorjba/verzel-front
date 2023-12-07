import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { Router } from './Router';
import { GlobalStyle } from './styles/global/index';
import { defaultTheme } from './styles/themes/defaultTheme';
import { AppProvider } from './store/contexts';

export function App() {
  return (
    <AppProvider>
      <GlobalStyle />
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </AppProvider>
  );
}
