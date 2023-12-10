import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
        background: {
          primary: string;
          secondary: string;
          accent: string;
          alert: string;
          light: string, 
          dark: string;
          medium: string;
          input: string;
        },
        shadow: {
            outline: string;
          },
        text: {
          primary: string;
          primaryConstant: string,
          secondary: string;
          accent: string;
          muted: string;
          standard: string;
          additional: string;
          contrast: string;
          alertContrast: string;
        },
        transparent: {
          normal: string;
          rgb: string;
          contrast: string;
        }
      },
      fontFamily: {
        primary: string;
      }
  }
}
