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
    this.jumpTest = this.jumpTest.bind(this)
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
            <TouchableOpacity onPress = {this.jumpTest}>
              <View style = {cellStyle}>
                <Text>我是报表</Text>
              </View>

            </TouchableOpacity>

        </View>
        <View style= {tabbarStyle}>
        <MRJTabbar
          {...tabbar.props}
        />
          {/*{tabbar.render()}*/}
        </View>
      </View>
    )
  }
  jumpTest()
  {
    // var SecondPageComponent = MRJHomeSubPage
    // var navigator = this.props.navigator;
    //     //为什么这里可以取得 props.navigator?请看上文:
    //     //<Component {...route.params} navigator={navigator} />
    //     //这里传递了navigator作为props
    //     if(navigator) {
    //         navigator.push({
    //             name: 'SecondPageComponent',
    //             component: SecondPageComponent,
    //         })
    //     }
  }
  componentDidMount()
  {
    // let unsubscribe = store.subscribe(() =>{
    //   console.log(store)
    //   console.log(store.getState())
    // }
    //
    // )
    // store.subscribe = this.testfunctin();
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
module.exports = ReportViewController
