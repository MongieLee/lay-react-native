/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity, AsyncStorage, Image} from 'react-native';
import {pxToDp} from '../../../utils/styleKit';
import SvgUri from 'react-native-svg-uri';
import {male, female} from '../../../resource/fonts/svgIcon';
import {Input} from 'react-native-elements';
import DatePicker from 'react-native-datepicker';
import Geo from '../../../utils/Geo';
import Picker from 'react-native-picker';
import CityJson from '../../../resource/city.json';
import ColorBtn from '../../../components/ColorBtn';
import Toast from '../../../components/Toast';
import ImagePicker from 'react-native-image-crop-picker';
import defaultAvatar from '../../../resource/images/default-avatar.jpg';
import {Dimensions} from 'react-native';
import {observer, inject} from 'mobx-react';
const windowWidth = Dimensions.get('window').width;
const UserInfo = (props) => {
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
  const [avatarImg, setAvatarImg] = useState('');
  useEffect(() => {
    console.log(props.rootStore.name);
    Geo.getCityByLocation().then((res) => {
      const city = res.regeocode.addressComponent.city.replace('市', '');
      const address = res.regeocode.formatted_address;
      setSumbitInfo({...sumbitInfo, city, address});
    });
    console.log(props);
  }, []);

  const submitApprove = () => {
    const {nickname, birthday, city} = sumbitInfo;
    if (!nickname || !birthday || !city || !avatarImg) {
      Toast.sad('头像或昵称或生日或城市不能为空', 2000, 'center');
      return;
    }
    props.rootStore.changeName({
      ...props.rootStore.userInfo,
      name: nickname,
      city: city,
      headerImg: avatarImg,
    });
    AsyncStorage.setItem(
      'userInfo',
      JSON.stringify({name: nickname, city: city, headerImg: avatarImg}),
    );
    props.navigation.navigate('Home');
  };
  const showCityPicker = () => {
    Picker.init({
      pickerData: CityJson, //显示的数据
      selectedValue: ['广东', '珠海'], //默认选择
      wheelFlex: [1, 1, 0],
      pickerCancelBtnText: '取消',
      pickerConfirmBtnText: '确定',
      pickerTitleText: '选择城市',
      onPickerConfirm: (data) => {
        setSumbitInfo({...sumbitInfo, city: data[1]});
      },
    });
    Picker.show();
  };
  const changeGender = (gender) => {
    setSumbitInfo({...sumbitInfo, gender});
  };
  const chooeseHeadImg = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
    }).then((image) => {
      console.log(image);
      setAvatarImg(image.path);
    });
  };
  const dateNow = new Date();
  let currentDate = `${dateNow.getFullYear()}-${
    dateNow.getMonth() + 1
  }-${dateNow.getDate()}`;
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#fff',
        padding: pxToDp(20),
        paddingTop: pxToDp(60),
      }}>
      <Text style={{color: '#666', fontSize: pxToDp(25), fontWeight: 'bold'}}>
        填写资料{typeof props.rootStore.changeName}
        {JSON.stringify(props.rootStore.userInfo)}
      </Text>
      <Text style={{color: '#666', fontSize: pxToDp(25), fontWeight: 'bold'}}>
        完成身份认证
      </Text>
      <View
        style={{
          marginTop: pxToDp(20),
        }}>
        <TouchableOpacity
          onPress={chooeseHeadImg}
          style={{
            alignSelf: 'center',
            marginBottom: pxToDp(20),
          }}>
          <Image
            style={{
              borderRadius: (windowWidth * 0.3) / 2,
              width: windowWidth * 0.3,
              height: windowWidth * 0.3,
              marginBottom: pxToDp(5),
            }}
            source={avatarImg ? {uri: avatarImg} : defaultAvatar}
          />
          <Text style={{alignSelf: 'center', color: '#999'}}>
            点击设置默认头像
          </Text>
        </TouchableOpacity>

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
      <View style={{marginTop: pxToDp(20)}}>
        <TouchableOpacity onPress={showCityPicker}>
          <Input
            disabled={true}
            value={`当前定位:${sumbitInfo.city}`}
            inputStyle={{color: '#666'}}
          />
        </TouchableOpacity>
      </View>
      <ColorBtn
        onPress={submitApprove}
        style={{
          height: pxToDp(40),
          marginTop: pxToDp(20),
          borderRadius: pxToDp(20),
        }}>
        提交认证
      </ColorBtn>
    </View>
  );
};

export default inject('rootStore')(observer(UserInfo));
