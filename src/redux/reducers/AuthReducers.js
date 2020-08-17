import {
  REGISTER_USER,
  LOGIN_USER,
  CHANGE_AUTH_STATUS,
  LOADING_START,
  LOADING_FINISH,
} from '../actions/type';
import AsyncStorage from '@react-native-community/async-storage';

const USER = {
  token: null,
  isAuth: false,
  loading: false,
};

export default (state = USER, action) => {
  switch (action.type) {
    case REGISTER_USER:
      if (action.payload.status === true) {
        AsyncStorage.setItem('user', action.payload.token);
        return {
          ...state,
          token: action.payload.token,
          isAuth: true,
        };
      } else {
        return {
          ...state,
        };
      }
    case LOGIN_USER:
      AsyncStorage.setItem('user', action.payload.token);
      return {
        ...state,
        token: action.payload.token,
        isAuth: true,
      };
    case CHANGE_AUTH_STATUS:
      return {
        ...state,
        isAuth: action.payload.isAuth,
        token: action.payload.token,
      };
    case LOADING_START:
      return {
        ...state,
        loading: true,
      };
    case LOADING_FINISH:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};
