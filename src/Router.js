import React from 'react';
import {View, Text} from 'react-native';
import {connect} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import AddScreen from './screens/AddScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import {TouchableOpacity} from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-community/async-storage';
import {changeStatus} from './redux/actions/AuthActions';
const Router = (props) => {
  const Stack = createStackNavigator();
  console.log('-----------------', props.isAuth);
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {props.isAuth === true ? (
          <>
            <Stack.Screen
              name="HomeScreen"
              component={HomeScreen}
              options={({navigation, route}) => ({
                title: 'Characters',
                headerLeft: () => {
                  return (
                    <TouchableOpacity
                      onPress={() => {
                        AsyncStorage.removeItem('user');
                        props.changeStatus({isAuth: false, token: ''});
                      }}
                      style={{
                        marginLeft: 15,
                        backgroundColor: '#c26565',
                        paddingHorizontal: 15,
                        paddingVertical: 9,
                        borderRadius: 5,
                      }}>
                      <Text style={{color: '#fff', fontWeight: '600'}}>
                        Log out
                      </Text>
                    </TouchableOpacity>
                  );
                },
                headerRight: () => {
                  return (
                    <TouchableOpacity
                      onPress={() => navigation.navigate('AddScreen')}
                      style={{
                        marginRight: 15,
                        backgroundColor: '#8fc0a9',
                        paddingHorizontal: 20,
                        paddingVertical: 5,
                        borderRadius: 5,
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}>
                      <Text style={{color: '#faf3dd', fontSize: 20}}>+</Text>
                    </TouchableOpacity>
                  );
                },
              })}
            />
            <Stack.Screen
              name="AddScreen"
              component={AddScreen}
              options={{
                title: 'Add your character',
              }}
            />
          </>
        ) : (
          <>
            <Stack.Screen
              name="LoginScreen"
              component={LoginScreen}
              options={{
                title: 'Login to Application',
              }}
            />
            <Stack.Screen
              name="RegisterScreen"
              component={RegisterScreen}
              options={{
                title: 'Register yourself',
              }}
            />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};
const mapStateToProps = ({authResponse}) => {
  const {isAuth} = authResponse;
  return {isAuth};
};
export default connect(mapStateToProps, {changeStatus})(Router);
