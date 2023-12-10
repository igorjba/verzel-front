export const darkTheme = {
  colors: {
    background: {
      primary: '#1e1e1e',
      secondary: '#2a2a2a',
      accent: '#bcd8ff',
      alert: '#e06c75',
      light: '#ebebeb', 
      dark: '#000000', 
      medium:'#c7c7c7',
      input: '#c7c7c7',
    },
    shadow: {
      outline: '#ffffff'
    },
    text: {
      primary: '#ffffff',
      primaryConstant: '#333333',
      secondary: '#a1a1a1',
      accent: '#4e88b4',
      muted: '#777777',
      standard: '#5090d3',
      additional: '#8a8a8a',
      contrast: '#e0e0e0',
      alertContrast: '#000000',
    },
    transparent: {
      normal: 'transparent',
      rgb: '255,255,255',
      contrast: '#ffffff',
    }
  },
  fontFamily: {
    primary: "'Montserrat', sans-serif"
  }
} as const;
