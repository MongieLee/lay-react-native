/*
 * @Author: your name
 * @Date: 2020-12-12 23:06:30
 * @LastEditTime: 2020-12-12 23:26:49
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \lay\src\components\index.js
 */
import React from 'react';
import {ActivityIndicator} from 'react-native';
import {Toast, Theme} from 'teaset';

let customKey = null;

Toast.showLoadding = (text) => {
  if (customKey) return;
  customKey = Toast.show({
    text,
    icon: <ActivityIndicator size="large" color={Theme.toastIconTintColor} />,
    position: 'middle',
    duration: 5000,
  });
};

Toast.hideLoadding = () => {
  if (!customKey) return;
  Toast.hide(customKey);
  customKey = null;
};

export default Toast;
