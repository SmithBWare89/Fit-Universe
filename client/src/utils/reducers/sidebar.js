import { TOGGLE_SIDEBAR } from '../actions/sidebar';

export default function sidebarReducer(state, action) {
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