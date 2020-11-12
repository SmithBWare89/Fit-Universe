import React, {useState} from 'react';
import {
    Form,
    Button
} from 'semantic-ui-react';
import { useDispatch, useSelector } from 'react-redux';
import StrengthForm from './StrengthForm';
import {OPEN_MODAL} from '../utils/actions/errorModal';
import ErrorModal from './ErrorModal';



export default function StrengthLog() {
    const [ workoutState, setWorkOutState ] = useState({});
    const dispatch = useDispatch();
    const state = useSelector(state => state.strengthMovementsReducer);
    const movement = Object.entries(state).map(movement => movement);

    function handleSubmit(e) {
        const workoutStateLength = Object.keys(workoutState).length;
        if (workoutStateLength === 0) {
            dispatch({type: OPEN_MODAL, errorMessage: 'Please fill out all form elements!'})
        }
    }
   
    return (
        <div>
            <Form
                onSubmit={handleSubmit}
            >
            {
                movement.map(movement => {
                    const checked = movement[1].triggered
                    if (checked){
                        return  <StrengthForm 
                        props={movement}
                        key={movement[1].name} 
                        workoutState={workoutState} 
                        setWorkOutState={setWorkOutState}
                        />
                    }
                    return '';
                })
            }
            <Button style={{marginTop: '10px'}}>Submit</Button>
            <ErrorModal />
            </Form>
        </div>
    )
}