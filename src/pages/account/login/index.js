import React, {useState, useEffect} from 'react';
import {View, Text, Image, StatusBar, StyleSheet} from 'react-native';
import Bg from '../../../resource/images/login-bg.jpg';
import {pxToDp} from '../../../utils/styleKit';
import {Input} from 'react-native-elements';
import validator from '../../../utils/validator';
import request from '../../../utils/request';
import {ACCOUNT_LOGIN, ACCOUNT_VALIDATEVCODE} from '../../../utils/pathMap';
import Btn from '../../../components/ColorBtn';
import {CodeField, Cursor} from 'react-native-confirmation-code-field';
import Toast from '../../../components/Toast';
import {inject, observer} from 'mobx-react';
import {Toast as TeaToast} from 'teaset';

const styles = StyleSheet.create({
  root: {flex: 1, padding: 20},
  title: {textAlign: 'center', fontSize: 30},
  codeFieldRoot: {marginTop: 20},
  cell: {
    width: 40,
    height: 40,
    lineHeight: 38,
    fontSize: 24,
    borderBottomWidth: 2,
    borderColor: '#00000030',
    textAlign: 'center',
    color: `#8360ed`,
  },
  focusCell: {
    borderColor: '#8360ed',
  },
});

const Login = (props) => {
  const [phoneNumber, setPhoneNumber] = useState('13232251122');
  const [phoneValid, setPhoneValid] = useState(true);
  const [showLogin, setShowLogin] = useState(true);
  const [vCode, setVCode] = useState('888888');
  const [isCountDown, setIsCountDown] = useState(false);
  const [btnText, setBtnText] = useState('重新获取');

  const phoneNumberChangeText = (phoneNumber) => {
    setPhoneNumber(phoneNumber);
  };

  useEffect(() => {
    props.navigation.addListener('focus', () => {
      StatusBar.setBarStyle('light-content');
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const phoneNumberEditing = async () => {
    if (!validator.validatorPhone(phoneNumber)) {
      setPhoneValid(false);
      return;
    }
    try {
      const res = await request.post(ACCOUNT_LOGIN, {phone: phoneNumber});
      if (res.code === 1000) {
        setShowLogin(false);
        countDownFn();
      }
    } catch (error) {
      throw error;
    }
  };

  const vCodeEditing = async () => {
    if (vCode.length < 6) {
      Toast.message('验证码长度错误', 2000, 'center');
      return;
    }
    const res = await request.post(ACCOUNT_VALIDATEVCODE, {
      phone: phoneNumber,
      vcode: '888888',
    });

    console.log(res.code);
    console.log(typeof res.code);
    if (res.code !== 10000) {
      TeaToast.sad(res.msg);
      return;
    }
    console.log(res.isNew);
    if (res.isNew) {
      props.navigation.navigate('UserInfo');
    } else {
      props.navigation.navigate('Home');
      alert('老用户，跳转交往页面');
    }
  };

  const countDownFn = () => {
    if (isCountDown) {
      return;
    }
    if (timeId) {
      clearInterval(timeId);
    }
    setIsCountDown(true);
    let time = 5;
    setBtnText(`重新获取(${time}s)`);
    const timeId = setInterval(() => {
      time--;
      setBtnText(`重新获取(${time}s)`);
      if (time === 0) {
        setBtnText(`重新获取`);
        setIsCountDown(false);
        clearInterval(timeId);
      }
    }, 1000);
  };
  const renderLogin = () => {
    return (
      <View>
        <Text style={{color: '#888', fontSize: pxToDp(25), fontWeight: 'bold'}}>
          手机号登录注册
        </Text>
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
        <Btn
          onPress={phoneNumberEditing}
          style={{
            width: '85%',
            height: pxToDp(40),
            alignSelf: 'center',
            borderRadius: pxToDp(20),
          }}>
          获取验证码
        </Btn>
      </View>
    );
  };
  const changeVCode = (vCode) => {
    setVCode(vCode);
  };
  const renderVCode = () => (
    <View>
      <View>
        <Text style={{fontSize: pxToDp(25), color: '#888', fontWeight: 'bold'}}>
          请输入6位验证码
        </Text>
      </View>
      <View style={{marginTop: pxToDp(15)}}>
        <Text style={{color: '#888'}}>已发送到：+86 {phoneNumber}</Text>
      </View>
      <View style={{marginTop: pxToDp(5), marginBottom: pxToDp(15)}}>
        <CodeField
          value={vCode}
          onChangeText={changeVCode}
          cellCount={6}
          onSubmitEditing={vCodeEditing}
          rootStyle={styles.codeFieldRoot}
          keyboardType="number-pad"
          renderCell={({index, symbol, isFocused}) => (
            <Text
              key={index}
              style={[styles.cell, isFocused && styles.focusCell]}>
              {symbol || (isFocused ? <Cursor /> : null)}
            </Text>
          )}
        />
      </View>
      <View>
        <Btn
          onPress={phoneNumberEditing}
          disabled={isCountDown}
          style={{
            width: '85%',
            height: pxToDp(40),
            alignSelf: 'center',
            borderRadius: pxToDp(20),
          }}>
          {btnText}
        </Btn>
      </View>
    </View>
  );
  return (
    <View>
      <StatusBar backgroundColor="transparent" translucent={true} />
      <Image style={{width: '100%', height: pxToDp(180)}} source={Bg} />
      <View style={{padding: pxToDp(20)}}>
        <View style={{marginTop: pxToDp(10)}}>
          {showLogin ? renderLogin() : renderVCode()}
        </View>
      </View>
    </View>
  );
};

export default inject('rootStore')(observer(Login));
