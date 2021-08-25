import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const ButtonUtama = props => {
  return (
    <TouchableOpacity activeOpacity={0.6} onPress={props.onPress}>
      <View style={styles.button}>
        <Text style={styles.buttonText}>{props.children}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'darkgreen',
    paddingVertical: 15,
    paddingHorizontal: 15,
    borderRadius:15
  },
  buttonText: {
      color: 'white',
      fontFamily: 'OpenSans-Regular',
      fontSize: 15
  },
});

export default ButtonUtama;
