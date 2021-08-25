import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const ScreenProfil = props => {
  return (
    <View style={css.containerUtama}>
      <View style={css.sectionAtas}>
        <View style={css.sectionAvatar}>
          <Icon name="person-sharp" size={55} />
        </View>
        <View>
          <Text>Joseph Christanto</Text>
          <Text>+6281210657682</Text>
        </View>
      </View>
      <View style={css.sectionBawah}>
        <View style={css.sectionBawahJudul}>
          <Text style={css.textBawahJudul}>Riwayat Pembacaan Alkitab</Text>
        </View>
        <View style={css.sectionBawahList}>
          <View style={css.sectionBawahItem}>
            <View style={css.sectionIcon}>
              <Icon name="checkmark-circle-sharp" size={45} color='green'/>
            </View>
            <View style={css.sectionPasal}>
              <Text style={css.textPasal}>Amsal 3</Text>
            </View>
          </View>
          <View style={css.sectionBawahItem}>
            <View style={css.sectionIcon}>
              <Icon name="checkmark-circle-sharp" size={45} color='green' />
            </View>
            <View style={css.sectionPasal}>
              <Text style={css.textPasal}>Amsal 2</Text>
            </View>
          </View>
          <View style={css.sectionBawahItem}>
            <View style={css.sectionIcon}>
              <Icon name="close-sharp" size={45} color='red' />
            </View>
            <View style={css.sectionPasal}>
              <Text style={css.textPasal}>Amsal 1</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const css = StyleSheet.create({
  containerUtama: {
    flex: 1,
  },
  sectionAtas: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'lightblue',
    padding: 40,
  },
  sectionAvatar: {
    padding: 15,
  },
  sectionBawah: {
    flex: 4,
    marginTop:10
  },
  sectionBawahJudul: {
    padding: 15,
  },
  sectionBawahList: {
    paddingHorizontal: 25,
  },
  sectionBawahItem: {
    flexDirection: 'row',
    paddingVertical:5
  },
  sectionIcon: {
    justifyContent: 'center',
  },
  sectionPasal: {
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  textBawahJudul: {
    fontSize: 25,
    fontWeight: 'bold',
  },
  textPasal: {
    fontSize: 25,
  },
});

export default ScreenProfil;
