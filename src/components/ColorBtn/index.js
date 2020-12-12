import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {inject, observer} from 'mobx-react';
@inject('RootStore')
@observer
export default class Btn extends Component {
  render() {
    const mobx = this.props.RootStore;
    console.log(this);
    return (
      <View>
        <Text
          onPress={() => {
            console.log('????');
            mobx.changeName('丢你老母');
            console.log('----');
          }}>
          ???{mobx.name}
        </Text>
      </View>
    );
  }
}
