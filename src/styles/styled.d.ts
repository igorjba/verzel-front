import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      background: {
        primary: string;
        primaryReversed: string;
        secondary: string;
        secondaryReversed: string;
        accent: string;
        accentReversed: string;
        alert: string;
        alertReversed: string;
        light: string;
        dark: string;
        medium: string;
        input: string;
        inputReversed: string;
        danger: string;
        success: string;
      },
      shadow: {
        outline: string;
        outlineReversed: string;
      },
      text: {
        primary: string;
        primaryReversed: string;
        primaryConstant: string;
        secondary: string;
        secondaryReversed: string;
        accent: string;
        accentReversed: string;
        muted: string;
        mutedReversed: string;
        standard: string;
        standardReversed: string;
        additional: string;
        additionalReversed: string;
        contrast: string;
        contrastReversed: string;
        alertContrast: string;
        alertContrastReversed: string;
      },
      transparent: {
        normal: string;
        rgb: string;
        contrast: string;
        contrastReversed: string;
      }
    },
    fontFamily: {
      primary: string;
    }
  }
}
