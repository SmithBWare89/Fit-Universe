import {
    FLAT_BENCH,
    DECLINE_BENCH,
    INCLINE_BENCH,
    ADD_FLAT_BENCH_SET,
    UPDATE_SET
} from '../actions/strengthMovements';

export default function strengthMovementsReducer(state ={
    flatBench: {
        triggered: false,
        reducer: FLAT_BENCH,
        addSet: ADD_FLAT_BENCH_SET,
        name: 'Flat Bench Press',
        sets: 4
        },
    declineBench: {
        triggered: false,
        reducer: DECLINE_BENCH,
        name: 'Decline Bench Press',
        sets: 3
        },
    inclineBench: {
        triggered: false,
        reducer: INCLINE_BENCH,
        name: 'Incline Bench Press',
        sets: 3
    }
}, payload) {
    switch(payload.type) {
        case FLAT_BENCH:
            return {
                ...state,
                flatBench: {
                    name: state.flatBench.name,
                    triggered: !state.flatBench.triggered,
                    reducer: state.flatBench.reducer,
                    sets: state.flatBench.sets
                }
            }
        case ADD_FLAT_BENCH_SET:
            return {
                ...state,
                flatBench: {
                    name: state.flatBench.name,
                    triggered: state.flatBench.triggered,
                    reducer: state.flatBench.reducer,
                    sets: state.flatBench.sets++
                }
            }
        case INCLINE_BENCH:
            return {
                ...state,
                inclineBench: {
                    name: state.inclineBench.name,
                    triggered: !state.inclineBench.triggered,
                    reducer: state.inclineBench.reducer,
                    sets: state.inclineBench.sets
                }
            }
        case DECLINE_BENCH:
            return {
                ...state,
                declineBench: {
                    name: state.declineBench.name,
                    triggered: !state.declineBench.triggered,
                    reducer: state.declineBench.reducer,
                    sets: state.declineBench.sets
                }
            }
        case UPDATE_SET:
            return {
                ...state,
                declineBench: {
                    name: state.declineBench.name,
                    triggered: !state.declineBench.triggered,
                    reducer: state.declineBench.reducer,
                    sets: state.declineBench.sets
                }
            }
        default:
            return state
    }
}