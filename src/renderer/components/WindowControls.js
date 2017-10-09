import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import { func } from 'prop-types'
import { remote } from 'electron'

import Button from './Button'
import Icon from './Icon'

const { minimize, close, setFullScreen, isFullScreen } = remote.getCurrentWindow()

const WindowControl = ({ style, textStyle, closeWindow, minimizeWindow, maximizeWindow, ...restProps }) =>
  <View style={[styles.root, style]} {...restProps}>
    <Button
      textStyle={textStyle}
      onPress={() => closeWindow()}>
      <Icon>close</Icon>
    </Button>
    <Button
      textStyle={textStyle}
      onPress={() => minimizeWindow()}
    >
      <Icon>remove</Icon>
    </Button>
    <Button
      textStyle={textStyle}
      onPress={() => maximizeWindow()}
    >
      <Icon>fullscreen</Icon>
    </Button>
  </View>

const styles = StyleSheet.create({
  root: {
    flexDirection: 'row'
  }
})

WindowControl.propTypes = {
  closeWindow: func,
  maximizeWindow: func,
  minimizeWindow: func,
  style: View.propTypes.style,
  textStyle: Text.propTypes.style
}

WindowControl.defaultProps = {
  closeWindow: () => close(),
  maximizeWindow: () => setFullScreen(!isFullScreen()),
  minimizeWindow: () => minimize()
}

export default WindowControl
