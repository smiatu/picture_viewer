import { combineReducers } from "redux";
import { pictureReducer, selectPicturesReducer } from "./pictureReducer";

const reducers = combineReducers({
    allPictures: pictureReducer,
    picture: selectPicturesReducer,
});

export default reducers;