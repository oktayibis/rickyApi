import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Alert,
  ActivityIndicator,
  Image,
} from 'react-native';
import CustomInput from '../components/CustomInput';
import LinkButton from '../components/LinkBotton';
import {TouchableOpacity} from 'react-native';
import ImagePicker from 'react-native-image-picker';
import {connect} from 'react-redux';
import {addChar} from '../redux/actions';
const AddScreen = (props) => {
  const [char, setChar] = React.useState({
    name: '',
    status: '',
    species: '',
    gender: '',
    image: '',
  });

  const [imageUploading, setImageUploading] = React.useState(false);
  console.log(char.image);
  return (
    <View style={styles.container}>
      <CustomInput
        placeholder="Name"
        onChangeText={(text) => setChar({...char, name: text})}
      />
      <CustomInput
        placeholder="Status"
        onChangeText={(text) => setChar({...char, status: text})}
      />
      <CustomInput
        placeholder="Species"
        onChangeText={(text) => setChar({...char, species: text})}
      />
      <CustomInput
        placeholder="Gender"
        onChangeText={(text) => setChar({...char, gender: text})}
      />
      <Image
        defaultSource={require('../../asset/dummy.jpg')}
        style={{width: 150, height: 150, alignSelf: 'center', borderRadius: 10}}
        source={{uri: char.image ? char.image : null}}
      />
      <View>
        <TouchableOpacity
          style={styles.addImageContainer}
          onPress={() => {
            setImageUploading(true);
            const options = {
              title: 'Select Image',
              storageOptions: {
                skipBackup: true,
                path: 'images',
              },
            };

            ImagePicker.showImagePicker(options, (response) => {
              console.log('REsp ====', response);
              if (response.error) {
                return Alert.alert('Uploading Failed', response.error);
              }
              setChar({...char, image: response.uri});
              setImageUploading(false);
              Alert.alert('Image Added');
            });
          }}>
          <Text style={styles.label}>
            {imageUploading ? <ActivityIndicator /> : 'Add Image'}
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.addBtn}>
        <LinkButton
          loading={props.loading}
          title="Add Character"
          onPress={() => {
            props.addChar(char, props.token);
            Alert.alert('Added', `Welcome ${char.name}`, [
              {
                text: "Let's move!",
                onPress: () => props.navigation.pop(),
              },
            ]);
          }}
        />
        {props.loading && <ActivityIndicator size="large" color="blue" />}
      </View>
    </View>
  );
};

const mapStateToProps = ({dataResponse, authResponse}) => {
  let {loading} = dataResponse;
  let {token} = authResponse;
  return {token, loading};
};
export default connect(mapStateToProps, {addChar})(AddScreen);

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
  addImageContainer: {
    backgroundColor: '#c8d5b9',
    paddingHorizontal: 5,
    paddingVertical: 5,
    width: '35%',
    borderRadius: 50,
    alignSelf: 'center',
    marginTop: 20,
    borderColor: '#68b0ab',
    borderWidth: 0.5,
    elevation: 3,
  },
  label: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
    margin: 5,
    textAlign: 'center',
  },
  addBtn: {
    alignSelf: 'center',
    marginTop: 30,
  },
});
