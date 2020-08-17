import React from 'react';
import {View, Text, ActivityIndicator} from 'react-native';
import styles from './styles';
import {TouchableOpacity} from 'react-native-gesture-handler';
const LinkButton = (props) => {
  return (
    <TouchableOpacity style={styles.container} {...props}>
      <Text style={styles.label}>
        {props.loading ? <ActivityIndicator color="#fff" /> : props.title}
      </Text>
    </TouchableOpacity>
  );
};

export default LinkButton;
