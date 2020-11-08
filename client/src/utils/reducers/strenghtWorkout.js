import { Form } from 'semantic-ui-react';
import {
    FLAT_BENCH,
    DECLINE_BENCH,
    INCLINE_BENCH
} from '../actions/strengthWorkout';

export default function strengthWorkoutReducer(state ={
    flatBench: {
        triggered: false,
        name: 'Flat Bench Press',
        reducer: FLAT_BENCH
    },
    declineBench: {
        triggered: false,
        name: 'Decline Bench Press',
        reducer: DECLINE_BENCH
    },
    inclineBench: {
        triggered: false,
        name: 'Incline Bench Press',
        reducer: INCLINE_BENCH
    }
}, payload) {
    switch(payload.type) {
        case FLAT_BENCH:
            return {
                ...state,
                flatBench: {
                    name: 'Flat Bench Press',
                    triggered: !state.flatBench.triggered,
                }
            }
        case INCLINE_BENCH:
            return {
                ...state,
                inclineBench: {
                    name: 'Incline Bench Press',
                    triggered: !state.inclineBench.triggered,
                }
            }
        case DECLINE_BENCH:
            return {
                ...state,
                declineBench: {
                    name: 'Decline Bench Press',
                    triggered: !state.declineBench.triggered,
                }
            }
        default:
            return state
    }
}