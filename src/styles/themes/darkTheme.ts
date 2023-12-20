export const darkTheme = {
  colors: {
    background: {
      primary: '#1e1e1e',
      primaryReversed: '#ffffff',
      secondary: '#2a2a2a',
      secondaryReversed: '#e9eef7',
      accent: '#bcd8ff',
      accentReversed: '#3374db',
      alert: '#e06c75',
      alertReversed: '#d3291d',
      light: '#ebebeb',
      dark: '#000000',
      medium:'#c7c7c7',
      input: '#c7c7c7',
      inputReversed: '#ffffff',
    },
    shadow: {
      outline: '#ffffff',
      outlineReversed: '#d4cfc9',
    },
    text: {
      primary: '#ffffff',
      primaryReversed: '#333333',
      primaryConstant: '#333333',
      secondary: '#a1a1a1',
      secondaryReversed: '#898989',
      accent: '#4e88b4',
      accentReversed: '#3e4a5b',
      muted: '#777777',
      mutedReversed: '#5b5b5b',
      standard: '#5090d3',
      standardReversed: '#3374db',
      additional: '#8a8a8a',
      additionalReversed: '#c7c7c7',
      contrast: '#e0e0e0',
      contrastReversed: '#171718',
      alertContrast: '#000000',
      alertContrastReversed: '#ffffff',
    },
    transparent: {
      normal: 'transparent',
      rgb: '255,255,255',
      contrast: '#ffffff',
      contrastReversed: '#000000',
    }
  },
  fontFamily: {
    primary: "'Montserrat', sans-serif"
  }
} as const;
