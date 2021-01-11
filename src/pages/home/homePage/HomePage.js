import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity, Image, StatusBar} from 'react-native';
import headerBg from '../../../resource/images/home-header-bg.png';
import HomeHeader from './components/HomeHeader';
import Visitors from './components/Visitors';
import {pxToDp} from '../../../utils/styleKit';
const {
  ImageHeaderScrollView,
} = require('react-native-image-header-scroll-view');
import CenterPage from './components/CenterPage';
import HomeList from './components/HomeList';

export default function HomePage(props) {
  useEffect(() => {
    console.log(`props`);
    console.log(props);
    return () => {
      console.log(22222);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <ImageHeaderScrollView
      maxHeight={pxToDp(160)}
      minHeight={pxToDp(50)}
      headerImage={headerBg}
      renderForeground={() => (
        <View
          style={{
            height: pxToDp(160),
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <StatusBar
            backgroundColor="transparent"
            barStyle="light-content"
            translucent={true}
          />
          <HomeHeader />
        </View>
      )}>
      <View
        style={{
          paddingLeft: pxToDp(20),
          paddingRight: pxToDp(20),
          marginTop: pxToDp(10),
          marginBottom: pxToDp(10),
        }}>
        <Visitors />
        <CenterPage />
      </View>
      <HomeList />
    </ImageHeaderScrollView>
  );
}
