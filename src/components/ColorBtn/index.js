import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5,
    height: '100%',
    width: '100%',
    alignSelf: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 18,
    fontFamily: 'Gill Sans',
    textAlign: 'center',
    color: '#ffffff',
    backgroundColor: 'transparent',
  },
});

class Btn extends Component {
  static defaultProps = {
    style: {},
    textStyle: {},
    disabled: false,
  };
  render() {
    const {disabled, onPress} = this.props;
    return (
      <TouchableOpacity
        disabled={disabled}
        onPress={onPress}
        style={{
          overflow: 'hidden',
          width: '100%',
          height: '100%',
          ...this.props.style,
        }}>
        <LinearGradient
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          colors={['#a270cd', '#e1758f']}
          style={styles.linearGradient}>
          <Text style={{...styles.buttonText, ...this.props.textStyle}}>
            {this.props.children}
          </Text>
        </LinearGradient>
      </TouchableOpacity>
    );
  }
}

export default Btn;
