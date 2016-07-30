import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  View,
  Navigator,
  ScrollView,
} from 'react-native';

import HelloMessage from './homeIndex';

const sizeDefault = [{textMrgin:18,boxMargin:18}]
// static create(sizeDefault: {textMrgin: 18})
class reactDemo extends Component{
  constructor(props) {

      console.log('constructor call')
	    super(props);   //这一句不能省略，照抄即可
	    this.state = {
	      loaded:false,
        scollow1:
         <ScrollView style={styles.scrollStyle}
         onScroll={this.scrollIsScrolling}
         scrollEventThrottle={16}
         OnMomentumScrollEnd = {this.onMomentumScrollEnd}
         onScrollBeginDrag = {this.onScrollBeginDrag}
         onScrollEndDrag = {this.onScrollEndDrag}
         >
         <View style={styles.horizontalScrollBack}>
         <ScrollView style={styles.scrollStyle}
         horizontal={true}
         onScroll={this.scroll2IsScrolling}
         scrollEventThrottle={16}>
             <Text style={styles.testStyle}>hello</Text>
             <Text style={styles.testStyle}>hello</Text>
             <Text style={styles.testStyle}>hello</Text>
             <Text style={styles.testStyle}>hello</Text>
             <Text style={styles.testStyle}>hello</Text>
             <Text style={styles.testStyle}>hello</Text>
             <Text style={styles.testStyle}>hello</Text>
             <Text style={styles.testStyle}>hello</Text>
             <Text style={styles.testStyle}>hello</Text>
             <Text style={styles.testStyle}>hello</Text>
             <Text style={styles.testStyle}>hello</Text>
             <Text style={styles.testStyle}>world</Text>
         </ScrollView>
         </View>
         <View style={styles.horizontalScrollBack}>
         <ScrollView style={styles.scrollStyle}
         horizontal={true}
         onScroll={this.scroll2IsScrolling}
         scrollEventThrottle={16}>
             <Text style={styles.testStyle}>hello</Text>
             <Text style={styles.testStyle}>hello</Text>
             <Text style={styles.testStyle}>hello</Text>
             <Text style={styles.testStyle}>hello</Text>
             <Text style={styles.testStyle}>hello</Text>
             <Text style={styles.testStyle}>hello</Text>
             <Text style={styles.testStyle}>hello</Text>
             <Text style={styles.testStyle}>hello</Text>
             <Text style={styles.testStyle}>hello</Text>
             <Text style={styles.testStyle}>hello</Text>
             <Text style={styles.testStyle}>hello</Text>
             <Text style={styles.testStyle}>world</Text>
         </ScrollView>
         </View>
           <Text style={styles.testStyle}>hello</Text>
           <Text style={styles.testStyle}>hello</Text>
           <Text style={styles.testStyle}>hello</Text>
           <Text style={styles.testStyle}>hello</Text>
           <Text style={styles.testStyle}>hello</Text>
           <Text style={styles.testStyle}>hello</Text>
           <Text style={styles.testStyle}>hello</Text>
           <Text style={styles.testStyle}>hello</Text>
           <Text style={styles.testStyle}>hello</Text>
           <TouchableHighlight onPress={this.scrollItemPressed}>
           <Text style={styles.testStyle}>world</Text>
           </TouchableHighlight>

           <View style={styles.horizontalScrollBack}>
           <ScrollView style={styles.scrollStyle}
           horizontal={true}
           onScroll={this.scroll2IsScrolling}
           scrollEventThrottle={16}>
               <Text style={styles.testStyle}>hello</Text>
               <Text style={styles.testStyle}>hello</Text>
               <Text style={styles.testStyle}>hello</Text>
               <Text style={styles.testStyle}>hello</Text>
               <Text style={styles.testStyle}>hello</Text>
               <Text style={styles.testStyle}>hello</Text>
               <Text style={styles.testStyle}>hello</Text>
               <Text style={styles.testStyle}>hello</Text>
               <Text style={styles.testStyle}>hello</Text>
               <Text style={styles.testStyle}>hello</Text>
               <Text style={styles.testStyle}>hello</Text>
               <Text style={styles.testStyle}>world</Text>
           </ScrollView>
           </View>
         </ScrollView>,
        //  scrollw2:
        //  <ScrollView style={styles.scrollStyle}
        //  horizontal={true}
        //  onScroll={this.scroll2IsScrolling}
        //  scrollEventThrottle={16}>
        //    <Text style={styles.testStyle}>hello</Text>
        //    <Text style={styles.testStyle}>hello</Text>
        //    <Text style={styles.testStyle}>hello</Text>
        //    <Text style={styles.testStyle}>hello</Text>
        //    <Text style={styles.testStyle}>hello</Text>
        //    <Text style={styles.testStyle}>hello</Text>
        //    <Text style={styles.testStyle}>hello</Text>
        //    <Text style={styles.testStyle}>hello</Text>
        //    <Text style={styles.testStyle}>hello</Text>
        //    <Text style={styles.testStyle}>hello</Text>
        //    <Text style={styles.testStyle}>hello</Text>
        //    <Text style={styles.testStyle}>world</Text>
        //  </ScrollView>,
	    };
    // 在ES6中，如果在自定义的函数里使用了this关键字，则需要对其进行“绑定”操作，否则this的指向不对
    // 像下面这行代码一样，在constructor中使用bind是其中一种做法（还有一些其他做法，如使用箭头函数等）
  }



  render()
  {
    return(
      // <TouchableHighlight onPress={this.onPress}>
      <View style={styles.viewBackground}>
        {/*<TouchableHighlight onPress = {this.textOnpress}>
          <View>
            <Text style={styles.testStyle}>hello</Text>
          </View>
        </TouchableHighlight>
        <View style={styles.scrollBackV}>
          {this.state.scollow1}
        </View>*/}
        <HelloMessage/>
      </View>
      // </TouchableHighlight>
    )

  }
  scroll2IsScrolling()
  {
    console.log('scroll2IsScrolling is scollowing');
  }
  scrollItemPressed()
  {
    console.log(this);
  }
  onMomentumScrollEnd(e)
  {
    console.log("onMomentumScrollEnd")
    console.log(e)
  }
  onScrollBeginDrag(e)
  {
    console.log("onScrollBeginDrag");
    console.log(e)
  }
  onScrollEndDrag(e)
  {
    console.log("onScrollEndDrag");
  }
  scrollIsScrolling(e)
  {
    console.log(e.nativeEvent.contentOffset.y);
  }
  onPress()
  {
    console.log('fdff');
  }
  textOnpress()
  {
    console.log('{this.state}');
  }
}

const styles = StyleSheet.create({
  scrollBackV:{
    flexDirection:'row',
    flex:1,
    justifyContent:'center',
    alignItems:'center',
  },
  scrollStyle:{
    backgroundColor:"#00FF00",
    width:100,
  },
  viewBackground:{
    backgroundColor:"#FF0000",
    marginTop:20,
    height:100,
  },
  testStyle:{
    marginTop:sizeDefault.textMrgin,
  },
  horizontalScrollBack:{
    height:44,
  }
})
AppRegistry.registerComponent('reactDemo', () => reactDemo);
