import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {soul, position, friends} from '../../../../../resource/fonts/svgIcon';
import Svg from 'react-native-svg-uri';
import {pxToDp} from '../../../../../utils/styleKit';
const Index = () => {
  return (
    <View
      style={{
        flexDirection: 'row',
        width: '80%',
        justifyContent: 'space-around',
      }}>
      <TouchableOpacity style={{alignItems: 'center'}}>
        <View
          style={{
            width: pxToDp(70),
            height: pxToDp(70),
            borderRadius: pxToDp(35),
            backgroundColor: '#ff5c0a',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Svg width="40" height="40" svgXmlData={friends} />
        </View>
        <Text
          style={{
            marginTop: pxToDp(4),
            fontSize: pxToDp(18),
            color: '#ffffff',
          }}>
          交友
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={{alignItems: 'center'}}>
        <View
          style={{
            width: pxToDp(70),
            height: pxToDp(70),
            borderRadius: pxToDp(35),
            backgroundColor: '#76a32e',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Svg width="40" height="40" svgXmlData={position} />
        </View>
        <Text
          style={{
            marginTop: pxToDp(4),
            fontSize: pxToDp(18),
            color: '#ffffff',
          }}>
          附近
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={{alignItems: 'center'}}>
        <View
          style={{
            width: pxToDp(70),
            height: pxToDp(70),
            borderRadius: pxToDp(35),
            backgroundColor: '#edc567',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Svg width="40" height="40" svgXmlData={soul} />
        </View>
        <Text
          style={{
            marginTop: pxToDp(4),
            fontSize: pxToDp(18),
            color: '#ffffff',
          }}>
          灵魂
        </Text>
      </TouchableOpacity>
    </View>
  );
};
export default Index;
