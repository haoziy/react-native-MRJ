
'use strict';
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  View,
  Navigator,
} from 'react-native';

class HelloMessage extends React.Component {
  render() {
    return(
      <View>

          <View>
          <Text>Hello</Text>
          <Text>Hello</Text>
          <Text>Hello</Text>
          </View>

          <View>
          <TouchableHighlight onPress={this.presse}>
            <Text>Hello</Text>
          </TouchableHighlight>

          <Text>Hello</Text>
          <Text>Hello</Text>
          </View>


      </View>



    );
  }
  presse()
  {
    console.log('presse');
  }
}

module.exports = HelloMessage;
