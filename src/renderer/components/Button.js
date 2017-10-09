import React from 'react'
import { TouchableHighlight, Text, StyleSheet, processColor } from 'react-native'
import { any, string } from 'prop-types'

const Button = ({children, style, textStyle, pressColor, ...restProps}) =>
  <TouchableHighlight
    style={[styles.root, style]}
    underlayColor={processColor(pressColor || 'blue', 0.125)}
    {...restProps}
  >
    <Text style={[styles.children, textStyle]}>
      {children}
    </Text>
  </TouchableHighlight>

const styles = StyleSheet.create({
  root: {
    marginRight: 5,
    padding: 5,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center'
  },
  children: {
    // paddingTop: 2
  }
})

Button.propTypes = {
  children: any,
  style: TouchableHighlight.propTypes.style,
  textStyle: Text.propTypes.style,
  pressColor: string
}

export default Button
