import {
    UPDATE_WORKOUT
} from '../actions/strengthMovements';

export default function currentWorkout(state = {}, payload) {
    switch(payload.type) {
        case UPDATE_WORKOUT:
            return 'Hello';
        default:
            return state
    }
}