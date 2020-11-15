import {
    SET_POSTS
} from '../actions/globalStateActions';
import { state } from '../GlobalState';
const globalState = state;

export default function globalStateReducer(state = globalState, payload){
    switch (payload.type) {
        case SET_POSTS:
            console.log(state)
            console.log(payload)
            break;
        default: 
            return state;
    }
}