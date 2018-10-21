import React from 'react';
import { AppRegistry, SectionList, StyleSheet, Text, View, Image } from 'react-native';
import * as firebase from 'firebase';
import { createSwitchNavigator, navigate, navigation } from 'react-navigation'

// Initialize Firebase
var firebaseConfig = {
  apiKey: "AIzaSyAfW-k17fTieeBHLTzFVtJXG4uRwyoOhWA",
  authDomain: "touchpass-bf2cb.firebaseapp.com",
  databaseURL: "https://touchpass-bf2cb.firebaseio.com",
  projectId: "touchpass-bf2cb",
  storageBucket: "touchpass-bf2cb.appspot.com",
  messagingSenderId: "922588327406"
};

firebase.initializeApp(firebaseConfig);

import { Container, Content, Header, Form, Input, Item, Button, Label} from 'native-base'
import Main from './main'

export default class Login extends React.Component {




  componentDidMount(){

    firebase.auth().onAuthStateChanged((user) => {
      if(user != null){
        console.log(user)
      }
    })
  }

    async loginWithFacebook(){

    const {type,token} = await Expo.Facebook.logInWithReadPermissionsAsync('248445412505612', {permissions: ['public_profile']})

    if (type == 'success') {

      const credential = firebase.auth.FacebookAuthProvider.credential(token)
      firebase.auth().signInAndRetrieveDataWithCredential(credential).then(() => this.props.navigation.navigate('Main')).catch((error) => {
        console.log(error)
      })
      

    

  }}


  render() {
    return (
      <View style={styles.container}>
        <View style={styles.titleBox}>
          <Text style={styles.title}>TouchPass</Text>
          <Text style={styles.h1}>Pay faster, Do more</Text>
        </View>
   
        <View style={styles.buttonBox}>
          <Button
          full
          rounded
          primary
          onPress= {() => this.loginWithFacebook()}

          >
            <Text style={styles.buttonText}>Login With Facebook</Text>
          </Button>
        </View>   
      </View>
    );
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },

  buttonBox: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
    padding: 20,
    marginTop: 40,
    
  },

  buttonText: {
    color: '#fff',
    fontSize: 20, 

  },
  titleBox: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    marginTop: 180,


  },
  title: {
    color: '#00d439',
    fontSize: 55,

  },
  h1: {
    fontSize: 22,
    color: '#00d439',
  },

})