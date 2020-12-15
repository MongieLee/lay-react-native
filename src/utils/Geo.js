import {PermissionsAndroid, Platform} from 'react-native';
import {init, Geolocation} from 'react-native-amap-geolocation';
import axios from 'axios';

class Geo {
  //初始化，向用户请求权限
  async initGeo() {
    if (Platform.OS === 'android') {
      await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_COARSE_LOCATION,
      );
    }
    await init({
      ios: '5d0d0677f2de527df960629685054255',
      android: '5d0d0677f2de527df960629685054255',
    });
    return Promise.resolve();
  }

  async getCurrentPosition() {
    return new Promise((resolve, reject) => {
      console.log('开始定位');
      Geolocation.getCurrentPosition(({coords}) => {
        resolve(coords);
      }, reject);
    });
  }

  async getCityByLocation() {
    const {longitude, latitude} = await this.getCurrentPosition();
    console.log(longitude, latitude);
    const res = await axios.get('https://restapi.amap.com/v3/geocode/regeo', {
      params: {
        location: `${longitude},${latitude}`,
        key: '62a5b3ad5d9ebef63e4084c09fd33e35',
      },
    });
    return Promise.resolve(res.data);
  }
}

export default new Geo();
