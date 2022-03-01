import {combineReducers} from "redux";
import charger from "./charge";
import sample from "./sample";

const rootReducer = combineReducers({
    charger,
    sample
})

export default rootReducer;