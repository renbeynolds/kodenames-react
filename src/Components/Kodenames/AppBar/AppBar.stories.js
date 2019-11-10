import { storiesOf } from '@storybook/react';
import React from 'react';
import AppBar from './AppBar';

storiesOf('AppBar', module)

    .add('default', () => (
        <AppBar />
    ))
