import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableHighlight,
  Image,
  View,
  element,
  Navigator,
  ScrollView,
  ListView,
} from 'react-native';
import {
SCREEN_HEIGHT,
SCREEN_WIDTH,
NAVIGATIONBAR_HEIGHT,
TABBAR_HEIGHT
} from '../MRJContainer/PlatformSizeAdapter'
import MRJNavigationBar from '../MRJContainer/MRJNavigationBar'
import MRJTabbar from '../MRJContainer/MRJTabbar'
class ReportViewController extends Component {
  constructor(props)
  {
    super(props)
    this.state  = props;
  }
  static propTypes = {
    tabbarController:React.PropTypes.element,
    navigationController:React.PropTypes.element,
    contentView:React.PropTypes.element,
  }
  render()
  {
    var contentHeight = SCREEN_HEIGHT;
    var tabbar = this.props.tabbarController?this.props.tabbarController:this.props.tabbar;
    var navigaion = 1;
    var naviHeight = 0;
    var tabbarHeight = 0;
    if (navigaion&&tabbar) //tabbar 和 Navigation都有
    {

      naviHeight =NAVIGATIONBAR_HEIGHT
      tabbarHeight = TABBAR_HEIGHT
      contentHeight = contentHeight-(naviHeight+tabbarHeight)
    }else if (navigaion&&!tabbar) //只有navigaion没有tabbar
    {
      naviHeight = NAVIGATIONBAR_HEIGHT;
      tabbarHeight = 0;
      contentHeight = contentHeight-naviHeight;
    }else if(tabbar&&!navigaion)//只有tabbar没有Navigation
    {
        naviHeight = 0;
        tabbarHeight = TABBAR_HEIGHT;
        contentHeight = contentHeight-tabbarHeight;
    }else
    {

    }

    var navStyle = {
      height:naviHeight
    }
    var contentStyle = {
      height:contentHeight,
      // backgroundColor:'#ff0000'
    }
    var tabbarStyle ={
      height:tabbarHeight
    }
    var cellStyle = {
      height:44,
      paddingLeft:8,
      flexDirection:'row',
      alignItems:'center',
      backgroundColor:'#F1f1f1'
    }
    return(
      <View>
        <View style = {navStyle}>
          <MRJNavigationBar
            title='报表'
          />
        </View>
        <View style = {contentStyle}>
            <View style = {styes.tabbleHeadStly}>
                <View style={styes.tabbleLeftStyle}>
                    <Text>hhhh</Text>
                </View>
                <View style = {styes.tabbleRightStyle}>
                      <ScrollView style = {styes.tabbleHeadScrollStyle}
                      horizontal={true}>
                        <View style={styes.tabbleRightStyle}>
                            <Text>hhhh</Text>
                        </View>
                      </ScrollView>
                </View>
            </View>

        </View>
        <View style= {tabbarStyle}>
        <MRJTabbar
          {...tabbar.props}
        />
        </View>
      </View>
    )
  }

  componentDidMount()
  {

  }
}
const rightWidth = SCREEN_WIDTH-100;
const styes = StyleSheet.create(
  {
    test:{
      marginTop:20,
      marginLeft:8,
    },
    tabbleHeadStly:{
      height:44,
      width:SCREEN_WIDTH,
      backgroundColor:'#FF0000',
      flexDirection:'row',
      alignItems:'center',
    },
    tabbleLeftStyle:{
      width:100,
      marginLeft:8,
      backgroundColor:'#FFFF00',
    },
    tabbleRightStyle:{
      width:rightWidth,
      height:44,
    },
    tabbleHeadScrollStyle:{
      // flexDirection:'row',
      // alignItems:'center',
      height:44,
      // justifyContent:'space-between',
    }
  }
)
module.exports = ReportViewController
