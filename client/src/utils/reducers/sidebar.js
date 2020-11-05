import { TOGGLE_SIDEBAR } from '../actions/sidebar';

export default function sidebarReducer(state, action) {
    console.log(action)
    console.log(state)
    switch (action.type) {
        case TOGGLE_SIDEBAR:
            return {
                ...state,
                visible: action.visible
            }
        default:
            return state;
    }
}