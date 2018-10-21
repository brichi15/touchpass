import React from 'react';
import { AppRegistry, SectionList, StyleSheet, Text, View, Image } from 'react-native';
import * as firebase from 'firebase';

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
      firebase.auth().signInAndRetrieveDataWithCredential(credential).catch((error) => {
        console.log(error)
      })

    }

  }
  render() {
    return (
      <Container>
        <Form>
          <Button
          full
          rounded
          primary
          onPress= {() => this.loginWithFacebook()}
          >
            <Text style={{color:'white'}}>Login With Facebook</Text>
          </Button>
        </Form>
      </Container>
    );
}
}