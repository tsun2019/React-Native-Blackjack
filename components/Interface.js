import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-elements';

export default class Interface extends Component {
  constructor(props) {
    super(props)
      
  }

  render() {
    return (
      <View style = {styles.container}>
        <View style={styles.interface}>
          <Button disabled={this.props.gameStarted} onPress = {this.props.deal} title = "Deal" />
          <Button disabled={!this.props.gameStarted} onPress = {this.props.hit} title = "Hit" buttonStyle = {{backgroundColor: 'green'}} />
          <Button disabled={!this.props.gameStarted && !this.props.busted}  onPress = {this.props.stand} title = "Stand" buttonStyle = {{backgroundColor: 'orange'}}/>
          <Button disabled={!this.props.gameStarted}  onPress = {this.props.restart} title = "Restart"  buttonStyle = {{backgroundColor: 'red'}}/>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  interface: {
    flex: 1,
    backgroundColor: 'yellow',
  }  
})  
