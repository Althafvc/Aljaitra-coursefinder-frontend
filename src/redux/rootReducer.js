// redux/rootReducer.js
import { combineReducers } from "redux";

const initialState = {
  isAuthenticated: false, // Example state
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN":
      return { ...state, isAuthenticated: true };
    case "LOGOUT":
      return { ...state, isAuthenticated: false };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  auth: authReducer, // Add more reducers here if needed
});

export default rootReducer;
