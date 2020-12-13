import React from 'react';
import {ActivityIndicator} from 'react-native';
import {Toast, Theme} from 'teaset';

let customKey = null;

Toast.showLoadding = (text) => {
  if (customKey) return;
  customKey = Toast.show({
    text,
    icon: <ActivityIndicator size="large" color={Theme.toastIconTintColor} />,
    position: 'center',
    duration: 5000,
  });
};

Toast.hideLoadding = () => {
  if (!customKey) return;
  Toast.hide(customKey);
  customKey = null;
};

export default Toast;
