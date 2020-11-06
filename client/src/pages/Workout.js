import React, { useState, useEffect } from 'react';
import {
    Container,
    Form,
    Select
} from 'semantic-ui-react';

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

        console.log(workoutType)
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
                    ? (<h1>Strength!</h1>)
                    : workoutType === 'Cardio'
                        ? (<h1>Cardio!</h1>)
                        : (<h1>Select A Workout Type!</h1>)
            }
        </Container>
    )
}