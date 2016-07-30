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
import RootPageComponent from './homeIndex';

class reactDemo extends Component{

	render(){
		var title = 'root'
    var rootPage = RootPageComponent;
    return(
          <Navigator
            initialRoute = {
              {name:title,component:rootPage}
            }
            configureScene = {
              (route)=>{
                return Navigator.SceneConfigs.VerticalDownSwipeJump;
              }
            }
            renderScene = {
              (route,navigator)=>{
                var myCp = route.component;
                return <myCp {...route.params} navigator={navigator}/>
              }
            }
            />
      )
	}

}
AppRegistry.registerComponent('reactDemo', () => reactDemo);
