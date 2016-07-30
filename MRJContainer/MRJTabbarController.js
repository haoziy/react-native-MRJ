import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableHighlight,
  Image,
  View,
  element,
  Dimensions,
  Navigator
} from 'react-native';
import store from '../myStore'
import MRJNavigationController from './MRJNavigationController'
import MRJViewController from './MRJViewController'
class MRJTabbarController extends React.Component
{

    constructor(props)
    {
      super(props)
      this.state = props;

    }
    static defaultProps = {
      selectedIndex:0,//默认选中的下标
    }

      static propTypes= {
        tabbar:React.PropTypes.element,
        selectedIndex:React.PropTypes.number,
        // viewControllers:React.PropTypes.array,//内容页面;里面装对应的页面
        pressItemCallback:React.PropTypes.func,
      }



    render(){
      var childs;
      var selectedIndex = this.state.selectedIndex
      var tabbar = this.props.tabbar;
      var self = this;
      if (this.props.viewControllers) {
        childs = this.props.viewControllers;
      var className;
      var current ;
      childs.map(function (page,i){

            if(i==selectedIndex)
            {
              className = page.constructor.name
              current = page;
              return;
            }
          })
          if(className)
          {
            var component = current.constructor;

            // return current.render();

            return new component({rootViewController:current.props.rootViewController,tabbar:this.props.tabbar}).render()
            // var component = className.constructor;
            // if(current.props.rootViewController)
            // {
            //     return (className.constructor({rootViewController:current.props.rootViewController,tabbar:this.props.tabbar})).render();
            // }
            // return (
            //   <component
            //   rootViewController={current.props.rootViewController}
            //   tabbar={this.props.tabbar}
            //   />
            // )
          }else {
              var style = {
                color:'#FF0000',
                marginTop:64,
                textAlign:'center',
              }
              return( <View>
                    <Text style = {style}>
                        没有设置相应的rootViewController;请正确使用;请参考examples
                    </Text>
              </View>)
            }
          }
    }
    componentDidMount()
    {
        let unsubscribe = store.subscribe(this.test());
    }
    test()
    {
      console.log(this);
      // this.setState({selectedIndex:1})

    }
}
module.exports = MRJTabbarController
