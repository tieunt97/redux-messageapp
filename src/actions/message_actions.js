import { ADD_MESSAGE, DEL_MESSAGE, UPDATE_MESSAGE } from '../actions/types';

export function addMessage(message) {
    return {
        type: ADD_MESSAGE,
        message
    }
}

export function deleteMessage(index) {
    return {
        type: DEL_MESSAGE,
        index
    }
}

export function updateMessage(index, message) {
    return {
        type: UPDATE_MESSAGE,
        index,
        message
    }
}