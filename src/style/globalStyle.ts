import {
  createGlobalStyle,
} from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Chivo:400,700&display=swap');

  html,
  body {
    margin: 0;
    padding: 0;
    background-color: ${(props) => props.theme.colors.background};
    -webkit-font-smoothing: antialiased;
  }
`;

export default GlobalStyle;
