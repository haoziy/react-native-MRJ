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
  Navigator
} from 'react-native';

import MRJHomePage from './page1'
import MRJNavigationBar from '../NavigationBar/MRJNavigationBar'
import MRJNavigationItem from '../NavigationBar/MRJNavigationItem'

class HomeNavigator extends Component
{

    render()
    {
      var defaultName = 'page1'
      var defaultComponent = MRJHomePage
      return(
        <Navigator
                initialRoute={{ name: defaultName, component: defaultComponent }}
                configureScene={(route) => {
                  return Navigator.SceneConfigs.PushFromRight;
                }}
                renderScene={(route, navigator) => {
                  let Component = route.component;
                  return <Component {...route.params} navigationController={navigator} />
                }}
                navigator = {this.getDefaultNavigationBar()}
                />
      )
    }
    getDefaultNavigationBar()
    {
      return(
        <MRJNavigationBar
        title='主页'/>
      )
    }
}
module.exports = HomeNavigator
