import {Alert} from 'react-native';
import axios from 'axios';
import {
  LOGIN_URL,
  CHANGE_AUTH_STATUS,
  REGISTER_URL,
  REGISTER_USER,
  LOGIN_USER,
} from './type';
export const getLogin = (params) => {
  return (dispatch) => {
    if ((params.email !== '', params.password !== '')) {
      if (validateEmail(params.email)) {
        axios
          .post(LOGIN_URL, params)
          .then((resp) => {
            dispatch({type: LOGIN_USER, payload: resp.data});
          })
          .catch((error) => Alert.alert('Error', error.message));
      } else {
        Alert.alert('Error', 'E-mail is not valid');
      }
    } else {
      Alert.alert('Login Error', 'E-Mail or Password can not be empty');
    }
  };
};

export const registerUser = (params) => {
  return (dispatch) => {
    checkAllDataIsValid(params) &&
      axios
        .post(REGISTER_URL, params)
        .then((resp) => {
          Alert.alert('Thanks a lot!', 'You registered successfully');
          dispatch({type: REGISTER_USER, payload: resp.data});
        })
        .catch((err) => Alert.alert('Error', err.message));
  };
};

export const changeStatus = (status) => {
  return (dispatch) => {
    dispatch({type: CHANGE_AUTH_STATUS, payload: status});
  };
};

function validateEmail(email) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

function checkAllDataIsValid(params) {
  for (const [key, value] of Object.entries(params)) {
    if (!value) {
      Alert.alert('Error', `Please enter ${key}`);
      return false;
    }
  }
  return true;
}
