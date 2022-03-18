import { ActionTypes } from "../constants/action-types";

export const setPictures = (pictures) => {
    return {
        type: ActionTypes.SET_PICTURES,
        payload: pictures,
    };
};
export const selectPicture = (picture) => {
    return {
        type: ActionTypes.SELECT_PICTURE,
        payload: picture,
    };
};
export const likePicture = (picture) => {
    return {
        type: ActionTypes.LIKE_PICTURE,
        payload: picture,
    };
};
export const dislikePicture = (picture) => {
    return {
        type: ActionTypes.DISLIKE_PICTURE,
        payload: picture,
    };
};