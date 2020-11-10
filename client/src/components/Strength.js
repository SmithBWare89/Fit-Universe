import React, {useEffect, useState} from 'react';
import {
    Form,
    Button,
    Modal
} from 'semantic-ui-react';
import { useDispatch, useSelector } from 'react-redux';
import StrengthForm from './StrengthForm';
import {OPEN_MODAL} from '../utils/actions/errorModal';
import ErrorModal from './ErrorModal'

export default function StrengthLog() {
    const [ workoutState, setWorkOutState ] = useState({});
    const dispatch = useDispatch();
    const {
    } = Form;
    const state = useSelector(state => state.strengthMovementsReducer);
    const errorModalState = useSelector(state => state.errorModalReducer);
    const movement = Object.entries(state).map(movement => movement);

    function handleSubmit() {
        console.log(Object.keys(workoutState).length)
        if(Object.keys(workoutState).length = 0){
            dispatch(
                {
                    type: OPEN_MODAL,
                    errorMessage: 'Please fill out all forms!'
                }
            )
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
                        return  <StrengthForm props={movement} workoutState={workoutState} setWorkOutState={setWorkOutState}/>
                    }
                })
            }
            <Button content='submit' style={{marginTop: '10px'}}>Submit</Button>
            </Form>
            {
                errorModalState
                    ? <ErrorModal />
                    : ''
            }
        </div>
    )
}