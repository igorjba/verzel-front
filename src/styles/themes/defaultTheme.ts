export const defaultTheme = {
    colors: {
      background: {
        primary: '#ffffff',
        secondary: '#e9eef7',
        accent: '#3374db',
        alert: '#d3291d',
        light: '#ebebeb', 
        dark: '#000000',
        medium:'#c7c7c7',
        input: '#ffffff',
      },
      shadow: {
        outline: '#d4cfc9'
      },
      text: {
        primary: '#333333',
        primaryConstant: '#333333',
        secondary: '#898989',
        accent: '#3e4a5b',
        muted: '#5b5b5b',
        standard: '#3374db',
        additional: '#c7c7c7',
        contrast: '#171718',
        alertContrast: '#ffffff',
      },
      transparent: {
        normal: 'transparent',
        rgb: '0,0,0',
        contrast: '#000000'
      }
    },
    fontFamily: {
      primary: "'Vazirmatn', 'Roboto', sans-serif"
    }
  } as const;
  