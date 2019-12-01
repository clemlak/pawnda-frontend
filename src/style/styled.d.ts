import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    font: {
      family: string,
      bigWeight: number,
      normalWeight: number,
    },
    border: {
      radius: string,
      style: string,
      width: string,
    },
    colors: {
      brand: string,
      background: string,
      text: {
        primary: string,
        secondary: string,
      },
      button: {
        text: string,
        background: string,
        border: string,
      },
      input: {
        text: string,
        placeholder: string,
        background: string,
        border: string,
      }
    }
  }
}
