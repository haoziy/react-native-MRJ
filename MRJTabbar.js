import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableHighlight,
  Image,
  View,
  Dimensions,
} from 'react-native';
import HelloMessage from './homeIndex'
class MRJTabbar extends Component {
  state = {
    tabNormalNames:this.props.tabNormalNames,
    SCREEN_SIZE:this.getScreenSize(),
    TABBAR_HEIGHT:49,
    tabNormalIcons:this.normalIcons(),
    activeIcons:this.activeIcon(),
  }
  getScreenSize()
  {
    var windowHeight =  Dimensions.get('window').height
    var windowWidth = Dimensions.get('window').width
    var pxielRatio={PixelRatio.get()}
    return{
      height:windowHeight,
      width:windowWidth
    }
  }
  static defaultProps = {
    tabNormalNames:['首页','分析','管理','我的'],
    activeTab:0,
    targetPages:[HelloMessage]

  }
  activeIcon()
  {
    var arr = new Array();
    var index =   <Image source={require('./MRJTabbarIcons/indexActive.png')} />
    var found =   <Image source={require('./MRJTabbarIcons/foundActive.png')} />
    var report =   <Image source={require('./MRJTabbarIcons/managementActive.png')} />
    var me =   <Image source={require('./MRJTabbarIcons/mineActive.png')} />
    arr.push(index);
    arr.push(found);
    arr.push(report);
    arr.push(me);
    return arr;
  }
  normalIcons()
  {
    var style = {
      width: 200,
      height: 100,
      tintColor: '#ff2d55'
    }
    var arr = new Array();
    var index =   <Image source={require('./MRJTabbarIcons/indexNormal.png')} style={style} />
    var found =   <Image source={require('./MRJTabbarIcons/foundNormal.png')} />
    var report =   <Image source={require('./MRJTabbarIcons/managementNormal.png')} />
    var me =   <Image source={require('./MRJTabbarIcons/mineNormal.png')} />
    arr.push(index);
    arr.push(found);
    arr.push(report);
    arr.push(me);
    return arr;
  }
  static propTypes= {
    targetPages:React.PropTypes.array,//所有tabb根组件
    activeTab:React.PropTypes.number,//当前选中的下标
    tabs:React.PropTypes.array,//所有集合
    tabNoramImages:React.PropTypes.func,
    tabNormalNames:React.PropTypes.array,//正常状态下的tabIcon 注意要传入Image对象
    tabActiveNames:React.PropTypes.array,//选中状态下的tabIcon 注意要传入Image对象
    tabNormalColor:React.PropTypes.string,//正常状态下的tab文字颜色
    tabActiveColor:React.PropTypes.string,//选中状态下的tab文字颜色
    tabbNormalIcons:React.PropTypes.array,//正常状态下的tabIcon
    tabbActiveIcons:React.PropTypes.array,//选中状态下tabIcon
  }
  render()
  {
    var icons = this.state.tabNormalIcons;
    var activeIcons = this.state.activeIcons;
    var texts = this.state.tabNormalNames;
    var activeTab = this.props.activeTab;
    var normalColor = this.props.tabNormalColor?this.props.tabNormalColor:'#DDDDDD';
    var activeColor = this.props.tabActiveColor?this.props.tabActiveColor:'#FF0000';
    var screenStyle = {
      width:this.state.SCREEN_SIZE.width,
      height:this.state.SCREEN_SIZE.height,
    }
    var xxx = function(){

    };
    var constentStyle = {width:this.state.SCREEN_SIZE.width,height:this.state.SCREEN_SIZE.height-this.state.TABBAR_HEIGHT}
    var tabbarStyle  = {width:this.state.SCREEN_SIZE.width,
      height:this.state.TABBAR_HEIGHT,//默认使用苹果的高度
      flexDirection:'row',
      justifyContent: 'space-around',//周围等间距分布
      alignItems:'center',
      borderWidth:1,
      borderTopColor: '#000000',
      borderLeftColor:'#FFFFFF',
      borderRightColor:'#FFFFFF',
      borderBottomColor:'#FFFFFF',


    }
    return(

      <View style={screenStyle}>
        <View style = {constentStyle}>
        </View>

        <View style = {tabbarStyle}>
        {
          icons.map(function (img,i) {
            var image = null;
            var textColor = null;
            if (i===activeTab) {
              image = activeIcons[i];
              textColor = activeColor;
            }else {
              image = img;
              textColor = normalColor;
            }
            var tabbarItemText = texts[i];



            var itemStyle = {
              // backgroundColor:'#FF0000',
              justifyContent: 'space-around',
              alignItems:'center',
              width:30,
            }
            var tabbarItemTextStyle = {
              fontSize:11,
              color:textColor,
              textAlign:'left',
              alignItems:'center',
            }
            return  (
              <TouchableOpacity key={i}
              style={itemStyle}
               onPress={xxx}
              // underlayColor='#FF0000'
               >
                <View>

                {image}
                <Text style={tabbarItemTextStyle}>{tabbarItemText}</Text>

                </View>

              </TouchableOpacity>

              )
          })
        }
        </View>
      </View>
    )
  }

  xxxx()
  {

  }
}
const mrjTabbarStyle = StyleSheet.create({
  backgroundStyle:{
    height:49,//默认采用苹果的高度标准

  },
  icon:{
    height:30,
    width:30,
    marginTop:1,
    marginTop:1,
    marginBottom:1,
    // marginTopRight:1,
  }
})
module.exports = MRJTabbar;
