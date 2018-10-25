import { ADD_MESSAGE, DEL_MESSAGE } from '../actions/types';

export function addMessage(message) {
    return {
        type: ADD_MESSAGE,
        message
    }
}

export function deleteMessage(index){
    return {
        type: DEL_MESSAGE,
        index
    }
}