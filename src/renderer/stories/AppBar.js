import React from 'react'
import { storiesOf } from '@storybook/react'

import AppBar from '../components/AppBar'
export default () => {
  storiesOf('AppBar', module)
    .add('Base', () => <AppBar />)
}
