import React from'react';
import {Text, View, StyleSheet} from 'react-native';
import Login from './login'



export default class Loading extends React.Component {
    state ={
        loaded: false
    }
    static load(cb){
        setTimeout(cb, 3000);
    } 
    constructor(){
        super()
        load(v => this.setState({loaded:true}));
    }
    render() {
      return (
        <View style={styles.container}>
          {this.state.loaded ? Login : <View style={style.container}><Text>Loading styll</Text></View>}
        </View>
      )
    }
  }
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'green'
    }
  })