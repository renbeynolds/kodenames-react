import { storiesOf } from '@storybook/react';
import React from 'react';
import MDCButton from './MDCButton';

storiesOf('MDCButton', module)

    .add('default', () => (
        <MDCButton
            text='Button'
        />
    ))

    .add('outlined', () => (
        <MDCButton
            text='Button'
            outlined={true}
        />
    ))

    .add('raised', () => (
        <MDCButton
            text='Button'
            raised={true}
        />
    ))

    .add('raised and outlined', () => (
        <MDCButton
            text='Button'
            raised={true}
            outlined={true}
        />
    ))