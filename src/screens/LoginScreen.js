import React from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';
import * as RootNavigation from '../RootNavigation';
import {connect} from 'react-redux';
import {getLogin, makeTrue} from '../redux/actions/AuthActions';
import LoginButton from '../components/LoginButton';
import LinkBotton from '../components/LinkBotton';
import CustomInput from '../components/CustomInput';
import AsyncStorage from '@react-native-community/async-storage';

const LoginScreen = (props) => {
  const [userInfo, setUserInfo] = React.useState({
    email: 'oktayibis@gmail.com',
    password: '123456',
  });
  const checkToken = async () => {
    let token = await AsyncStorage.getItem('user');
    token && props.makeTrue(true);
  };
  React.useEffect(() => {
    checkToken();
  }, [props]);
  const handleLogin = (user) => {
    props.getLogin(user);
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputs}>
        <CustomInput
          placeholder="User Mail"
          onChangeText={(text) =>
            setUserInfo({...userInfo, email: text.toLowerCase()})
          }
        />
        <CustomInput
          placeholder="Password"
          secureTextEntry
          onChangeText={(text) => setUserInfo({...userInfo, password: text})}
        />
      </View>
      <View style={styles.btns}>
        <LoginButton title="Login" onPress={() => handleLogin(userInfo)} />
        <LinkBotton
          title="Register"
          onPress={() => props.navigation.push('RegisterScreen')}
        />
      </View>
    </View>
  );
};
const mapStateToProps = ({authResponse}) => {
  const {isAuth} = authResponse;
  return {isAuth};
};
export default connect(mapStateToProps, {getLogin, makeTrue})(LoginScreen);

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#faf3dd',
    flex: 1,
    justifyContent: 'center',
  },
  btns: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 30,
  },
});
