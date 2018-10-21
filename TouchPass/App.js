import React from 'react';
import { AppRegistry, SectionList, StyleSheet, Text, View, Image } from 'react-native';
import * as firebase from 'firebase';
import { createSwitchNavigator } from 'react-navigation'
import { Container, Content, Header, Form, Input, Item, Button, Label} from 'native-base'

import Loading from './components/load'
import Login from './components/login'

const App = createSwitchNavigator(
  {
    Loading,
    Login
  },
  {
  initialRouteName: 'Loading'
}
)

export default App