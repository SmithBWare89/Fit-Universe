import React, { useState, useEffect } from 'react';
import {
    Container,
    Form,
    Select
} from 'semantic-ui-react';
import { useSelector } from 'react-redux'
import StrengthLog from '../components/Strength'

export default function Workout() {
    const [ workoutType, setWorkoutType ] = useState();
    const workoutTypeOptions = [
        { key: 'select', text: 'Select Workout Type', value: 'Select Workout Type', readOnly: true },
        { key: 'strength', text: 'Strength', value: 'Strength', id: 'Strength' },
        { key: 'cardio', text: 'Cardio', value: 'Cardio', id: 'Cardio' }
    ];

    function handleChange(e) {
        if (e.target.id === 'Strength') {
            setWorkoutType('Strength')
        } else if(e.target.id === 'Cardio') {
            setWorkoutType('Cardio')
        }
    }

    return (
        <Container>
            <Form id="Form">
                <Form.Field 
                    control={Select}
                    label='Select Workout Type'
                    options={workoutTypeOptions}
                    placeholder='Select Workout Type'
                    id="form-control-workout-type"
                    onChange={handleChange}
                />
            </Form>
            {
                workoutType === 'Strength'
                    ? (<StrengthLog />)
                    : workoutType === 'Cardio'
                        ? (<h1>Cardio!</h1>)
                        : (<h1>Select A Workout Type!</h1>)
            }
        </Container>
    )
}