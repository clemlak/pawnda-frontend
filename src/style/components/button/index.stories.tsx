import React from 'react';
import { storiesOf } from '@storybook/react';

import Button from '.';

storiesOf('Button', module)
  .add('standard', () => (
    <>
      <Button
        onClick={() => console.log('Button clicked')}
      >
        Click me
      </Button>
    </>
  ));
