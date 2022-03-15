import { combineReducers } from "redux";
import { pictureReducer } from "./pictureReducer";

const reducers = combineReducers({
    allPictures: pictureReducer,
})