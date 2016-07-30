import React, { Component }from 'react';

import {
  AppRegistry,
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  View,
  ScrollView,
  Image,
  ListView
} from 'react-native';
import { createStore } from 'redux'
import todoApp from './Reducers'
import store from './myStore'
import MRJFoundPage from './page2'
import MRJTabbarController from './MRJContainer/MRJTabbarController'//tabbar控制器
import MRJTabbar from './MRJContainer/MRJTabbar'//tabbar
import MRJTabbarItem from './MRJContainer/MRJTabbarItem'//tabbarItem
import MRJNavigationController from './MRJContainer/MRJNavigationController'
import MRJViewController from './MRJContainer/MRJViewController'

class MRJApp extends React.Component
{




}




AppRegistry.registerComponent('MRJApp',()=>MRJApp)
