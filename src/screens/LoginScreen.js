import React from 'react';
import {View, StyleSheet} from 'react-native';
import {connect} from 'react-redux';
import {getLogin, changeStatus} from '../redux/actions/AuthActions';
import LoginButton from '../components/LoginButton';
import LinkBotton from '../components/LinkBotton';
import CustomInput from '../components/CustomInput';
import AsyncStorage from '@react-native-community/async-storage';

const LoginScreen = (props) => {
  const [userInfo, setUserInfo] = React.useState({
    email: '',
    password: '',
  });
  const checkToken = async () => {
    let token = await AsyncStorage.getItem('user');
    token && props.changeStatus({isAuth: true, token});
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
          value={userInfo.email}
          placeholder="User Mail"
          onChangeText={(text) =>
            setUserInfo({...userInfo, email: text.toLowerCase()})
          }
        />
        <CustomInput
          value={userInfo.password}
          placeholder="Password"
          secureTextEntry
          onChangeText={(text) => setUserInfo({...userInfo, password: text})}
        />
      </View>
      <View style={styles.btns}>
        <LoginButton
          title="Login"
          onPress={() => handleLogin(userInfo)}
          loading={props.loading}
        />
        <LinkBotton
          title="Register"
          onPress={() => props.navigation.push('RegisterScreen')}
        />
      </View>
    </View>
  );
};
const mapStateToProps = ({authResponse}) => {
  const {isAuth, loading} = authResponse;
  return {isAuth, loading};
};
export default connect(mapStateToProps, {getLogin, changeStatus})(LoginScreen);

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
