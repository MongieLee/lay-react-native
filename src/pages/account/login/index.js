import React, {useState, useEffect} from 'react';
import {View, Text, Image, StatusBar} from 'react-native';
import Bg from '../../../../images/login-bg.jpg';
import {pxToDp} from '../../../utils/styleKit';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Input} from 'react-native-elements';
import validator from '../../../utils/validator';
import request from '../../../utils/request';
import {ACCOUNT_LOGIN} from '../../../utils/pathMap';

const Login = () => {
  const [phoneNumber, setPhoneNumber] = useState(null);
  const [phoneValid, setPhoneValid] = useState(true);
  const phoneNumberChangeText = (phoneNumber) => {
    setPhoneNumber(phoneNumber);
  };
 
  const phoneNumberEditing = async () => {
    if (!validator.validatorPhone(phoneNumber)) {
      setPhoneValid(false);
      return;
    }
    const res = await request.post(ACCOUNT_LOGIN, {phone: phoneNumber});
    console.log(res);
  };

  return (
    <View>
      <StatusBar backgroundColor="transparent" translucent={true} />
      <Image style={{width: '100%', height: pxToDp(200)}} source={Bg} />
      <View style={{padding: pxToDp(20)}}>
        <View>
          <Text
            style={{color: '#888', fontSize: pxToDp(25), fontWeight: 'bold'}}>
            手机号登录注册
          </Text>
        </View>
        <View style={{marginTop: pxToDp(30)}}>
          <Input
            placeholder="请输入手机号码"
            maxLength={11}
            keyboardType="phone-pad"
            value={phoneNumber}
            inputStyle={{color: `#333`}}
            errorMessage={phoneValid ? '' : '手机号码格式不正确'}
            onSubmitEditing={phoneNumberEditing}
            onChangeText={phoneNumberChangeText}
            leftIcon={{
              type: 'font-awesome',
              name: 'phone',
              color: '#ccc',
              size: pxToDp(20),
            }}
          />
          <Text>{phoneNumber}</Text>
        </View>
      </View>
    </View>
  );
};

export default Login;
