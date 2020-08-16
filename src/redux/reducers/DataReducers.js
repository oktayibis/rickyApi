import {GET_CHARS, ADD_CHAR, REMOVE_CHAR} from '../actions/type';

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
    default:
      return state;
  }
};
