import React from 'react';
import {View, Text} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import styles from './styles';
const InputComponent = (props) => {
  return (
    <TouchableOpacity style={styles.container} {...props}>
      <Text style={styles.label}>{props.title}</Text>
    </TouchableOpacity>
  );
};

export default InputComponent;
