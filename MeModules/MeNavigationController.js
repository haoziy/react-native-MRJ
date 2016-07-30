/**
  MRJNavigationController 是管理导航路由;导航栏,内容等的容器;
*/


import React, { Component } from 'react';
import {
  Image,
  View,
  element,
  Navigator,
  StyleSheet
} from 'react-native';
import MRJNavigationBar from '../MRJContainer/MRJNavigationBar'
class MeNavigationController extends React.Component
{

  constructor(props)
  {
    super(props)
  }
  static defaultProps = {
    rootContentPage:()=>{<View style={styles.defaultStyle}>
        <Text>请设置rootContentPage</Text>
    </View>},
    navigationBar:()=>{
      <MRJNavigationBar/>
    },
  }

  static propTypes= {
    // viewControllers:React.PropTypes.array,//所有在路由栈里的控制器;//
    rootViewController:React.PropTypes.element,//路由栈底的控制器
    navigationBar:React.PropTypes.element,//导航条
    navigationBarHidden:React.PropTypes.bool,//是否隐藏导航栏
    tabbarController:React.PropTypes.element,//tabbarController
    tabbarHidden:React.PropTypes.bool,//是否隐藏tabbar
  }

  render(){
    var defaultName = '我的'
    var rootViewController = this.props.rootViewController;
    var defaultComponent = rootViewController.constructor;
    var tabbar = this.props.tabbar;
    var key = rootViewController.constructor.name;
    return(
      <Navigator
              initialRoute={{ name: defaultName, component: defaultComponent }}
              configureScene={(route) => {
                return Navigator.SceneConfigs.PushFromRight;
              }}
              renderScene={(route, navigator) => {
                let Component = route.component;
                return <Component
                tabbar = {tabbar}
                navigator = {navigator}
                {...route.params}
                />
              }}
              key = {key}
              />

    )
  }
  getDefaultRoot(){

    return(
      <View style={styles.defaultStyle}>
          <Text>请设置rootViewController</Text>
      </View>
    )

  }
  getDefaultNavigationBar()
  {
    // return (new MRJNavigationBar(title:'title')).render()
  }
}
const styles = StyleSheet.create({
  defaultStyle :{
    alignItems:'center',
  }
})
module.exports = MeNavigationController
