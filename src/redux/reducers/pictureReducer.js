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
}