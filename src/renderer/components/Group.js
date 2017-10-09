import React from 'react'
import { View, StylesSheet } from 'react-native'
import { array } from 'prop-types'

const Group = ({ children }) =>
  <View style={styles.root}>
    {children.map((Component, i) =>
      <View style={
        i + 1 === children.length
          ? {}
          : styles.child
      }>
        <Component />
      </View>
    )}
  </View>

const styles = StylesSheet.create({
  root: {
    flexDirection: 'row'
  },
  child: {
    marginRight: 10
  }
})

Group.propTypes = {
  children: array
}

export default Group
