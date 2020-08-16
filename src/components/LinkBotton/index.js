import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';
import {TouchableOpacity} from 'react-native-gesture-handler';
const LinkButton = (props) => {
  return (
    <TouchableOpacity style={styles.container} {...props}>
      <Text style={styles.label}>{props.title}</Text>
    </TouchableOpacity>
  );
};

export default LinkButton;
