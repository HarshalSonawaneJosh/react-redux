import {
  DELETE_DETAILS,
  GET_DETAILS,
  POST_DETAILS,
  UPDATE_DETAILS,
} from "../type";

const initialState = {
  details: [],
  // isUpdateResponse: false,
};

const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_DETAILS:
      return { ...state, details: action.payload };
    case POST_DETAILS:
      return { ...state, details: [...state.details, action.payload] };
    case UPDATE_DETAILS:
      return { ...state, details: [...state.details, action.payload] };
    case DELETE_DETAILS:
      const newState = state.filter((user) => user.id !== action.payload);
      return { ...state, details: newState };
    default:
      return state;
  }
};

export default Reducer;

/*
//suraj
import { ACTIONS } from "../type";

const initialState = {
  isLoading: false,
  details: [],
};

const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.GET_DETAILS:
      return {
        ...state,
        isLoading: true,
      };
    default:
      return state;
  }
};

export default Reducer;
 */
