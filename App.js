import React, { Component } from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import { Button } from 'react-native-elements';
import Game from './components/Game';

export default class App extends Component {
  //deck is a state because it is going to be changing. 
  constructor(props: Props){
    super(props);
    this.state = { 
      started: false
    }
  }

  handleStart = () => {
    this.setState({
      started: true
    });
  } 

  //{this.state.deck.map(card =><Text>{card.v}</Text>)}
  render() {
    if (this.state.started == true) {
      return <Game/>
    }
    else {
      return (
        <ImageBackground style ={styles.background} source={require('./public/background.jpeg')}>
          <View style={{flex: 1}}>
            <View style = {styles.container}>
              <View style={styles.title}> 
                <Text style={{fontSize: 50,color: '#eee', fontWeight: '800'}}>Welcome to <Text style={{fontStyle: 'italic'}}>Blackjack!</Text></Text>
              </View>
              <Button 
                onPress = {this.handleStart} 
                title = "Click here to start!"
                buttonStyle = {{backgroundColor: 'red'}}
              />
            </View>
          </View>
        </ImageBackground>
      );
    }
  }
}

const styles = StyleSheet.create({
  background: {
    width: '100%',
    height: '100%'
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
    
  },
  title: {
    fontSize: 50,
    alignItems: 'center',
    marginBottom: 20
  },
});
