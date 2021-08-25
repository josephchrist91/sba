import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

const ScreenRank = props => {
  return (
    <View style={css.containerUtama}>
      <View style={css.sectionAtas}>
        <View style={css.avatarItems}>
          <Text>Rank 1</Text>
        </View>
        <View style={css.avatarItems}>
          <Text>Rank 2</Text>
        </View>
        <View style={css.avatarItems}>
          <Text>Rank 3</Text>
        </View>
      </View>
      <View style={css.sectionBawah}>
        <Text>Ini bawah</Text>
      </View>
    </View>
  );
};

const css = StyleSheet.create({
  containerUtama: {
    flex: 1,
  },
  sectionAtas: {
    flex: 3,
    backgroundColor: 'pink',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  avatarItems: {
    padding: 25,
  },
  sectionBawah: {
    flex: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ScreenRank;
