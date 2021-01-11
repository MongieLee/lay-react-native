import * as React from 'react';
import {useEffect, useState} from 'react';
import {View, AsyncStorage} from 'react-native';
import Nav from './src/nav';
import Geo from './src/utils/Geo';
import {Provider} from 'mobx-react';
import store from './mobx';

function App() {
  const [isGeoReady, setIsGeoReady] = useState(false);
  useEffect(() => {
    async function init() {
      const strUserInfo = await AsyncStorage.getItem('userInfo');
      const userInfo = strUserInfo ? JSON.parse(strUserInfo) : {};
      if (userInfo.headerImg) {
        store.changeName({...store.userInfo, ...userInfo});
      }
      await await Geo.initGeo();
      setIsGeoReady(true);
    }
    init();
  }, []);
  return (
    <Provider rootStore={store}>
      <View style={{flex: 1}}>{isGeoReady ? <Nav /> : <></>}</View>
    </Provider>
  );
}

export default App;
