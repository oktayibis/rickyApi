import {
  GET_CHARS,
  ADD_CHAR,
  REMOVE_CHAR,
  LOADING_START,
  LOADING_FINISH,
} from '../actions/type';

const DATA = {
  list: [],
  loading: false,
};

export default (state = DATA, action) => {
  switch (action.type) {
    case GET_CHARS:
      return {
        ...state,
        list: action.payload.characters,
      };
    case ADD_CHAR:
      return {
        ...state,
        list: [...state.list, action.payload.newCharacter],
      };
    case REMOVE_CHAR:
      let newList = state.list.filter((item) => item._id !== action.payload);
      return {
        ...state,
        list: newList,
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
