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
import store from './myStore'
import MRJFoundPage from './page2'
import MRJHomePage from './HomeModules/page1'
import MRJTabbarController from './MRJContainer/MRJTabbarController'//tabbar控制器
import MRJTabbar from './MRJContainer/MRJTabbar'//tabbar
import MRJTabbarItem from './MRJContainer/MRJTabbarItem'//tabbarItem
import MRJNavigationController from './MRJContainer/MRJNavigationController'
import MRJViewController from './MRJContainer/MRJViewController'
import HomeViewController from './HomeModules/HomeViewController'
class MainEntrance extends React.Component {
  constructor(props)
  {
    super(props)
    this.state = {
      selectedIndex:0,//默认选中第一个位置的tabbarItem;
      // tabbarController:this.getTabbarController(),
    }
    this.test = this.test.bind(this)
    this.itemBeSelcted = this.itemBeSelcted.bind(this);
  }
  static defaultProps = {
    tabbar:null,
    viewControllers:null,

    tabbarController:null,
  }

    static propTypes= {
      tabbar:React.PropTypes.element,
      viewControllers:React.PropTypes.array.require,//内容页面;里面装对应的页面
      tabbarController:React.PropTypes.element,
    }



  getViewControllers()
  {

    var  arr = new Array();
    var x = new MRJHomePage();
    var homeVC  = new HomeViewController({contentView:x});
    var reportVC = new MRJViewController({contentView:x})
    var homeNav = new MRJNavigationController({rootViewController:homeVC})
    var reportNav = new MRJNavigationController({rootViewController:reportVC})


    arr.push(homeNav)
    arr.push(reportNav)
    return arr;
  }
  getTabbarController()
  {

    var index = this.state.selectedIndex;
    var viewControllers = this.getViewControllers();
    var tabbar = this.setTabbar();
    var tabbarController = new MRJTabbarController(
      {viewControllers:viewControllers,selectedIndex:index,tabbar:tabbar})
    return tabbarController.render()
  }
  render()
  {
    // var component = this.getTabbarController()
    // return component.render();

    return this.getTabbarController();
  }

  setTabbar(){
    var arr = new Array();
    var homeItem = <MRJTabbarItem key={'0'}
          index = {0}
          normalTitle = "首页"
          normalIcon ={this.indexNormalIcon()}
          selectedIcon = {this.indexSelectedIcon()}
          normalTitleColor = '#C1C1C1'
          selectedTitleColor = '#F4A100'
          beSelected = {this.itemBeSelcted}
          selected = {this.state.selectedIndex==0}
      />
    var foundItem = <MRJTabbarItem key={'1'}
          index = {1}
          normalTitle = "发现"
          normalIcon = {this.foundNormalIcon()}
          selectedIcon = {this.foundSelectedIcon()}
          normalTitleColor = '#C1C1C1'
          beSelected = {this.itemBeSelcted}
          selectedTitleColor = '#F4A100'
          selected = {this.state.selectedIndex==1}
      />
    var reportItem = <MRJTabbarItem key={'2'}
          index = {2}
          normalTitle = "报表"
          normalIcon = {this.reportNormalIcon()}
          selectedIcon = {this.reportSelectedIcon()}
          normalTitleColor = '#C1C1C1'
          selectedTitleColor = '#F4A100'
          beSelected = {this.itemBeSelcted}
          selected = {this.state.selectedIndex==2}
      />
    var mineItem = <MRJTabbarItem key={'3'}
          index = {3}
          normalTitle = "我的"
          normalIcon = {this.meNormalIcon()}
          selectedIcon = {this.meSelectedIcon()}
          normalTitleColor = '#C1C1C1'
          selectedTitleColor = '#F4A100'
          beSelected = {this.itemBeSelcted}
          selected = {this.state.selectedIndex==3}
      />
    arr.push(homeItem);
    arr.push(foundItem);
    arr.push(reportItem);
    arr.push(mineItem);
    var selectedIndex = this.state.selectedIndex
    return new MRJTabbar({tabbarItems:arr,selectedIndex:selectedIndex})
  }
  indexNormalIcon()
  {
    return (<Image source={require('./MRJTabbarIcons/indexNormal.png')}/>)
  }
  indexSelectedIcon()
  {
    return (<Image source={require('./MRJTabbarIcons/indexActive.png')}/>)
  }
  foundNormalIcon()
  {
    return (<Image source={require('./MRJTabbarIcons/foundNormal.png')}/>)
  }
  foundSelectedIcon()
  {
    return(<Image source = {require('./MRJTabbarIcons/foundActive.png')}/>)
  }
  reportNormalIcon()
  {
    return(<Image source={require('./MRJTabbarIcons/managementNormal.png')} />)
  }
  reportSelectedIcon()
  {
    return(<Image source = {require('./MRJTabbarIcons/managementActive.png')}/>)
  }
  meNormalIcon()
  {
      return(<Image source = {require('./MRJTabbarIcons/mineNormal.png')}/>)
  }
  meSelectedIcon()
  {
      return(<Image source = {require('./MRJTabbarIcons/mineActive.png')}/>)
  }
  itemBeSelcted(index)
  {
    this.setState({selectedIndex:index})
  }
  componentDidMount()
  {
      // let unsubscribe = store.subscribe(this.test);
  }

test()
{
  console.log(this);
  var rrr = store;
  var state = store.getState();
  var ttt = store.getState().selectedTabbarItem;
  this.setState({selectedIndex:ttt})

}
}
// module.exports = MainEntrance

// AppRegistry.registerComponent('MainEntrance',()=>MainEntrance)
