import { state } from '../GlobalState';
const globalState = state;

export default function globalStateReducer(state = globalState, payload){
    switch (payload.type) {
        default: 
            return state;
    }
}