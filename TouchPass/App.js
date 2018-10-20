import React from 'react';
import { AppRegistry, SectionList, StyleSheet, Text, View, Image } from 'react-native';
import Load from './components/load';

export default class App extends React.Component {
  state = {
    loaded: false
  }
  constructor(){
    super();
    Load.load(v => this.setState({loaded: true}));
  }
  render() {
    return (
      <View style={{width: 100, height: 50}}>
        {this.state.loaded ? <Text> Welcome!</Text> : <Image source={require('./wp3148317.jpg')}/>}
      </View>
    );
}
}
  


// skip this line if using Create React Native App
AppRegistry.registerComponent('TouchPass', () => App);