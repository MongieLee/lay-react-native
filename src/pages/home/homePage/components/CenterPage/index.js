import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import {pxToDp} from '../../../../../utils/styleKit';
import IconFont from '../../../../../components/SvgIcon';
const getDay = () => {
  const today = new Date();
  let year = today.getFullYear();
  let month = today.getMonth() - 1;
  let day = today.getDate();
  return `${year}年-${month}月-${day}日`;
};
const count = {
  date: getDay(),
  wezher: '晴',
  temperature: '38°',
};
const Index = () => {
  const [stuts, setStuts] = useState(count);
  return (
    <View
      style={{
        marginTop: pxToDp(6),
        paddingLeft: pxToDp(10),
        paddingRight: pxToDp(10),
        flexDirection: 'row',
        backgroundColor: '#fff',
      }}>
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <Text>{stuts.date}</Text>
        <Text>今日气温：{stuts.temperature}</Text>
        <View
          style={{
            justifyContent: 'center',
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Text>{stuts.wezher}</Text>
          <IconFont
            style={{fontSize: pxToDp(30), color: 'red'}}
            name="pengyou"
          />
        </View>
      </View>
    </View>
  );
};
export default Index;
