import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import {pxToDp} from '../../../../../../utils/styleKit';
const Index = (props) => {
  return (
    <View
      style={{
        height: `70%`,
        width: '100%',
        position: 'absolute',
        bottom: 0,
        left: 0,
        backgroundColor: '#fff',
      }}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          backgroundColor: 'red',
        }}>
        <Text>筛选条件</Text>
        <Text onPress={props.onClose}>点我关闭</Text>
      </View>
    </View>
  );
};
export default Index;
