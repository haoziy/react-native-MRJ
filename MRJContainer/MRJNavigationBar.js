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
} from 'react-native'
import {
SCREEN_HEIGHT,
SCREEN_WIDTH,
NAVIGATIONBAR_HEIGHT,
TABBAR_HEIGHT,
PLATFORM
}  from './PlatformSizeAdapter'
import MRJNavigationItem from './MRJNavigationItem'
class MRJNavigationBar extends Component {
  constructor(props) {
    super(props)
  }
  state = {

  }
  static defaultProps = {
    title:'title',
    navigationBarBackgroundColor:'#F4A100',//默认黄色
    titleColor:'#FFFFFF',
    titleFontSize:23,
    textAlign:'center',
    // leftItem:this.getBackIcon(),
  }

  static propTypes = {
    title:React.PropTypes.string,//标题
    leftItem:React.PropTypes.element,//如果有icon;则设置icon
    rightItem:React.PropTypes.element,
    navigationBarBackgroundColor:React.PropTypes.string,//NavigationBar背景颜色
    titleColor:React.PropTypes.string,
    titleFontSize:React.PropTypes.number,
    leftItemCallBack:React.PropTypes.func,
    rightItemCallBack:React.PropTypes.func,
  }
  getDefautBackItem(){
    <MRJNavigationItem
      title=''
      icon = {this.getBackIcon()}
    />
  }
  getBackIcon()
  {
      return(<Image source = {require('./arrowleft.png')}/>)
  }
  render()
  {
    var naviHeight = NAVIGATIONBAR_HEIGHT;
    var windowWidth = SCREEN_WIDTH
    var leftStyle = {
      width:windowWidth/4,
      flexDirection:'row',
      justifyContent: 'flex-start',//每个子项目紧挨
      alignItems:'center',
      // paddingLeft:8,
    }
    var titleStyle = {
      flexDirection:'row',
      alignItems:'center',
      width:windowWidth/2,
      color:this.props.titleColor,
      textAlign:'center',
      fontSize:21,
      paddingLeft:1,
      paddingRight:1,
    }
    var rightStyle = {
      width:windowWidth/4,
      flexDirection:'row',
      justifyContent:'flex-end',//每个子项目紧挨
      alignItems:'center',
      paddingRight:8,
    }
    var statusBarHeight = PLATFORM=='ios'?20:0;
    var statusBarStyle = {
      backgroundColor:'#F4A100',
      height:statusBarHeight
    };
    var backgroundStyle = {
      backgroundColor:'#F4A100',
      height:NAVIGATIONBAR_HEIGHT,
    };
    var navigationBarHeight = NAVIGATIONBAR_HEIGHT - statusBarHeight;
    var navigationBarStyle = {
      alignItems:'center',
      height:navigationBarHeight,
      flexDirection:'row',
      justifyContent: 'center',//每个子项目紧挨
    };
    if(PLATFORM=='ios')
    {
      return(
        <View style={backgroundStyle}>
            <View style={statusBarStyle}>
            </View>
            <View style={navigationBarStyle}>
              <View style={leftStyle}>
                  {this.props.leftItem}
              </View>
                <Text
                numberOfLines={1}
                style={titleStyle}>
                  {this.props.title}
              </Text>
              <View style={rightStyle}>
                {this.props.rightItem}
              </View>

            </View>

        </View>

      )
    }else {
      return(
        <View style={backgroundStyle}>
            {/*<View style={styles.statusBarStyle}>
            </View>*/}
            <View style={navigationBarStyle}>
              <View style={leftStyle}>
                  {this.props.leftItem}
              </View>
                <Text
                numberOfLines={1}
                style={titleStyle}>
                  {this.props.title}
              </Text>
              <View style={rightStyle}>
                {this.props.rightItem}
              </View>

            </View>

        </View>

      )
    }

  }
}
const styles = StyleSheet.create({
  statusBarStyle:{
    backgroundColor:'#F4A100',
    height:20
  },
  backgroundStyle:{
    backgroundColor:'#F4A100',
    height:64,
  },
  navigationBarStyle:{
    alignItems:'center',
    height:44,
    flexDirection:'row',
    justifyContent: 'center',//每个子项目紧挨
  },
})
module.exports = MRJNavigationBar;
