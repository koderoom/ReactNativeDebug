
import React, {Component} from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';


export default class App extends Component{
  constructor(props){
    super(props);
    this.state = {"counter": 0};
    this.incrementMe = this.incrementMe.bind(this);
  }

  incrementMe() {
    console.log("Incrment Me.");
    const newCounter = this.state.counter + 1;

    this.setState({counter : newCounter});
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>{this.state.counter? this.state.counter : 'Counter'}</Text>
        <Button color='teal' title="Incrment Me" onPress={this.incrementMe}></Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 50,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
