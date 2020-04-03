import {
    combineReducers
} from "../../node_modules/redux";
import appReducer from "./appReducer";
import {
    todoReducer
} from "./todoReducer";
import {
    routerReducer as routing
} from 'react-router-redux';

export default combineReducers({
    appState: appReducer,
    todoState: todoReducer,
    routing
});