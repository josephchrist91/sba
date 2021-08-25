import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import ButtonUtama from '../components/ButtonUtama';

const ScreenUtama = props => {
  return (
    <View style={css.halaman}>
      <View style={css.containerText}>
        <Text style={css.textSub}>Bacaan Hari ini :</Text>
        <Text style={css.textPasal}>Amsal 4</Text>
      </View>
      <ButtonUtama>
        <Icon name="checkmark-circle-outline" size={75} />
      </ButtonUtama>
      <View style={css.containerText}>
        <Text style={css.textKecil}>*Klik tombol di atas untuk melapor</Text>
      </View>
    </View>
  );
};

const css = StyleSheet.create({
  halaman: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerText: {
    paddingBottom: 25,
    paddingTop: 15,
  },
  textSub: {
    fontSize: 25,
  },
  textPasal: {
    fontSize: 50,
    fontWeight: 'bold',
  },
  textKecil: {
    fontSize: 20,
    fontStyle:'italic'
  },
});

export default ScreenUtama;
