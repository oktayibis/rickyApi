import React from 'react';
import {StyleSheet, TextInput, View} from 'react-native';

const CustomInput = (props) => {
  return (
    <View style={styles.container}>
      <TextInput style={styles.input} {...props} />
    </View>
  );
};

export default CustomInput;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    margin: 10,
    borderColor: '#c8d5b9',
    borderWidth: 1,
    padding: 7,
    borderRadius: 10,
  },

  input: {
    marginLeft: 5,
    padding: 7,
  },
});
