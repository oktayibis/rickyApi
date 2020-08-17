import Axios from 'axios';

import axios from 'axios';
import {
  GET_URL,
  GET_CHARS,
  GET_ONE_URL,
  GET_ONE_CHAR,
  ADD_URL,
  ADD_CHAR,
  REMOVE_URL,
  REMOVE_CHAR,
  LOADING_START,
  LOADING_FINISH,
} from './type';
import {Alert} from 'react-native';

export const getAllData = (params) => {
  const callToken = 'Bearer '.concat(params);
  return (dispatch) => {
    axios
      .get(GET_URL, {
        headers: {
          Authorization: callToken,
        },
      })
      .then((resp) => dispatch({type: GET_CHARS, payload: resp.data}))
      .catch((err) => Alert.alert('Error', err.message));
  };
};

export const getOneChar = (params) => {
  const callToken = 'Bearer '.concat(params.token);
  return (dispatch) => {
    dispatch({type: LOADING_START});
    axios
      .get(GET_ONE_URL, {
        params: {
          id: params.id,
        },
        headers: {
          Authorization: callToken,
        },
      })
      .then((resp) => {
        dispatch({type: GET_ONE_CHAR, payload: resp.data});
        Alert.alert('Success', `Welcome ${params.name} our world`);
      })
      .catch((err) => Alert.alert('Error', err.message))
      .finally(() => dispatch({type: LOADING_FINISH}));
  };
};

export const addChar = (char, token) => {
  const callToken = 'Bearer '.concat(token);

  return (dispatch) => {
    checkAllDataIsValid(char) && dispatch({type: LOADING_START});
    axios
      .post(ADD_URL, char, {
        headers: {
          Authorization: callToken,
        },
      })
      .then((resp) => {
        dispatch({type: ADD_CHAR, payload: resp.data});
      })
      .catch((err) => {
        Alert.alert('Error', err.message);
      })
      .finally(() => dispatch({type: LOADING_FINISH}));
  };
};

export const removeChar = (id, token) => {
  const callToken = 'Bearer '.concat(token);
  console.log(callToken);
  return (dispatch) => {
    dispatch({type: LOADING_START});
    axios
      .post(
        REMOVE_URL,
        {id},
        {
          headers: {
            Authorization: callToken,
          },
        },
      )
      .then((resp) => {
        dispatch({type: REMOVE_CHAR, payload: id});
      })
      .catch((err) => Alert.alert('Error', err.message))
      .finally(() => dispatch({type: LOADING_FINISH}));
  };
};

function checkAllDataIsValid(params) {
  for (const [key, value] of Object.entries(params)) {
    if (!value) {
      Alert.alert('Error', `Please enter ${key}`);
      return false;
    }
  }
  return true;
}
