import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Login from './pages/account/login';
import UserInfo from './pages/account/userinfo';
import Home from '../src/pages/home';
import {inject, observer} from 'mobx-react';
const Stack = createStackNavigator();

function Nav(props) {
  useEffect(() => {
    console.log('---------------------');
    console.log(props);
    console.log('---------------------');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const [initialRoute] = useState(
    props.rootStore.userInfo.headerImg ? 'Home' : 'Login',
  );
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none" initialRouteName={initialRoute}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="UserInfo" component={UserInfo} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default inject('rootStore')(observer(Nav));
