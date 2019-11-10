import { storiesOf } from '@storybook/react';
import React from 'react';
import MDCTextField from './MDCTextField';

storiesOf('MDCTextField', module)

    .add('default', () => (
        <MDCTextField 
            label="My Input"
        />
    ))