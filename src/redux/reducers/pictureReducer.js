import {ActionTypes} from "../constants/action-types";

const initialState = {
    pictures: [],
};

export const pictureReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case ActionTypes.SET_PICTURES:
            return {...state, pictures:payload};

        default:
            return state;
    }
};

export const selectedPicturesReducer = (state = {}, {type, payload}) => {
    switch (type) {
        case ActionTypes.SELECT_PICTURE:
            return {...state, ...payload};
        case ActionTypes.LIKE_PICTURE:
            return {
                ...state,
                isLiked: true,
            };
        case ActionTypes.DISLIKE_PICTURE:
            return {
                ...state,
                isLiked: false,
            };
        default:
            return state;
    }
};