import {
    OPEN_MODAL,
    CLOSE_MODAL
} from '../actions/globalStateActions';

export default function globalStateReducer(state = {
    sidebarMenu: {
        visible: false
    },
    errorModalOpen: false,
    errorMessage: ''
}, payload){
    switch (payload.type) {
        case OPEN_MODAL:
            console.log(state)
            console.log(payload)
            return {
                ...state,
                errorModalOpen: !state.errorModalOpen,
                errorMessage: payload.errorMessage
            }
        case CLOSE_MODAL:
            return {
                ...state,
                errorModalOpen: !state.errorModalOpen,
                errorMessage: ''
            }
        default: 
            return state;
    }
}