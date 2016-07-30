import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableHighlight,
  Image,
  View,
  element,

  Navigator
} from 'react-native';
import MRJNavigationItem from '../MRJContainer/MRJNavigationItem'
import MRJNavigationBar from '../MRJContainer/MRJNavigationBar'
import {SCREEN_HEIGHT,
SCREEN_WIDTH,
NAVIGATIONBAR_HEIGHT,
TABBAR_HEIGHT,
PLATFORM} from '../MRJContainer/PlatformSizeAdapter'
class MRJHomeSubPage extends Component {
  constructor(props)
  {
    super(props)

    this.popCallBack = this.popCallBack.bind(this)
    // this.state :{
    //   dataArray:this.getData();
    // }
  }
  render()
  {
    return(
      <View style = {styes.testBackground}>
      <MRJNavigationBar
        title='主页子页面'
        leftItem = {this.getBackItem()}
      />
          <Text style={styes.test}>
             我是二级子页面
          </Text>
          {/*<*/}
      </View>
    )

  }
  getBackItem()
  {
    return(
      <MRJNavigationItem
        icon={this.getBackIcon()}
        pressEventCallback = {this.popCallBack}
      />
    )
  }
  getBackIcon()
  {
      return(<Image source = {require('../MRJContainer/arrowleft.png')}/>)
  }
  popCallBack()
  {

    var navigator = this.props.navigator
    if (navigator) {
            navigator.pop();
          }
  }
}
const styes = StyleSheet.create(
  {
    test:{
      marginTop:20,
      marginLeft:8,
    },
    testBackground:{
      backgroundColor:'#FFFFFF',
      height:SCREEN_HEIGHT,
    }
  }
)
module.exports = MRJHomeSubPage
