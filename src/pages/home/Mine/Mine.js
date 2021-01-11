import React, {useState, useEffect} from 'react';
import {inject, observer} from 'mobx-react';
import {View, Text, AsyncStorage, Image, StatusBar} from 'react-native';
import Svg from 'react-native-svg-uri';
import TabNavigator from 'react-native-tab-navigator';
import {pxToDp} from '../../../utils/styleKit';
const Home = (props) => {
  const [navSelect, setNavSelect] = useState('home');
  useEffect(() => {
    console.log(props.rootStore.userInfo);
    console.log(StatusBar.currentHeight);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const {userInfo} = props.rootStore;
  return (
    // eslint-disable-next-line react-native/no-inline-styles
    <View
      style={{
        backgroundColor: '#ddd',
        flex: 1,
        // marginTop: StatusBar.currentHeight,
        paddingTop: StatusBar.currentHeight,
      }}>
      <View>
        <View>
          <Image
            style={{
              width: 50,
              height: 50,
            }}
            source={{uri: userInfo.headerImg}}
          />
        </View>

        <StatusBar
          backgroundColor="transparent"
          barStyle="dark-content"
          translucent={true}
        />

        <Text>{JSON.stringify(props.rootStore.userInfo)}</Text>
        <Text>这是个人页面</Text>
      </View>
    </View>
  );
};

export default inject('rootStore')(observer(Home));
