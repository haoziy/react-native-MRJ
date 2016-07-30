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
import MRJNavigationBar from '../MRJContainer/MRJNavigationBar'
import MRJNavigationItem from '../MRJContainer/MRJNavigationItem'
import MRJHomeSubPage from './subPage1'
class MRJHomePage extends Component {
  constructor(props)
  {
    super(props)
    this.jumpTest = this.jumpTest.bind(this)
  }
  render()
  {
    return(
      <View>
          {/*{this.props.navigator.props.navigator}*/}
          <Text style={styes.test} onPress={this.jumpTest}>
             首页主页
          </Text>
      </View>
    )
  }
  getRightItem()
  {
    return(
      <MRJNavigationItem
        title='跳转测试'
        pressEventCallback = {this.jumpTest}
      />
    )
  }
  jumpTest()
  {
    var SecondPageComponent = MRJHomeSubPage
    var navigator = this.props.navigator;
        //为什么这里可以取得 props.navigator?请看上文:
        //<Component {...route.params} navigator={navigator} />
        //这里传递了navigator作为props
        if(navigator) {
            navigator.push({
                name: 'SecondPageComponent',
                component: SecondPageComponent,
            })
        }
  }
}
const styes = StyleSheet.create(
  {
    test:{
      marginTop:20,
      marginLeft:8,
    }
  }
)
module.exports = MRJHomePage
