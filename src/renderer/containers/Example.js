import React, { PureComponent } from 'react'
import { Button, Text, View, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import { number, func } from 'prop-types'
import { increment, decrement } from '../../common/actions/example'

const mapStateToProps = state => ({
  score: state.example.score
})

const mapDispatchToProps = {
  increment,
  decrement
}

@connect(mapStateToProps, mapDispatchToProps)
class Example extends PureComponent {
  static propTypes = {
    score: number,
    increment: func,
    decrement: func
  }

  render = () =>
    <View style={styles.horizontal}>
      <Text>{this.props.score || 0}</Text>
      <Button
        onPress={() => this.props.increment(1)}
        title='Add'
      />
      <Button
        onPress={() => this.props.decrement(1)}
        title='Substract'
      />
    </View>
}

const styles = StyleSheet.create({
  horizontal: {
    flexDirection: 'row'
  }
})

export default Example
