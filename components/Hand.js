import React, { Component } from 'react';
import {StyleSheet, Text, View } from 'react-native';
import Card from './Card';

export default class Hand extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        {this.props.hand.map((card, i) => {
          if (this.props.dealer && i === 1 && this.props.status !== "You lose! Better luck next time!" && this.props.status !== "Push!" && this.props.status !== 'House busted! You win!' && this.props.status !== "You win! Nice job!") {
            return <Card value={card.v} face={card.f} hidden={true} key={i}/>
          }
          else {
            return <Card value={card.v} face={card.f} hidden={false} key={i}/>
          }
        })}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10,
    marginLeft: 40,
    marginRight: 20,
    flexDirection: 'row',
    justifyContent: 'space-around',
    resizeMode: 'contain'
  }

})
