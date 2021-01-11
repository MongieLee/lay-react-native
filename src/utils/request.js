import axios from 'axios';
import {BASE_URI} from './pathMap';
import Toast from '../components/Toast';
const instance = axios.create({
  baseURL: BASE_URI,
});

// 添加请求拦截器
instance.interceptors.request.use(
  function (config) {
    // 在发送请求之前做些什么
    console.log('你执行了发送前的拦截器');
    Toast.showLoadding('加载中...');
    return config;
  },
  function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  },
);

// 添加响应拦截器
instance.interceptors.response.use(
  function (response) {
    // 对响应数据做点什么
    Toast.hideLoadding();
    console.log(response);
    return response.data;
  },
  function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
  },
);

export default {
  get: instance.get,
  post: instance.post,
  privatePost: (url, data = {}, options = {}) => {
    // const token = RootStore.token;
    const headers = options.headers || {};
    return instance.post(url, data, {
      ...options,
      headers: {
        // Authorization: `Bearer ${token}`,
        ...headers,
      },
    });
  },
  privateGet: (url, data = {}, options = {}) => {
    // const token = RootStore.token;
    const headers = options.headers || {};
    return instance.post(url, {
      ...options,
      params: data,
      headers: {
        // Authorization: `Bearer ${token}`,
        ...headers,
      },
    });
  },
};
