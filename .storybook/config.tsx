import React from 'react';

import {
  configure,
  addDecorator,
} from '@storybook/react';

import {
  ThemeProvider,
} from 'styled-components';

import lightTheme from '../src/style/lightTheme';
import GlobalStyle from '../src/style/globalStyle';

addDecorator((story) => (
  <>
    <ThemeProvider theme={lightTheme}>
      <>
        <GlobalStyle />
        {story()}
      </>
    </ThemeProvider>
  </>
));

configure(require.context('../src/', true, /\.stories\.tsx$/), module);
