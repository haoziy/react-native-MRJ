import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableHighlight,
  Image,
  View,
  element,
} from 'react-native';
import {TABBAR_HEIGHT}  from './PlatformSizeAdapter'
const tabbarHeight = TABBAR_HEIGHT
class MRJTabbarItem extends Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this)
  }
  onChange (e){
    if(this.props.selected==true)
    {
      return;
    }
    this.props.beSelected(this.props.index);
  }
  static defaultProps = {
    normalTitle:'Item',
    normalIcon:<Image source={require('./indexNormal.png')}/>,
    normalTitleColor:'#c1c1c1',
    heighlightTitleColor:'#DDDDDD',
    selectedTitleColor:'#FF0000',
  }
  static propTypes= {
    selected:React.PropTypes.bool,//外部用的;
    normalTitle:React.PropTypes.string,//正常状态下标题
    selectedTitle:React.PropTypes.string,//选中状态下标题
    heighlightTitle:React.PropTypes.string,//高亮状态下标题
    normalIcon:React.PropTypes.element,//正常状态下icon
    selectedIcon:React.PropTypes.element,//选中状态下icon
    heighlightIcon:React.PropTypes.func,//高亮时候 icon
    normalTitleColor:React.PropTypes.string,//正常状态下文字颜色
    selectedTitleColor:React.PropTypes.string,//选中状态下文字颜色
    heighlightTitleColor:React.PropTypes.string,//高亮时候文字颜色
    beSelected:React.PropTypes.func,
    index:React.PropTypes.number,
  }
  render()
  {
    var itemHeight = TABBAR_HEIGHT-10;
    var itemWidth = TABBAR_HEIGHT;
    var itemStyle = {
      marginTop:5,
      marginBottom:5,
      height:itemHeight,
      width:itemHeight,
      alignItems:'center',
      // backgroundColor:'#ff0000',
    }
    var icon = null;
    if(this.props.selectedIcon===null)//判断有没有设置选中状态的icon;如果没有,则沿用正常状态的icon;正常状态的icon一定有默认值;
    {
        icon = this.props.normalIcon;
    }else {
      icon = this.props.selected?this.props.selectedIcon:this.props.normalIcon;
    }
    var titleColor = this.props.selected?this.props.selectedTitleColor:this.props.normalTitleColor;
    var titleStyle = {
      fontSize:12,
      marginTop:2,
      color:titleColor,
    }
    var self = this;
    return(
      <TouchableOpacity style={itemStyle}
       onPress={this.onChange}
       >
        {icon}
        <Text style={titleStyle}
        numberOfLines={1}>
            {this.props.normalTitle}
        </Text>
      </TouchableOpacity>
    )
  }
  componentDidMount()
  {

  }


}
module.exports = MRJTabbarItem;
