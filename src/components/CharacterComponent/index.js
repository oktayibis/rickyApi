import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Alert,
} from 'react-native';
import LinkBottom from '../LinkBotton';
import Swipeout from 'react-native-swipeout';

const Character = ({item, handleDelete}) => {
  const swipeoutBtns = [
    {
      text: 'Delete',
      type: 'delete',
      onPress: () =>
        Alert.alert('Are You Sure', 'Do you want to delete?', [
          {
            text: 'Yes',
            onPress: () => handleDelete(item._id),
          },
          {
            text: 'No',
          },
        ]),
    },
  ];
  return (
    <Swipeout autoClose close right={swipeoutBtns}>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={{uri: item.image}}
            resizeMode="contain"
          />
        </View>
        <View>
          <Text style={styles.title}>{item.name}</Text>
          <Text style={styles.status}>{item.status}</Text>
          <Text style={styles.species}>{item.species}</Text>
          <Text style={styles.gender}>{item.gender}</Text>
        </View>
      </View>
    </Swipeout>
  );
};

export default Character;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    margin: 10,
    padding: 5,
    borderRadius: 5,
    elevation: 4,
    borderColor: '#68b0ab',
    borderWidth: 0.5,
    flexDirection: 'row',
  },
  imageContainer: {
    width: '30%',
    height: 100,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  title: {
    color: '#158467',
    fontWeight: '600',
    fontSize: 18,
  },
  status: {
    color: '#52575d',
  },
  species: {
    color: '#68b0ab',
  },
  delete: {
    justifyContent: 'center',
  },
});
