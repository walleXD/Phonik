import React from 'react'
import { View, StyleSheet } from 'react-native'
import { node } from 'prop-types'

const Toolbar = ({children}) =>
  <View style={styles.root}>
    {children}
  </View>

const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
    padding: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#2980b9'
  }
})

Toolbar.propTypes = {
  children: node
}

export default Toolbar
