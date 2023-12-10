import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { Router } from './Router';
import { GlobalStyle } from './styles/global/index';
import { defaultTheme } from './styles/themes/defaultTheme';
import { AppProvider } from './store/contexts';
import { VehicleProvider } from './store/contexts/vehicleListContext';

export function App() {
  return (
    <AppProvider>
      <GlobalStyle />
      <BrowserRouter>
        <VehicleProvider>
          <Router />
        </VehicleProvider>
      </BrowserRouter>
    </AppProvider>
  );
}
