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
  PixelRatio,
} from 'react-native';
import store from '../myStore'
import MRJTabbarItem from './MRJTabbarItem'
import {
  TABBAR_HEIGHT,
  SCREEN_HEIGHT,
  SCREEN_WIDTH
} from './PlatformSizeAdapter'
class MRJTabbar extends Component {
  constructor(props)
  {
    super(props)
    this.testfunctin = this.testfunctin.bind(this);
  }

  state = {
    SCREEN_SIZE:this.getScreenSize(),
    TABBAR_HEIGHT:TABBAR_HEIGHT,
    selectedIndex:this.props.selectedIndex,//当前选中的item下标;通过设置下标渲染tabbarItems
  }
  getScreenSize()
  {
    // var windowHeight =  Dimensions.get('window').height
    // var windowWidth = Dimensions.get('window').width
    // var pxielRatio = PixelRatio.get()
    return{
      height:SCREEN_HEIGHT,
      width:SCREEN_WIDTH
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
    var selectedIndex = this.props.selectedIndex;
    var self = this;
    return(
      <View>
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
    // let unsubscribe = store.subscribe(() =>
    //   console.log(store.getState())
    // // )
    // let unsubscribe  = store.subscribe(this.testfunctin)
    // var hhhh;
  }
  testfunctin()
  {

  }

}

module.exports = MRJTabbar;
