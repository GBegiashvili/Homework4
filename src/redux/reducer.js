import { actionTypes } from "./actionTypes";

const initialState = {
  userList: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_USER_LIST:
      return {
        ...state,
        userList: action.information,
      };
    default:
      return state;
  }
};

export default reducer;
