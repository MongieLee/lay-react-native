import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity, Image, StatusBar} from 'react-native';
import headerBg from '../../../resource/images/home-header-bg.png';
const {
  ImageHeaderScrollView,
} = require('react-native-image-header-scroll-view');
export default function HomePage() {
  return (
    <ImageHeaderScrollView
      maxHeight={200}
      minHeight={50}
      headerImage={headerBg}
      renderForeground={() => <View></View>}>
      <View style={{height: 1000}}>
        <StatusBar backgroundColor="transparent" translucent={true} />
        <Text>home page</Text>
      </View>
    </ImageHeaderScrollView>
  );
}
