import {
    FLAT_BENCH,
    DECLINE_BENCH,
    INCLINE_BENCH,
    ADD_FLAT_BENCH_SET,
    ADD_INCLINE_BENCH_SET,
    ADD_DECLINE_BENCH_SET,
    DELETE_DECLINE_BENCH_SET,
    DELETE_FLAT_BENCH_SET,
    DELETE_INCLINE_BENCH_SET,

} from '../actions/UpperBody/Push/strengthMovements';

export default function strengthMovementsReducer(state ={
    flatBench: {
        triggered: false,
        reducer: FLAT_BENCH,
        addSet: ADD_FLAT_BENCH_SET,
        deleteSet: DELETE_FLAT_BENCH_SET,
        name: 'Flat Bench Press',
        sets: 0
        },
    declineBench: {
        triggered: false,
        reducer: DECLINE_BENCH,
        name: 'Decline Bench Press',
        addSet: ADD_DECLINE_BENCH_SET,
        deleteSet: DELETE_DECLINE_BENCH_SET,
        sets: 0
        },
    inclineBench: {
        triggered: false,
        reducer: INCLINE_BENCH,
        name: 'Incline Bench Press',
        addSet: ADD_INCLINE_BENCH_SET,
        deleteSet: DELETE_INCLINE_BENCH_SET,
        sets: 0
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
                    addSet: state.flatBench.addSet,
                    deleteSet: state.flatBench.deleteSet,
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
                    addSet: state.flatBench.addSet,
                    deleteSet: state.flatBench.deleteSet,
                    sets: state.flatBench.sets+1
                }
            }
        case DELETE_FLAT_BENCH_SET:
            return {
                ...state,
                flatBench: {
                    name: state.flatBench.name,
                    triggered: state.flatBench.triggered,
                    reducer: state.flatBench.reducer,
                    addSet: state.flatBench.addSet,
                    deleteSet: state.flatBench.deleteSet,
                    sets: state.flatBench.sets-1
                }
            }
        case INCLINE_BENCH:
            return {
                ...state,
                inclineBench: {
                    name: state.inclineBench.name,
                    triggered: !state.inclineBench.triggered,
                    addSet: state.inclineBench.addSet,
                    reducer: state.inclineBench.reducer,
                    deleteSet: state.inclineBench.deleteSet,
                    sets: state.inclineBench.sets
                }
            }
        case ADD_INCLINE_BENCH_SET:
            return {
                ...state,
                inclineBench: {
                    name: state.inclineBench.name,
                    triggered: state.inclineBench.triggered,
                    reducer: state.inclineBench.reducer,
                    addSet: state.inclineBench.addSet,
                    deleteSet: state.inclineBench.deleteSet,
                    sets: state.inclineBench.sets+1
                }
            }
        case DELETE_INCLINE_BENCH_SET:
            return {
                ...state,
                inclineBench: {
                    name: state.inclineBench.name,
                    triggered: state.inclineBench.triggered,
                    reducer: state.inclineBench.reducer,
                    addSet: state.inclineBench.addSet,
                    deleteSet: state.inclineBench.deleteSet,
                    sets: state.inclineBench.sets-1
                }
            }
        case DECLINE_BENCH:
            return {
                ...state,
                declineBench: {
                    name: state.declineBench.name,
                    triggered: !state.declineBench.triggered,
                    reducer: state.declineBench.reducer,
                    addSet: state.declineBench.addSet,
                    deleteSet: state.declineBench.deleteSet,
                    sets: state.declineBench.sets
                }
            }
        case ADD_DECLINE_BENCH_SET:
            return {
                ...state,
                declineBench: {
                    name: state.declineBench.name,
                    triggered: state.declineBench.triggered,
                    reducer: state.declineBench.reducer,
                    addSet: state.declineBench.addSet,
                    deleteSet: state.declineBench.deleteSet,
                    sets: state.declineBench.sets+1                }
            }
        case DELETE_DECLINE_BENCH_SET:
            return {
                ...state,
                declineBench: {
                    name: state.declineBench.name,
                    triggered: state.declineBench.triggered,
                    reducer: state.declineBench.reducer,
                    addSet: state.declineBench.addSet,
                    deleteSet: state.declineBench.deleteSet,
                    sets: state.declineBench.sets-1
                }
            }
        default:
            return state
    }
}