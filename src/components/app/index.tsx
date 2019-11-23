import React from 'react';
import {
  BrowserRouter,
  Route,
  Switch,
} from 'react-router-dom';
import {
  ThemeProvider,
} from 'styled-components';

import lightTheme from '../../style/lightTheme';
import darkTheme from '../../style/darkTheme';

import GlobalStyle from '../../style/globalStyle';

import Header from '../header';
import Footer from '../footer';
import Home from '../../routes/home';
import About from '../../routes/about';

function App() {
  return (
    <BrowserRouter>
      <>
        <ThemeProvider theme={lightTheme}>
          <>
            <GlobalStyle />
            <Header />
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/about" exact component={About} />
            </Switch>
            <Footer />
          </>
        </ThemeProvider>
      </>
    </BrowserRouter>
  );
}

export default App;
