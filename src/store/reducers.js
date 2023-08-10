import { SET_FIRST_NAME, SET_LAST_NAME, SET_EMAIL, SET_MESSAGE } from './action_types'

const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  message: "",
};

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_FIRST_NAME:
      return { ...state, firstName: action.firstName };
    case SET_LAST_NAME:
      return { ...state, lastName: action.lastName };
    case SET_EMAIL:
      return { ...state, email: action.email };
    case SET_MESSAGE:
      return { ...state, message: action.message };
    default:
      return state;
  }
};
