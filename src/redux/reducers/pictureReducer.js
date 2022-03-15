import {ActionTypes} from "../constants/action-types";

const initialState = {
    pictures: [
        {
            id: 1,
            title: "photo1",
            userID: "1",
        },
    ],
};

export const pictureReducer = (state, {type, payload}) => {
    switch (type) {
        case ActionTypes.SET_PICTURES:
            return state;

        default:
            return state;
    }
}