import { CommentAction } from 'semantic-ui-react';
import {
    OPEN_MODAL,
    CLOSE_MODAL
} from '../actions/errorModal';

export default function errorModalReducer(state = {
    open: false,
    errorMessage: ''
}, payload) {
    switch(payload.type) {
        case OPEN_MODAL:
            console.log(payload)
            return {
                ...state,
                open: !state.open,
                errorMessage: payload.errorMessage
            }
        case CLOSE_MODAL:
            return {
                ...state,
                open: !state.open,
                errorMessage: ''
            }
        default:
            return state
    }
}