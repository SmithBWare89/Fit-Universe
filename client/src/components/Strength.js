import React, {useState, useEffect} from 'react';
import {
    Form,
    Select,
    Button,
    Container,
    Label
} from 'semantic-ui-react';
import { useDispatch, useSelector } from 'react-redux';
import { ADD_MOVEMENT, DECLINE_BENCH, FLAT_BENCH, INCLINE_BENCH } from '../utils/actions/strengthWorkout';
import FlatBenchPress from './Movements/FlatBenchPress';
import SelectMovements from './SelectMovements';

export default function StrengthLog() {
    const [workoutState, setWorkoutState] = useState([]);

    const {
        Group,
        Field,
        Input,
        Checkbox,
        Select
    } = Form;
    const dispatch = useDispatch();
    const state = useSelector(state => state.strengthWorkoutReducer);

    const repOptions = [
        { key: 1, text: 1, value: 1},
        { key: 2, text: 2, value: 2},
        { key: 3, text: 3, value: 3},
        { key: 4, text: 4, value: 4},
        { key: 5, text: 5, value: 5},
        { key: 6, text: 6, value: 6},
        { key: 7, text: 7, value: 7},
        { key: 8, text: 8, value: 8},
        { key: 9, text: 9, value: 9},
        { key: 10, text: 10, value: 10},
        { key: 11, text: 11, value: 11},
        { key: 12, text: 12, value: 12},
        { key: 13, text: 13, value: 13},
        { key: 14, text: 14, value: 14},
        { key: 15, text: 15, value: 15},
        { key: 16, text: 16, value: 16},
        { key: 17, text: 17, value: 17},
        { key: 18, text: 18, value: 18},
        { key: 19, text: 19, value: 19},
        { key: 20, text: 20, value: 20},
    ]

    // function handleError(e) {
    //     const inputValue = e.target.value;
    //     if (isNaN(inputValue)) {
    //         return {
    //             content: 'Please enter a valid weight!',
    //             pointing: 'below'
    //         }
    //     }
    // }

    function workoutFormatter(liftName, liftVarName) {
        return (
            <>
            <Form className={liftVarName}>
                <h1>{liftName}</h1>
                <Group widths='equal' className={`${liftVarName}-1`}>
                    <Select fluid label='Reps' placeholder='Select Reps' options={repOptions} />
                    <Input fluid placeholder='Enter Weight' label='Weight' required />
                    <Button>+</Button>
                    <Button>x</Button>
                </Group>
                <Group widths='equal' className={`${liftVarName}-2`}>
                    <Select fluid label='Reps' placeholder='Select Reps' options={repOptions} />
                    <Input fluid placeholder='Enter Weight' label='Weight' required />
                    <Button>+</Button>
                    <Button>x</Button>
                </Group>
                <Group widths='equal' className={`${liftVarName}-3`}>
                    <Select fluid label='Reps' placeholder='Select Reps' options={repOptions} />
                    <Input fluid placeholder='Enter Weight' label='Weight' required />
                    <Button>+</Button>
                    <Button>x</Button>
                </Group>
            </Form>
            </>
        )
    }
    
    return (
        <Container>
            <SelectMovements />
            {
                Object.entries(state).map(item => {
                    const checked = item[1].triggered
                    const liftVarName = item[0];
                    const liftName = item[1].name
                    if (checked) {
                        return workoutFormatter(liftName, liftVarName)
                    }
                    return;
                })
            }
        </Container>
    )
}