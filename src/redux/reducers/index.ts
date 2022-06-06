import { combineReducers } from "redux";
import userReducer from "./userReducer";
import homeSearchInputReducer from './homeSearchInputReducer'
import cartReducer from "./cartReducer";

export default combineReducers({
    userReducer,
    homeSearchInputReducer,
    cartReducer
})