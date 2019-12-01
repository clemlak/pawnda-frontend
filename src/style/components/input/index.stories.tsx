import React from 'react';
import { storiesOf } from '@storybook/react';

import Input from '.';

storiesOf('Input', module)
  .add('standard', () => (
    <Input placeholder="Placeholder" />
  ));
