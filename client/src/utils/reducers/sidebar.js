import { TOGGLE_SIDEBAR } from '../actions/sidebar';

export default function sidebarReducer(state, payload) {
    console.log(payload)
    console.log(state)
    switch (payload.type) {
        case TOGGLE_SIDEBAR:
            return {
                ...state,
                visible: !state.visible
            }
        default:
            return state;
    }
}