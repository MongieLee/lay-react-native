//  设计稿的宽度/元素的宽度 = 手机屏幕/手机中元素的宽度
// 手机中元素的宽度 = 手机屏幕 * 元素的宽度 / 设计稿的宽度 :375
import {Dimensions} from 'react-native';
export const screenWidth = Dimensions.get('window').width;
export const screenHeight = Dimensions.get('window').height;

/**
 * 将px转为dp
 * @param  {Number} elePx
 */
export const pxToDp = (elePx) => (screenWidth * elePx) / 375;
