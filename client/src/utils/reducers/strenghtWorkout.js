import {
    FLAT_BENCH,
    DECLINE_BENCH,
    INCLINE_BENCH
} from '../actions/strengthWorkout';

export default function strengthWorkoutReducer(state ={
    flatBench: {
        triggered: false,
        reducer: 'FLAT_BENCH',
        name: 'Flat Bench Press',
    },
    declineBench: {
        triggered: false,
        reducer: 'DECLINE_BENCH',
        name: 'Decline Bench Press',
    },
    inclineBench: {
        triggered: false,
        reducer: 'INCLINE_BENCH',
        name: 'Incline Bench Press',
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