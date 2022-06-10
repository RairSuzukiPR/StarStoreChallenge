import { combineReducers } from "redux";
import userReducer from "./userReducer";
import homeSearchInputReducer from './homeSearchInputReducer'
import cartReducer from "./cartReducer";
import orderReducer from "./orderReducer";
import itemsReducer from "./itemsReducer";

export default combineReducers({
    userReducer,
    homeSearchInputReducer,
    cartReducer,
    orderReducer,
    itemsReducer
})