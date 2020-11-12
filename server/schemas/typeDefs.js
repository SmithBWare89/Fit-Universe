const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type StrengthWorkout {
        _id: ID
        strengthWorkoutId: ID
        movements: Array!
        createdAt: String
    }
    
    type Comments {
        commendId: ID
        commentBody: String
        username: String
        createdAt: String
    }

    type CardioWorkout {
        cardioWorkoutId: ID
        heartRate: Int
        createdAt: String
        time: Int
        distanceTraveled: Int
        pace: Int
        comments: [Comments]
    }

    type User {
        _id: ID
        username: String
        email: String
        posts: Array
        friends: Array
        strengthWorkouts: [StrengthWorkout]
        cardioWorkouts: [CardioWorkout]
    }

    type Auth {
        token: ID!
        user: User
    }

    type Mutation {
        addStrengthWorkout(movements: Array!)
    }
`