import { combineReducers } from "redux";
import userReducer from "./userReducer";
import homeSearchInputReducer from './homeSearchInputReducer'

export default combineReducers({
    userReducer,
    homeSearchInputReducer
})