import React from 'react';
import {View, FlatList, ActivityIndicator} from 'react-native';
import CharacterComponent from '../components/CharacterComponent';
import {connect} from 'react-redux';
import {getAllData, removeChar} from '../redux/actions';
import AsyncStorage from '@react-native-community/async-storage';

const HomeScreen = (props) => {
  React.useEffect(() => {
    checkToken();
  }, []);

  const checkToken = async () => {
    let token = await AsyncStorage.getItem('user');
    props.getAllData(token);
  };

  const handleDelete = (id) => {
    props.removeChar(id, props.token);
  };
  const renderItem = ({item}) => {
    return <CharacterComponent handleDelete={handleDelete} item={item} />;
  };
  return (
    <View style={{justifyContent: 'center', alignItems: 'center'}}>
      {props.loading ? (
        <ActivityIndicator size="large" color="blue" />
      ) : (
        <FlatList
          data={props.list}
          renderItem={renderItem}
          keyExtractor={(item) => item._id.toString()}
        />
      )}
    </View>
  );
};
const mapStateToProps = ({dataResponse, authResponse}) => {
  const {list, loading} = dataResponse;
  const {token} = authResponse;
  return {list, token, loading};
};
export default connect(mapStateToProps, {getAllData, removeChar})(HomeScreen);
