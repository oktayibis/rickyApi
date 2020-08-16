import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import LoginButton from '../components/LoginButton';
import CustomInput from '../components/CustomInput';
import LinkBotton from '../components/LinkBotton';
import {connect} from 'react-redux';
import {registerUser} from '../redux/actions/AuthActions';
/**
 * 	"email": "csert@test.com",
	"password": "1234",
	"firstName": "cagatay",
	"lastName": "sert"
 */
const RegisterScreen = (props) => {
  const [user, setUser] = React.useState({
    email: '',
    password: '',
    firstName: '',
    lastName: '',
  });
  return (
    <View style={styles.container}>
      <CustomInput
        placeholder="E-Mail"
        onChangeText={(text) => setUser({...user, email: text.toLowerCase()})}
      />
      <CustomInput
        placeholder="Password"
        onChangeText={(text) => setUser({...user, password: text})}
      />
      <CustomInput
        placeholder="First Name"
        onChangeText={(text) => setUser({...user, firstName: text})}
      />
      <CustomInput
        placeholder="Last Name"
        onChangeText={(text) => setUser({...user, lastName: text})}
      />

      <View style={styles.buttons}>
        <LoginButton
          title="Register"
          onPress={() => props.registerUser(user)}
        />
        <LinkBotton title="Go Login" onPress={() => props.navigation.pop()} />
      </View>
    </View>
  );
};
const mapStateToProps = ({authResponse}) => {
  const {isAuth} = authResponse;
  return {isAuth};
};
export default connect(mapStateToProps, {registerUser})(RegisterScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 30,
  },
});
