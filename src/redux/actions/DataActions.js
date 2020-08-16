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
    axios
      .get(GET_ONE_URL, {
        params: {
          id: params.id,
        },
        headers: {
          Authorization: callToken,
        },
      })
      .then((resp) => dispatch({type: GET_ONE_CHAR, payload: resp.data}))
      .catch((err) => Alert.alert('Error', err.message));
  };
};

export const addChar = (char, token) => {
  const callToken = 'Bearer '.concat(token);

  return (dispatch) => {
    axios
      .post(
        ADD_URL,
        {
          char,
        },
        {
          headers: {
            Authorization: callToken,
          },
        },
      )
      .then((resp) => dispatch({type: ADD_CHAR, payload: resp.data}))
      .catch((err) => Alert.alert('Error', err.message));
  };
};

export const removeChar = (id, token) => {
  const callToken = 'Bearer '.concat(token);
  return (dispatch) => {
    axios
      .post(
        REMOVE_URL,
        {
          id,
        },
        {
          headers: {
            Authorization: callToken,
          },
        },
      )
      .then((resp) => dispatch({type: REMOVE_CHAR, payload: id}))
      .catch((err) => Alert.alert('Error', err.message));
  };
};
