import React, {useState, useEffect} from 'react';
import {inject, observer} from 'mobx-react';
import {View, Text, AsyncStorage} from 'react-native';
import Svg from 'react-native-svg-uri';
import TabNavigator from 'react-native-tab-navigator';
import HomePage from './homePage/HomePage';
import {
  defaultHome,
  defaultGroup,
  defaultMe,
  selectGroup,
  selectHome,
  selectMe,
} from '../../resource/fonts/svgIcon';

function Index() {
  return (
    <View>
      <Text>????</Text>
    </View>
  );
}

const Home = () => {
  const [navSelect, setNavSelect] = useState('home');
  const pages = [
    {
      title: '首页',
      defaultIcon: () => (
        <Svg width="20" height="20" svgXmlData={defaultHome} />
      ),
      selectIcon: () => <Svg width="20" height="20" svgXmlData={selectHome} />,
      routeName: 'home',
      component: <HomePage />,
      onPress: () => {
        setNavSelect('home');
      },
    },
    {
      title: '广场',
      defaultIcon: () => (
        <Svg width="20" height="20" svgXmlData={defaultGroup} />
      ),
      selectIcon: () => <Svg width="20" height="20" svgXmlData={selectGroup} />,
      routeName: 'group',
      component: <Index />,
      onPress: () => {
        setNavSelect('group');
      },
    },
    {
      title: '我的',
      defaultIcon: () => <Svg width="20" height="20" svgXmlData={defaultMe} />,
      selectIcon: () => <Svg width="20" height="20" svgXmlData={selectMe} />,
      routeName: 'me',
      component: <Index />,
      onPress: () => {
        setNavSelect('me');
      },
    },
  ];

  return (
    // eslint-disable-next-line react-native/no-inline-styles
    <View style={{backgroundColor: 'white', flex: 1}}>
      <TabNavigator>
        {pages.map((item) => {
          return (
            <TabNavigator.Item
              selected={navSelect === item.routeName}
              title={item.title}
              renderIcon={item.defaultIcon}
              renderSelectedIcon={item.selectIcon}
              onPress={item.onPress}
              selectedTitleStyle={{color: '#1997d2'}}
              tabStyle={{backgroundColor: '#eee', justifyContent: 'center'}}>
              {item.component}
            </TabNavigator.Item>
          );
        })}
      </TabNavigator>
    </View>
  );
};

export default inject('rootStore')(observer(Home));
