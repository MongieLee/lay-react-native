import React from 'react';
import {View, Text} from 'react-native';
import iconConfig from '../../resource/fonts/icon';
const Index = (props) => {
  return (
    <View>
      <Text style={{fontFamily: 'iconfont', ...props.style}}>
        {iconConfig[props.name]}
      </Text>
    </View>
  );
};
export default Index;
