export const defaultTheme = {
  colors: {
    background: {
      primary: '#ffffff',
      primaryReversed: '#1e1e1e',
      secondary: '#e9eef7',
      secondaryReversed: '#2a2a2a',
      accent: '#3374db',
      accentReversed: '#bcd8ff',
      alert: '#d3291d',
      alertReversed: '#e06c75',
      light: '#ebebeb',
      dark: '#000000',
      medium:'#c7c7c7',
      input: '#ffffff',
      inputReversed: '#c7c7c7',
      danger: '#d42525',
      success: '#009f66',
    },
    shadow: {
      outline: '#d4cfc9',
      outlineReversed: '#ffffff',
    },
    text: {
      primary: '#333333',
      primaryReversed: '#ffffff',
      primaryConstant: '#333333',
      secondary: '#898989',
      secondaryReversed: '#a1a1a1',
      accent: '#3e4a5b',
      accentReversed: '#4e88b4',
      muted: '#5b5b5b',
      mutedReversed: '#777777',
      standard: '#3374db',
      standardReversed: '#5090d3',
      additional: '#c7c7c7',
      additionalReversed: '#8a8a8a',
      contrast: '#171718',
      contrastReversed: '#e0e0e0',
      alertContrast: '#ffffff',
      alertContrastReversed: '#000000',
    },
    transparent: {
      normal: 'transparent',
      rgb: '0,0,0',
      contrast: '#000000',
      contrastReversed: '#ffffff',
    }
  },
  fontFamily: {
    primary: "'Vazirmatn', 'Roboto', sans-serif"
  }
} as const;
