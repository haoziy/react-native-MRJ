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
class MRJNavigationItem extends Component {
  constructor(props) {
    super(props)
    this.onPress = this.onPress.bind(this)

  }
  static defaultProps = {
    itemColor:'#FFFFFF',//默认白色
    title:'返回'
  }
  static propTypes= {
    title:React.PropTypes.string,//标题
    icon:React.PropTypes.element,//如果有icon;则设置icon
    pressEventCallback:React.PropTypes.func,//点击事件回调
    itemColor:React.PropTypes.string,//可以指定item颜色
  }
  onPress()
  {
    if (this.props.pressEventCallback) {
      this.props.pressEventCallback();
    }

  }
  render()
  {
    var titleStyle = {
      color:this.props.itemColor,
      fontSize:17,
    }
    return(
      <TouchableOpacity
      onPress={this.onPress}
      style={styles.itemStyle}>
          {this.props.icon}
          <Text style={titleStyle}>
              {this.props.title}
          </Text>
      </TouchableOpacity>
    )
  }
}
const styles = StyleSheet.create({
  itemStyle:{
    flexDirection:'row',
    justifyContent: 'center',//每个子项目紧挨
    alignItems:'center',
    marginLeft:8,
  }
})
module.exports = MRJNavigationItem
