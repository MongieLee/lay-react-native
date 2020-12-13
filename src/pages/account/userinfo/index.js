import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {pxToDp} from '../../../utils/styleKit';
import SvgUri from 'react-native-svg-uri';
import {male, female} from '../../../resource/fonts/svgIcon';
const manSvg = `<svg id="icon-man" viewBox="0 0 1024 1024"><path d="M736.761532 280.671401c0-119.791294-101.33699-216.869283-226.324632-216.869283-125.011178 0-226.348168 97.077989-226.348168 216.869283 0 4.859681 0 23.89113 0 28.750811 0 3.415796 0 17.057491 0 20.594037 0 124.795261 101.33699 310.170249 226.348168 310.170249 124.987642 0 226.324632-185.374988 226.324632-310.170249 0-3.536546 0-17.178241 0-20.594037C736.761532 304.561507 736.761532 285.531082 736.761532 280.671401z" fill="#1296db"></path><path d="M890.211413 747.441267c-63.324234-55.888891-192.185091-114.977661-215.594243-125.492132-0.240477 0.240477-0.481977 0.456395-0.722454 0.697895 0.216941 5.821589 0.530073 11.620665 0.530073 17.563004 0 120.584356-45.712111 222.907813-109.396549 260.968663l-23.697725-122.147968 24.636097-28.485775-54.277184-49.272193-54.278207 49.272193 24.63712 28.485775-23.987321 123.543757c-64.863287-36.931121-111.658056-140.337235-111.658056-262.365476 0-5.869684 0.313132-11.619642 0.529049-17.417695-28.028357 12.654204-152.077627 70.203922-213.764572 124.649951-69.795623 61.591777-70.830185 212.527394-70.830185 212.527394l346.45157 0 205.801203 0 346.452593 0C961.040574 959.968661 960.007035 809.034067 890.211413 747.441267z" fill="#1296db"></path></svg>`;
export class index extends Component {
  render() {
    return (
      <View style={{flex: 1, backgroundColor: '#fff', padding: pxToDp(20)}}>
        <Text style={{color: '#666', fontSize: pxToDp(25), fontWeight: 'bold'}}>
          填写资料
        </Text>
        <Text style={{color: '#666', fontSize: pxToDp(25), fontWeight: 'bold'}}>
          提升我的魅力
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
              style={{
                borderRadius: pxToDp(30),
                width: pxToDp(60),
                height: pxToDp(60),
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#eee',
              }}>
              <SvgUri svgXmlData={male} width="30" height="30" />
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                borderRadius: pxToDp(30),
                width: pxToDp(60),
                height: pxToDp(60),
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#eee',
              }}>
              <SvgUri svgXmlData={female} width="30" height="30" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

export default index;
