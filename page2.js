import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableHighlight,
  Image,
  View,
  element,
  Dimensions,
} from 'react-native';
import MRJViewController from './MRJContainer/MRJViewController'
class MRJFoundPage extends React.Component {
  constructor()
  {
    super()
    this.onPress = this.onPress.bind(this);
  }
  render()
  {
    return(
      <View>
          <TouchableOpacity onPress = {this.onPress}>
          <Text>page2</Text>
          </TouchableOpacity>
      </View>
    )
  }
  onPress()
  {
    
  }
}
module.exports =  MRJFoundPage
