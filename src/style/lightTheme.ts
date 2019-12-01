import { DefaultTheme } from 'styled-components';

const lightTheme: DefaultTheme = {
  font: {
    family: 'Chivo',
    bigWeight: 700,
    normalWeight: 400,
  },
  border: {
    radius: '20px',
    style: 'solid',
    width: '1px',
  },
  colors: {
    brand: '#05f',
    background: '#f7f8f9',
    text: {
      primary: '#000',
      secondary: '#000',
    },
    button: {
      text: '#fff',
      background: '#05f',
      border: '#05f',
    },
    input: {
      text: '#000',
      placeholder: '#8b8b8b',
      background: '#f7f8f9',
      border: '#f7f8f9',
    },
  },
};

export default lightTheme;
