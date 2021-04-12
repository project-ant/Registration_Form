import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import TextInput from './components/atoms/TextInput/index.js';
import Button from './components/atoms/Button/index.js';
import Gap from './components/atoms/Gap/index.js';

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Regisration</Text>
      <Gap height={40} />
      <TextInput label="Name" placeholder="Masukan nama lengkap anda" />
      <Gap height={20} />
      <TextInput label="Username" placeholder="Masukan username anda" />
      <Gap height={20} />
      <TextInput label="Email" placeholder="Masukan email anda" />
      <Gap height={20} />
      <TextInput label="Address" placeholder="Masukkan alamat anda" />
      <Gap height={20} />
      <TextInput
        label="Phone Number"
        placeholder="Masukkan Nomor Telepon Anda"
      />
      <Gap height={48} />
      <Button label="Sign In" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 25,
    marginVertical: 25,
  },
  title: {
    fontSize: 36,
    fontWeight: '700',
  },
});

export default App;