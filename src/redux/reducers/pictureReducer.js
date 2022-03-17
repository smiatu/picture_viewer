import {ActionTypes} from "../constants/action-types";

const initialState = {
    pictures: [],
};

export const pictureReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case ActionTypes.SET_PICTURES:
            return {...state, pictures:payload};
        case ActionTypes.LIKE_PICTURE:
            return {
                ...state,
                pictures: {
                    ...state.pictures,
                    [payload]: {
                        ...state.pictures[payload],
                        isLiked: true,
                    }
                }
            }
        case ActionTypes.DISLIKE_PICTURE:
            return {
                ...state,
                pictures: {
                    ...state.pictures,
                    [payload]: {
                        ...state.pictures[payload],
                        isLiked: false,
                    }
                }
            }
        default:
            return state;
    }
};

export const selectPicturesReducer = (state = {}, {type, payload}) => {
    switch (type) {
        case ActionTypes.SELECT_PICTURE:
            return {...state, ...payload}
        default:
            return state;
    }
};

// export const pictureLikingReducer = (state = {}, {type, payload}) => {
//     switch (type) {
//         case ActionTypes.LIKE_PICTURE:
//             return {...state, isLiked: true}
//         case ActionTypes.DISLIKE_PICTURE:
//             return {...state, isLiked: false}
//         default:
//             return state;
//     }
// }