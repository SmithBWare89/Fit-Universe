import gql from 'graphql-tag';

export const ADD_STRENGTH = gql`mutation addStrength($workout: Array!, $id: String!) {
    addStrength(workout: $workout, id: $id) {
        user
    }
}`