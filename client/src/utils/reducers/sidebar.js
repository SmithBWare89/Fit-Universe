import { TOGGLE_SIDEBAR } from '../actions/sidebar';

export default function sidebarReducer(state = {
    sidebarMenu: {
        visible: false
    }
}, action) {
    switch (action.type) {
        case TOGGLE_SIDEBAR:
            return {
                ...state,
                sidebarMenu: {
                    visible: !state.sidebarMenu.visible
                }
            }
        default:
            return state;
    }
}