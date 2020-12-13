import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {pxToDp} from '../../../utils/styleKit';
import SvgUri from 'react-native-svg-uri';
import {male, female} from '../../../resource/fonts/svgIcon';
import {Input} from 'react-native-elements';
import DatePicker from 'react-native-datepicker';

const UserInfo = () => {
  const [sumbitInfo, setSumbitInfo] = useState({
    nickname: '',
    gender: '男',
    birthday: '',
    city: '',
    header: '',
    lng: '',
    lat: '',
    address: '',
  });
  const changeGender = (gender) => {
    setSumbitInfo({...sumbitInfo, gender});
  };
  const dateNow = new Date();
  let currentDate = `${dateNow.getFullYear()}-${
    dateNow.getMonth() + 1
  }-${dateNow.getDate()}`;
  return (
    <View style={{flex: 1, backgroundColor: '#fff', padding: pxToDp(20)}}>
      <Text style={{color: '#666', fontSize: pxToDp(25), fontWeight: 'bold'}}>
        填写资料
      </Text>
      <Text style={{color: '#666', fontSize: pxToDp(25), fontWeight: 'bold'}}>
        完成身份认证
      </Text>
      <View
        style={{
          marginTop: pxToDp(20),
        }}>
        <View
          style={{
            width: '60%',
            flexDirection: 'row',
            alignSelf: 'center',
            justifyContent: 'space-around',
          }}>
          <TouchableOpacity
            onPress={() => changeGender('男')}
            style={{
              borderRadius: pxToDp(30),
              width: pxToDp(60),
              height: pxToDp(60),
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: sumbitInfo.gender === '男' ? '#708090' : '#eee',
            }}>
            <SvgUri svgXmlData={male} width="30" height="30" />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => changeGender('女')}
            style={{
              borderRadius: pxToDp(30),
              width: pxToDp(60),
              height: pxToDp(60),
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: sumbitInfo.gender === '女' ? '#708090' : '#eee',
            }}>
            <SvgUri svgXmlData={female} width="30" height="30" />
          </TouchableOpacity>
        </View>
      </View>
      <Input
        placeholder="请输入昵称"
        onChangeText={(nickname) => {
          setSumbitInfo({...sumbitInfo, nickname});
        }}
        value={sumbitInfo.nickname}
      />
      <View>
        <DatePicker
          androidMode="spinner"
          style={{width: '100%'}}
          date={sumbitInfo.birthday}
          mode="date"
          placeholder="设置生日"
          format="YYYY-MM-DD"
          minDate="1900-01-01"
          maxDate={currentDate}
          confirmBtnText="确定"
          cancelBtnText="取消"
          customStyles={{
            dateIcon: {
              display: 'none',
            },
            dateInput: {
              marginLeft: pxToDp(10),
              borderWidth: 0,
              borderBottomWidth: pxToDp(1.1),
              alignItems: 'flex-start',
              paddingLeft: pxToDp(4),
              borderBottomColor: '#999999',
            },
            placeholderText: {
              fontSize: pxToDp(18),
              color: '#90989c',
            },
          }}
          onDateChange={(date) =>
            setSumbitInfo({...sumbitInfo, birthday: date})
          }
        />
      </View>
    </View>
  );
};

export default UserInfo;
