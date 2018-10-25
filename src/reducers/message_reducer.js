import { ADD_MESSAGE, DEL_MESSAGE, UPDATE_MESSAGE } from '../actions/types';

export default function messageReducer(state = [], action) {
    switch (action.type) {
        case ADD_MESSAGE:
            return [...state, action.message];
        case DEL_MESSAGE:
            return state.filter((mess, i) => i !== action.index);
        case UPDATE_MESSAGE:
            return state.map((mess, i) => i === action.index ? action.message : mess);
        default:
            return state;
    }
}