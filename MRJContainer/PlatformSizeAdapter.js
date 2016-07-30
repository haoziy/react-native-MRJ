import {
  Dimensions,
  Platform,
} from 'react-native';
let paltform = Platform;
let SCREEN_HEIGHT =  Dimensions.get('window').height
let SCREEN_WIDTH = Dimensions.get('window').width
let NAVIGATIONBAR_HEIGHT = paltform.OS=='ios'?64:50;
let TABBAR_HEIGHT = paltform.OS=='ios'?49:75;
let PLATFORM = paltform.OS
module.exports = {
  SCREEN_HEIGHT,
  SCREEN_WIDTH,
  NAVIGATIONBAR_HEIGHT,
  TABBAR_HEIGHT,
  PLATFORM
}
