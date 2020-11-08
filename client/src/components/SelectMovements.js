import React, {useState} from 'react';
import {
    Button,
    Header,
    Modal,
    Form
} from 'semantic-ui-react';
import { useDispatch, useSelector } from 'react-redux';
import { ADD_MOVEMENT, DECLINE_BENCH, FLAT_BENCH, INCLINE_BENCH } from '../utils/actions/strengthWorkout';

export default function SelectMovements() {
    const {
        Group,
        Field,
        Input,
        Checkbox,
        Select
    } = Form;
    const [open, setOpen] = useState(false);
    const dispatch = useDispatch();
    const state = useSelector(state => state.strengthWorkoutReducer);

    return (
        <Modal
            closeIcon
            open={open}
            trigger={<Button>Select Your Movements</Button>}
            onClose={() => setOpen(false)}
            onOpen={() => setOpen(true)}
        >
            <Header>Select Your Movements</Header>
            <Modal.Content>
                <Group grouped>
                    {
                        Object.entries(state).map(movement => {
                            console.log(movement)
                            return <Field 
                                label={movement[1].name}
                                name={movement[1].name}
                                type='checkbox'
                                control='input'
                                onClick={() => dispatch({type: movement[1].reducer})}
                            />
                        })
                    }
                    {/* <Field 
                        label='Flat Bench Press' 
                        name='Flat Bench Press' 
                        type='checkbox' 
                        control='input' 
                        onClick={() => dispatch({type: FLAT_BENCH})}
                    />
                    <Field 
                        label='Incline Bench Press' 
                        name='Incline Bench Press' 
                        type='checkbox' 
                        control='input' 
                        onClick={() => dispatch({type: INCLINE_BENCH})}
                    />
                    <Field 
                        label='Decline Bench Press' 
                        name='Decline Bench Press' 
                        type='checkbox' 
                        control='input' 
                        onClick={() => dispatch({type: DECLINE_BENCH})}
                    /> */}
                </Group>
            </Modal.Content>
            <Modal.Actions>
                <Button color='red' onClick={() => setOpen(false)}>
                    No
                </Button>
                <Button color='green' onClick={() => setOpen(false)}>
                    Yes
                </Button>
            </Modal.Actions>
        </Modal>
    )
}