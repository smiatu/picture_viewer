import { combineReducers } from "redux";
import { pictureReducer, selectedPicturesReducer } from "./pictureReducer";

const reducers = combineReducers({
    allPictures: pictureReducer,
    picture: selectedPicturesReducer,
});

export default reducers;