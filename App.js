import * as React from 'react';
import {useEffect, useState} from 'react';
import {View, Text} from 'react-native';
import Nav from './src/nav';
import Geo from './src/utils/Geo';

function App() {
  const [isGeoReady, setIsGeoReady] = useState(false);
  useEffect(() => {
    Geo.initGeo().then(() => setIsGeoReady(true));
  }, []);
  return <View style={{flex: 1}}>{isGeoReady && <Nav />}</View>;
}

export default App;
