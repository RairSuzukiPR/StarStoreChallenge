import { combineReducers } from "redux";
import userReducer from "./userReducer";
import homeSearchInputReducer from './homeSearchInputReducer'
import cartReducer from "./cartReducer";
import orderReducer from "./orderReducer";


export default combineReducers({
    userReducer,
    homeSearchInputReducer,
    cartReducer,
    orderReducer
})