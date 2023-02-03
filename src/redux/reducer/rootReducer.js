import Reducer from "./reducer";
import { combineReducers } from "redux";

const RootReducer = combineReducers({
  reducer: Reducer, //small wala reducer just a variable name given to a Reducer
});

export default RootReducer;
