import React from'react';
import {Text, View, StyleSheet, Image} from 'react-native';
import Login from './login'
import Load from './help'



export default class Loading extends React.Component {
    state ={
        loaded: false
    } 
    constructor(){
        super()
        Load.load(v => this.setState({loaded:true}));
    }
    render() {
      return (
        <View style={styles.container}>
          {this.state.loaded ? <Login/> : 
          <View style={styles.splash}>
            <Text style={styles.txt}>TouchPass</Text>
          </View>}
        </View>
      )
    }
  }
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      //justifyContent: 'center',
      //alignItems: 'center',
      backgroundColor: '#00d439'
    },

    splash: {
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 180,
    },
   

    txt: {
      fontSize: 55,
      color: '#fff',

    },
  })