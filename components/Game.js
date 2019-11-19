import React, { Component } from 'react';
import { Modal, StyleSheet, Text, View, ImageBackground, Image} from 'react-native';
import { Button } from 'react-native-elements';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faQuestionCircle, faTimesCircle } from '@fortawesome/free-solid-svg-icons'
import Interface from './Interface';
import Hand from './Hand';

export default class Game extends Component {
  constructor(props) {
    super(props)
    this.state = {
      deck: [...this.shuffle(this.shuffle(this.shuffle([
        {v:11,f:"c1"},{v:2,f:"c2"},{v:3,f:"c3"},{v:4,f:"c4"},{v:5,f:"c5"},{v:6,f:"c6"},
        {v:7,f:"c7"},{v:8,f:"c8"},{v:9,f:"c9"},{v:10,f:"c10"},{v:10,f:"c11"},{v:10,f:"c12"},{v:10,f:"c13"},
        {v:11,f:"h1"},{v:2,f:"h2"},{v:3,f:"h3"},{v:4,f:"h4"},{v:5,f:"h5"},{v:6,f:"h6"},
        {v:7,f:"h7"},{v:8,f:"h8"},{v:9,f:"h9"},{v:10,f:"h10"},{v:10,f:"h11"},{v:10,f:"h12"},{v:10,f:"h13"},
        {v:11,f:"s1"},{v:2,f:"s2"},{v:3,f:"s3"},{v:4,f:"s4"},{v:5,f:"s5"},{v:6,f:"s6"},
        {v:7,f:"s7"},{v:8,f:"s8"},{v:9,f:"s9"},{v:10,f:"s10"},{v:10,f:"s11"},{v:10,f:"s12"},{v:10,f:"s13"},
        {v:11,f:"d1"},{v:2,f:"d2"},{v:3,f:"d3"},{v:4,f:"d4"},{v:5,f:"d5"},{v:6,f:"d6"},
        {v:7,f:"d7"},{v:8,f:"d8"},{v:9,f:"d9"},{v:10,f:"d10"},{v:10,f:"d11"},{v:10,f:"d12"},{v:10,f:"d13"},
        {v:11,f:"c1"},{v:2,f:"c2"},{v:3,f:"c3"},{v:4,f:"c4"},{v:5,f:"c5"},{v:6,f:"c6"},
        {v:7,f:"c7"},{v:8,f:"c8"},{v:9,f:"c9"},{v:10,f:"c10"},{v:10,f:"c11"},{v:10,f:"c12"},{v:10,f:"c13"},
        {v:11,f:"h1"},{v:2,f:"h2"},{v:3,f:"h3"},{v:4,f:"h4"},{v:5,f:"h5"},{v:6,f:"h6"},
        {v:7,f:"h7"},{v:8,f:"h8"},{v:9,f:"h9"},{v:10,f:"h10"},{v:10,f:"h11"},{v:10,f:"h12"},{v:10,f:"h13"},
        {v:11,f:"s1"},{v:2,f:"s2"},{v:3,f:"s3"},{v:4,f:"s4"},{v:5,f:"s5"},{v:6,f:"s6"},
        {v:7,f:"s7"},{v:8,f:"s8"},{v:9,f:"s9"},{v:10,f:"s10"},{v:10,f:"s11"},{v:10,f:"s12"},{v:10,f:"s13"},
        {v:11,f:"d1"},{v:2,f:"d2"},{v:3,f:"d3"},{v:4,f:"d4"},{v:5,f:"d5"},{v:6,f:"d6"},
        {v:7,f:"d7"},{v:8,f:"d8"},{v:9,f:"d9"},{v:10,f:"d10"},{v:10,f:"d11"},{v:10,f:"d12"},{v:10,f:"d13"},
        {v:11,f:"c1"},{v:2,f:"c2"},{v:3,f:"c3"},{v:4,f:"c4"},{v:5,f:"c5"},{v:6,f:"c6"},
        {v:7,f:"c7"},{v:8,f:"c8"},{v:9,f:"c9"},{v:10,f:"c10"},{v:10,f:"c11"},{v:10,f:"c12"},{v:10,f:"c13"},
        {v:11,f:"h1"},{v:2,f:"h2"},{v:3,f:"h3"},{v:4,f:"h4"},{v:5,f:"h5"},{v:6,f:"h6"},
        {v:7,f:"h7"},{v:8,f:"h8"},{v:9,f:"h9"},{v:10,f:"h10"},{v:10,f:"h11"},{v:10,f:"h12"},{v:10,f:"h13"},
        {v:11,f:"s1"},{v:2,f:"s2"},{v:3,f:"s3"},{v:4,f:"s4"},{v:5,f:"s5"},{v:6,f:"s6"},
        {v:7,f:"s7"},{v:8,f:"s8"},{v:9,f:"s9"},{v:10,f:"s10"},{v:10,f:"s11"},{v:10,f:"s12"},{v:10,f:"s13"},
        {v:11,f:"d1"},{v:2,f:"d2"},{v:3,f:"d3"},{v:4,f:"d4"},{v:5,f:"d5"},{v:6,f:"d6"},
        {v:7,f:"d7"},{v:8,f:"d8"},{v:9,f:"d9"},{v:10,f:"d10"},{v:10,f:"d11"},{v:10,f:"d12"},{v:10,f:"d13"},
        {v:11,f:"c1"},{v:2,f:"c2"},{v:3,f:"c3"},{v:4,f:"c4"},{v:5,f:"c5"},{v:6,f:"c6"},
        {v:7,f:"c7"},{v:8,f:"c8"},{v:9,f:"c9"},{v:10,f:"c10"},{v:10,f:"c11"},{v:10,f:"c12"},{v:10,f:"c13"},
        {v:11,f:"h1"},{v:2,f:"h2"},{v:3,f:"h3"},{v:4,f:"h4"},{v:5,f:"h5"},{v:6,f:"h6"},
        {v:7,f:"h7"},{v:8,f:"h8"},{v:9,f:"h9"},{v:10,f:"h10"},{v:10,f:"h11"},{v:10,f:"h12"},{v:10,f:"h13"},
        {v:11,f:"s1"},{v:2,f:"s2"},{v:3,f:"s3"},{v:4,f:"s4"},{v:5,f:"s5"},{v:6,f:"s6"},
        {v:7,f:"s7"},{v:8,f:"s8"},{v:9,f:"s9"},{v:10,f:"s10"},{v:10,f:"s11"},{v:10,f:"s12"},{v:10,f:"s13"},
        {v:11,f:"d1"},{v:2,f:"d2"},{v:3,f:"d3"},{v:4,f:"d4"},{v:5,f:"d5"},{v:6,f:"d6"},
        {v:7,f:"d7"},{v:8,f:"d8"},{v:9,f:"d9"},{v:10,f:"d10"},{v:10,f:"d11"},{v:10,f:"d12"},{v:10,f:"d13"},
        {v:11,f:"c1"},{v:2,f:"c2"},{v:3,f:"c3"},{v:4,f:"c4"},{v:5,f:"c5"},{v:6,f:"c6"},
        {v:7,f:"c7"},{v:8,f:"c8"},{v:9,f:"c9"},{v:10,f:"c10"},{v:10,f:"c11"},{v:10,f:"c12"},{v:10,f:"c13"},
        {v:11,f:"h1"},{v:2,f:"h2"},{v:3,f:"h3"},{v:4,f:"h4"},{v:5,f:"h5"},{v:6,f:"h6"},
        {v:7,f:"h7"},{v:8,f:"h8"},{v:9,f:"h9"},{v:10,f:"h10"},{v:10,f:"h11"},{v:10,f:"h12"},{v:10,f:"h13"},
        {v:11,f:"s1"},{v:2,f:"s2"},{v:3,f:"s3"},{v:4,f:"s4"},{v:5,f:"s5"},{v:6,f:"s6"},
        {v:7,f:"s7"},{v:8,f:"s8"},{v:9,f:"s9"},{v:10,f:"s10"},{v:10,f:"s11"},{v:10,f:"s12"},{v:10,f:"s13"},
        {v:11,f:"d1"},{v:2,f:"d2"},{v:3,f:"d3"},{v:4,f:"d4"},{v:5,f:"d5"},{v:6,f:"d6"},
        {v:7,f:"d7"},{v:8,f:"d8"},{v:9,f:"d9"},{v:10,f:"d10"},{v:10,f:"d11"},{v:10,f:"d12"},{v:10,f:"d13"},
        {v:11,f:"c1"},{v:2,f:"c2"},{v:3,f:"c3"},{v:4,f:"c4"},{v:5,f:"c5"},{v:6,f:"c6"},
        {v:7,f:"c7"},{v:8,f:"c8"},{v:9,f:"c9"},{v:10,f:"c10"},{v:10,f:"c11"},{v:10,f:"c12"},{v:10,f:"c13"},
        {v:11,f:"h1"},{v:2,f:"h2"},{v:3,f:"h3"},{v:4,f:"h4"},{v:5,f:"h5"},{v:6,f:"h6"},
        {v:7,f:"h7"},{v:8,f:"h8"},{v:9,f:"h9"},{v:10,f:"h10"},{v:10,f:"h11"},{v:10,f:"h12"},{v:10,f:"h13"},
        {v:11,f:"s1"},{v:2,f:"s2"},{v:3,f:"s3"},{v:4,f:"s4"},{v:5,f:"s5"},{v:6,f:"s6"},
        {v:7,f:"s7"},{v:8,f:"s8"},{v:9,f:"s9"},{v:10,f:"s10"},{v:10,f:"s11"},{v:10,f:"s12"},{v:10,f:"s13"},
        {v:11,f:"d1"},{v:2,f:"d2"},{v:3,f:"d3"},{v:4,f:"d4"},{v:5,f:"d5"},{v:6,f:"d6"},
        {v:7,f:"d7"},{v:8,f:"d8"},{v:9,f:"d9"},{v:10,f:"d10"},{v:10,f:"d11"},{v:10,f:"d12"},{v:10,f:"d13"},
        {v:11,f:"c1"},{v:2,f:"c2"},{v:3,f:"c3"},{v:4,f:"c4"},{v:5,f:"c5"},{v:6,f:"c6"},
        {v:7,f:"c7"},{v:8,f:"c8"},{v:9,f:"c9"},{v:10,f:"c10"},{v:10,f:"c11"},{v:10,f:"c12"},{v:10,f:"c13"},
        {v:11,f:"h1"},{v:2,f:"h2"},{v:3,f:"h3"},{v:4,f:"h4"},{v:5,f:"h5"},{v:6,f:"h6"},
        {v:7,f:"h7"},{v:8,f:"h8"},{v:9,f:"h9"},{v:10,f:"h10"},{v:10,f:"h11"},{v:10,f:"h12"},{v:10,f:"h13"},
        {v:11,f:"s1"},{v:2,f:"s2"},{v:3,f:"s3"},{v:4,f:"s4"},{v:5,f:"s5"},{v:6,f:"s6"},
        {v:7,f:"s7"},{v:8,f:"s8"},{v:9,f:"s9"},{v:10,f:"s10"},{v:10,f:"s11"},{v:10,f:"s12"},{v:10,f:"s13"},
        {v:11,f:"d1"},{v:2,f:"d2"},{v:3,f:"d3"},{v:4,f:"d4"},{v:5,f:"d5"},{v:6,f:"d6"},
        {v:7,f:"d7"},{v:8,f:"d8"},{v:9,f:"d9"},{v:10,f:"d10"},{v:10,f:"d11"},{v:10,f:"d12"},{v:10,f:"d13"},
        {v:11,f:"c1"},{v:2,f:"c2"},{v:3,f:"c3"},{v:4,f:"c4"},{v:5,f:"c5"},{v:6,f:"c6"},
        {v:7,f:"c7"},{v:8,f:"c8"},{v:9,f:"c9"},{v:10,f:"c10"},{v:10,f:"c11"},{v:10,f:"c12"},{v:10,f:"c13"},
        {v:11,f:"h1"},{v:2,f:"h2"},{v:3,f:"h3"},{v:4,f:"h4"},{v:5,f:"h5"},{v:6,f:"h6"},
        {v:7,f:"h7"},{v:8,f:"h8"},{v:9,f:"h9"},{v:10,f:"h10"},{v:10,f:"h11"},{v:10,f:"h12"},{v:10,f:"h13"},
        {v:11,f:"s1"},{v:2,f:"s2"},{v:3,f:"s3"},{v:4,f:"s4"},{v:5,f:"s5"},{v:6,f:"s6"},
        {v:7,f:"s7"},{v:8,f:"s8"},{v:9,f:"s9"},{v:10,f:"s10"},{v:10,f:"s11"},{v:10,f:"s12"},{v:10,f:"s13"},
        {v:11,f:"d1"},{v:2,f:"d2"},{v:3,f:"d3"},{v:4,f:"d4"},{v:5,f:"d5"},{v:6,f:"d6"},
        {v:7,f:"d7"},{v:8,f:"d8"},{v:9,f:"d9"},{v:10,f:"d10"},{v:10,f:"d11"},{v:10,f:"d12"},{v:10,f:"d13"},
        ])))],
      playerHand: [],
      houseHand: [],
      status: "Hit Deal to start!",
      gameStarted: false,
      modalVisible: false

    }
  }

  setModalVisible(visible) {
    this.setState({
      modalVisible: visible
    })
  }

  //shuffle deck
  shuffle(deck) {
    for (let i = deck.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [deck[i], deck[j]] = [deck[j], deck[i]];
    }
    return deck;
  }

  handleDeal = () => {
    const newDeck = [...this.state.deck];
    const newPlayerHand = [...this.state.playerHand];
    const newHouseHand = [...this.state.houseHand];
    let newStatus = "Hit or Stand!"

    newPlayerHand.push(newDeck.pop());
    newHouseHand.push(newDeck.pop());
    newPlayerHand.push(newDeck.pop());
    newHouseHand.push(newDeck.pop());

    if (this.handleScore(newPlayerHand) === 21 && newPlayerHand.length === 2){
      newStatus = "Blackjack. You get paid 3:2 of your bet!"
    }
    //blackjack?
    //if (this.handleScore(newPlayerHand) === 21 && newPlayerHand.length === 2) {
     //blackjack then status is something else 
   // }
    this.setState({
      playerHand: newPlayerHand,
      houseHand: newHouseHand,
      deck: newDeck,
      status: newStatus,
      gameStarted: !this.state.gameStarted
    })
  }
  

  handleScore = (hand) => {
    let score = 0;
    let hasAce = false;
    let numOfAces = 0;

    hand.forEach((element) => {
      score += element.v;
      if (element.f === "c1" || element.f === "d1" || element.f === "h1" || element.f === "s1") {
          hasAce = true;
          numOfAces += 1;
      }
    })

    //logic to decide if ace is 1 or 11
    //if (score > 21 && hasAce) {
      //score -= 11;
      //score += 1;
    //}
    switch (numOfAces) {
      case 1:
        if (score > 21) {
          score -= 10;
        }
      case 2:
        if (score > 21) {
          score -= 20;
        }
      case 3:
        if (score > 21) {
          score -= 30;
        }
      case 4:
        if (score > 21) {
          score -= 40;
        }
    }
    
    return score;
  }

  handleHit = () => {
    const newDeck = [...this.state.deck];
    const newPlayerHand = [...this.state.playerHand];
    let status = ""

    newPlayerHand.push(newDeck.pop());

    if (this.handleBust(newPlayerHand)){
      status = 'You busted'
    }
    else {
      status = "Hit or Stand!"
    }
    

    this.setState({
      playerHand: newPlayerHand,
      deck: newDeck,
      status: status
    })
  }


  handleRestart = () => {
    const newDeck = [...this.state.deck];
    const newPlayerHand = [];
    const newHouseHand = [];
    const status = 'Hit Deal to start!'

    this.setState({
      playerHand: newPlayerHand,
      houseHand: newHouseHand,
      status: status,
      gameStarted: !this.state.gameStarted
    })

  }

  handleBust = (hand) => {
    if (this.handleScore(hand) > 21) {
      return true;
    }
    else {
      return false;
    }
  }

  handleStand = () => {
    this.setState({
      status: "Stand! House turn!"
    })
  }

  handleHouseTurn = () => {
    const newDeck = [...this.state.deck];
    const newHouseHand = [...this.state.houseHand];
    const newPlayerHand = [...this.state.playerHand];
    let status = "";

    while (this.handleScore(newHouseHand) < 17){
      newHouseHand = newHouseHand.push(newDeck.pop());

    }

    if (this.handleBust(newHouseHand)) {
      status = "House busted! You win!"
    }
    else if (this.handleScore(newHouseHand) === this.handleScore(newPlayerHand)) {
      status = "Push!"
    }
    else if (this.handleScore(newHouseHand) > this.handleScore(newPlayerHand)) {
      status = "You lose! Better luck next time!"
    }
    else {
      status = "You win! Nice job!"
    }

    this.setState({
      deck: newDeck,
      houseHand: newHouseHand,
      playerHand: newPlayerHand,
      status: status
    })
  }


  render() {
    if (this.state.status === "Stand! House turn!") {
      this.handleHouseTurn();
    }

    return (
      <ImageBackground style ={styles.background} source={require('../public/background.jpeg')}>
        <FontAwesomeIcon icon={ faQuestionCircle } size= { 24 } color = { 'white' } onPress={() => this.setModalVisible(!this.state.modalVisible)} style = {styles.icon}/>
        <Modal animationType = "slide" visible={this.state.modalVisible}>
          <View style={{
            flex: 1,
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center'}}>
            
            <View style={{
              width: 300,
              height: 300}}>
              <Text style={{fontSize: 50}}>Instructions:</Text>
              <Text>Note: There is no double down or insurance.</Text>
              <Text style={{fontWeight: '600'}}>Las Vegas Strip Rules:</Text> 
              <Text>There are 6 decks in total. Dealer must draw to all totals of 16 or less and stand on all totals of 17 to 21. </Text>
              <Image source={require('../public/strip.jpeg')} style={{width:200, height: 200, marginTop: 20, marginBottom: 20, marginLeft: 50}} />   
              <Button
                onPress = {() => this.setModalVisible(!this.state.modalVisible)}
                title = "Click here to close"
                buttonStyle = {{backgroundColor: 'red'}}
              />
            </View>
        </View>
        </Modal>
        <View style = {styles.container}>
          <View style = {{flex:2, marginTop: -10}}>
            <Text style={{color: 'white', fontSize: 15, fontWeight: '800', textAlign: 'center'}}> House Hand </Text>
            <Hand hand = {this.state.houseHand} dealer={true} status={this.state.status}/>
          </View>
          <Text style={{color: 'white',backgroundColor: 'black', fontSize: 20, textAlign:'center', marginBottom: 15}}>{this.state.status}</Text>
          <View style = {{flex:2}}>
            <Text style={{color: 'white', fontWeight: '800', textAlign: 'center'}}> Player Hand </Text>
            <Hand hand = {this.state.playerHand} dealer={false}/>
          </View>
          <Interface
            hit = {this.handleHit}
            deal = {this.handleDeal}
            restart = {this.handleRestart}
            stand = {this.handleStand}
            gameStarted = {this.state.gameStarted}
          />
        </View>
      </ImageBackground>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    width: '100%',
    height: '100%'
  },
  icon: {
    marginTop: 30,
    marginLeft: 5
    
  }
})
