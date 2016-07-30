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
import MRJNavigationBar from './MRJNavigationBar'
// import MRJViewController from './MRJViewController'
class MRJNavigationController extends React.Component
{

  constructor(props)
  {
    super(props)
  }
  static defaultProps = {
    // rootContentPage:this.getDefaultRoot(),
    rootContentPage:()=>{<View style={styles.defaultStyle}>
        <Text>请设置rootContentPage</Text>
    </View>},
    navigationBar:()=>{
      <MRJNavigationBar/>
    },
    // this.getDefaultNavigationBar()
  }

  static propTypes= {
    viewControllers:React.PropTypes.array,//所有在路由栈里的控制器;//
    rootViewController:React.PropTypes.element,//路由栈底的控制器
    rootContentPage:React.PropTypes.element,//根内容,也是路由栈第一个元素
    contentPage:React.PropTypes.element,//内容区域/默认非空
    navigationBar:React.PropTypes.element,//导航条
    navigationBarHidden:React.PropTypes.bool,//是否隐藏导航栏
    tabbarController:React.PropTypes.element,//tabbarController
    tabbarHidden:React.PropTypes.bool,//是否隐藏tabbar
  }

  render(){
    var defaultName = ''
    var rootViewController = this.props.rootViewController;
    var defaultComponent = rootViewController.constructor;
    var tabbar = this.props.tabbar;
    var contentView  = rootViewController.props.contentView;
    return(
      <Navigator
              initialRoute={{ name: defaultName, component: defaultComponent }}
              configureScene={(route) => {
                return Navigator.SceneConfigs.PushFromRight;
              }}
              renderScene={(route, navigator) => {
                let Component = route.component;
                return <Component
                contentView = {contentView}
                tabbar = {tabbar}
                navigator = {navigator}
                {...route.params}
                />
              }}
              //navigationBar = {this.getDefaultNavigationBar()}
              />

    )
  }
  getDefaultRoot(){

    return(
      <View style={styles.defaultStyle}>
          <Text>请设置rootContentPage</Text>
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
module.exports = MRJNavigationController
