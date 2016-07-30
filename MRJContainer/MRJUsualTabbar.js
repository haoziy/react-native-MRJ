import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableHighlight,
  Image,
  View,
  ReactDOM,
  element,
  Dimensions,
} from 'react-native';
import MRJTabbarItem from './MRJTabbarItem'
class MRJTabbar extends Component {
  constructor(props)
  {
    super(props)

  }

  state = {
    // tabNormalNames:this.props.tabNormalNames,
    SCREEN_SIZE:this.getScreenSize(),
    TABBAR_HEIGHT:49,
    selectedIndex:this.props.selectedIndex,
    // activeIcons:this.activeIcon(),
  }
  getScreenSize()
  {
    var windowHeight =  Dimensions.get('window').height
    var windowWidth = Dimensions.get('window').width
    return{
      height:windowHeight,
      width:windowWidth
    }
  }
  static defaultProps = {
    selectedIndex:0,//默认选中的下标

  }

  static propTypes= {
    contentPages:React.PropTypes.array,//内容页面;里面装对应的页面
    tabbarItems:React.PropTypes.array,//tabbarItems//内容和tabbarItem 必须一一对应;并且为了不得多于5个;多于5个将不渲染;
  }
  render()
  {

    var contentPages = this.props.contentPages;
    var tabbarItems = this.props.tabbarItems;
    var screenStyle = {
      width:this.state.SCREEN_SIZE.width,
      height:this.state.SCREEN_SIZE.height,
    }
    var constentStyle = {
      width:this.state.SCREEN_SIZE.width,
      height:this.state.SCREEN_SIZE.height-this.state.TABBAR_HEIGHT
    }
    var tabbarStyle  = {
      width:this.state.SCREEN_SIZE.width,
      height:this.state.TABBAR_HEIGHT,//默认使用苹果的高度
      flexDirection:'row',
      justifyContent: 'space-around',//每个子项目之间左右等间距分布
      alignItems:'center',
      borderTopWidth:1,
      borderTopColor: '#000000',
    }
    var selectedIndex = this.state.selectedIndex;
    var self = this;
    return(
      <View>
            <View style = {constentStyle}>
                {
                    contentPages.map(function (page,i){
                      if(i==selectedIndex)
                      {
                        return   page;
                      }
                    })
                }
            </View>

            <View style={tabbarStyle}>
              {
                  tabbarItems.map(function(tabbarItem,i){
                    if(i==selectedIndex){
                      return(
                        <MRJTabbarItem
                          {...tabbarItem.props}
                          selected = {true}
                          key={i}
                          />
                      )

                    // tabbarItem.setProps({selected:true})
                  }else {
                    return(
                      <MRJTabbarItem
                        {...tabbarItem.props}
                        key={i}
                        selected = {false}
                        />
                    )
                  }

                  })
              }

            </View>
      </View>
    )
  }
  testPress(e)
  {

  }
  componentDidMount()
  {
      console.log('MRJUsualTabbar 收到消息')
      let unsubscribe = store.subscribe(() =>
        console.log(store.getState())
      )
  }
}

module.exports = MRJTabbar;
