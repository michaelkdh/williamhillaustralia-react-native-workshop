import React, { Component } from 'react';

// react-native native components
// API can be found on react-native documentation https://facebook.github.io/react-native/docs/view.html
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

// Platform specific code
// Platform.select({}), along with Platform.OS === 'ios|android' allows you to conditionally show content based off the platform
const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
  'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
  'Shake or press menu button for dev menu',
});

// Exporting a component which is imported by index.js
export default class App extends Component<{}> {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit App.js
        </Text>
        <Text style={styles.instructions}>
          {instructions}
        </Text>
      </View>
    );
  }
}

// Stylesheets used within native components
// Flexbox is the default layout style, similar syntax to modern web CSS
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
