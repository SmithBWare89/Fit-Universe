import {
    OPEN_ERROR_MODAL,
    CLOSE_ERROR_MODAL,
    OPEN_COMMENT_MODAL,
    CLOSE_COMMENT_MODAL,
    SET_COMMENT_TEXT,
    SET_POST_DATA,
    TOGGLE_SIDEBAR
} from '../actions/globalStateActions';

export default function globalStateReducer(state = {
    sidebarVisible: false,
    errorModalOpen: false,
    errorMessage: '',
    commentModalOpen: false,
    commentText: '',
    commentModalPostData: []
}, payload){
    switch (payload.type) {
        case OPEN_ERROR_MODAL:
            return {
                ...state,
                errorModalOpen: !state.errorModalOpen,
                errorMessage: payload.errorMessage
            }
        case CLOSE_ERROR_MODAL:
            return {
                ...state,
                errorModalOpen: !state.errorModalOpen,
                errorMessage: ''
            }
        case OPEN_COMMENT_MODAL:
            return {
                ...state,
                commentModalOpen: !state.commentModalOpen,
                commentModalPostData: payload.commentModalPostData
            }
        case CLOSE_COMMENT_MODAL:
            return {
                ...state,
                commentModalOpen: !state.commentModalOpen,
                commentText: ''
            }
        case SET_COMMENT_TEXT:
            return {
                ...state,
                commentText: payload.commentText
            }
        case TOGGLE_SIDEBAR:
            return {
                ...state,
                sidebarVisible: !state.sidebarVisible
            }
        default: 
            return state;
    }
}