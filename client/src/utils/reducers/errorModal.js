import { CommentAction } from 'semantic-ui-react';
import {
    OPEN_MODAL,
    CLOSE_MODAL
} from '../actions/errorModal';

export default function errorModalReducer(state = {
    open: false
}, payload) {
    switch(payload.type) {
        case OPEN_MODAL:
            return {
                ...state,
                open: true
            }
        case CLOSE_MODAL:
            return {
                ...state,
                open: false
            }
        default:
            return state
    }
}