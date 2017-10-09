import React from 'react'
import { StyleSheet, TextInput } from 'react-native'

import Toolbar from './Toolbar'
// import Icon from './Icon'
// import Button from './Button'
import WindowControl from './WindowControls'

const AppBar = () =>
  <Toolbar>
    <WindowControl textStyle={styles.windowControler} className='no-drag' />
    {/* <View style={styles.buttonContainer}> */}
    {/* <View style={styles.buttonContainer}> */}
    {/* <Button */}
    {/* textStyle={styles.buttonText} */}
    {/* style={styles.button} */}
    {/* onPress={() => {}} */}
    {/* > */}
    {/* <Icon>arrow_back</Icon> */}
    {/* </Button> */}
    {/* <Button */}
    {/* onPress={() => {}} */}
    {/* style={styles.button} */}
    {/* textStyle={styles.buttonText} */}
    {/* > */}
    {/* <Icon>refresh</Icon> */}
    {/* </Button> */}
    {/* </View> */}
    {/* </View> */}
    <TextInput
      className='no-drag'
      editable={false}
      placeholder='Search...'
      style={styles.searchBox} />
  </Toolbar>

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: 'row'
  },
  button: {},
  buttonText: {
    color: 'white',
    fontSize: 18
  },
  windowControler: {
    color: 'white',
    fontSize: 12
  },
  searchBox: {
    height: 33,
    paddingTop: 5,
    paddingBottom: 5,
    paddingRight: 20,
    paddingLeft: 20,
    borderColor: '#444',
    backgroundColor: '#f7f7f7',
    borderRadius: 5,
    fontSize: 13
  }
})

export default AppBar
