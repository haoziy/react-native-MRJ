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
import MRJTabbar from './tabbar/MRJUsualTabbar'
import MRJTabbarItem from './tabbar/MRJTabbarItem'
import HomeNavigator from './HomeModules/HomeNavigator'
import MRJFoundPage from './FoundModules/page2'
import MRJReportPage from './ReportModules/page3'
import MRJMePage from './MeModules/page4'



class MainEntrance extends Component {
  constructor(props) {
    super(props);
    this.itemBeSelcted = this.itemBeSelcted.bind(this)

  }
  // test()
  // {
  //
  // }

  state = {
      selectedIndex:0,
      items:this.initTabbarItems(),
  }
  initTabbarItems()
  {
      var ttt =  new MRJTabbar();
      var arr = new Array();
      var homeItem = <MRJTabbarItem key={'0'}
            index = {0}
            normalTitle = "首页"
            normalIcon ={this.indexNormalIcon()}
            selectedIcon = {this.indexSelectedIcon()}
            normalTitleColor = '#C1C1C1'
            selectedTitleColor = '#F4A100'
            beSelected = {this.itemBeSelcted}
            selected = {false}
        />
      var foundItem = <MRJTabbarItem key={'1'}
            index = {1}
            normalTitle = "发现"
            normalIcon = {this.foundNormalIcon()}
            selectedIcon = {this.foundSelectedIcon()}
            normalTitleColor = '#C1C1C1'
            beSelected = {this.itemBeSelcted}
            selectedTitleColor = '#F4A100'
            selected = {false}
        />
      var reportItem = <MRJTabbarItem key={'2'}
            index = {2}
            normalTitle = "报表"
            normalIcon = {this.reportNormalIcon()}
            selectedIcon = {this.reportSelectedIcon()}
            normalTitleColor = '#C1C1C1'
            selectedTitleColor = '#F4A100'
            beSelected = {this.itemBeSelcted}
            selected = {false}
        />
      var mineItem = <MRJTabbarItem key={'3'}
            index = {3}
            normalTitle = "我的"
            normalIcon = {this.meNormalIcon()}
            selectedIcon = {this.meSelectedIcon()}
            normalTitleColor = '#C1C1C1'
            selectedTitleColor = '#F4A100'
            beSelected = {this.itemBeSelcted}
            selected = {false}
        />
      arr.push(homeItem);
      arr.push(foundItem);
      arr.push(reportItem);
      arr.push(mineItem);
      return arr;
  }
  getContentPages()
  {
    var arr = new Array();
    var homePage = <HomeNavigator key='1'/>;
    var foundPage = <MRJFoundPage key='2' />;
    var reportPage = <MRJReportPage key='3'/>;
    var minePage = <MRJMePage key='4'/>;
    arr.push(homePage);
    arr.push(foundPage);
    arr.push(reportPage);
    arr.push(minePage);
    return arr;
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
  render(){
		return(
        <MRJTabbar
          selectedIndex={this.state.selectedIndex}
          tabbarItems = {this.initTabbarItems()}
          contentPages = {this.getContentPages()}
        />
		)
	}
  onPress()
  {
  }
  itemBeSelcted(item)
  {
    this.setState({selectedIndex:item.props.index})
  }
}


AppRegistry.registerComponent('MainEntrance',()=>MainEntrance)
