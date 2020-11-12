import gql from 'graphql-tag';

export const ADD_STRENGTH = gql`mutation addStrength($movementData: String!) {
    addStrength(movementData: $movementData) {
        movementData
    	createdAt
    	strengthWorkoutId
    }
}`