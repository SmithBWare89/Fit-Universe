import React, { useState } from 'react';
import {
    Container,
    Form,
    Select
} from 'semantic-ui-react';
import StrengthLog from '../components/Strength'
import SelectMovements from '../components/SelectMovements';

export default function Workout() {
    const [ workoutType, setWorkoutType ] = useState();
    const workoutTypeOptions = [
        { key: 'select', text: 'Select Workout Type', value: 'Select Workout Type', id: 'selectWorkout' , default: true},
        { key: 'strength', text: 'Strength', value: 'Strength', id: 'Strength' },
        { key: 'cardio', text: 'Cardio', value: 'Cardio', id: 'Cardio' }
    ];

    function handleChange(e) {
        if (e.target.id === 'selectWorkout') {
            setWorkoutType('selectWorkout')
        } else if (e.target.id === 'Strength') {
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
                    label={<h1>Select A Workout</h1>}
                    options={workoutTypeOptions}
                    placeholder='Select Workout Type'
                    id="form-control-workout-type"
                    onChange={handleChange}
                    width={5}
                    required
                />
            </Form>
            <div style={{marginTop: '10px'}}>
            </div>
            {
                workoutType === 'selectWorkout'
                    ? (<h1>Select A Workout Type!</h1>)
                    : workoutType === 'Strength'
                    ? (
                        <Container style={{marginTop: '10px'}}>
                            <SelectMovements />
                            <StrengthLog />
                        </Container>
                    )
                    : workoutType === 'Cardio'
                        ? (<h1>Cardio!</h1>)
                        : (<h1>Select A Workout Type!</h1>)
            }
        </Container>
    )
}