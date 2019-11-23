import {
  createGlobalStyle,
} from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Public+Sans:400,700,900&display=swap');

  html,
  body {
    margin: 0;
    padding: 0;
    background-color: ${(props) => props.theme.colors.background};
  }
`;

export default GlobalStyle;
