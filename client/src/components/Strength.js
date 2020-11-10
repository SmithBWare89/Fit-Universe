import React, {useEffect, useState} from 'react';
import {
    Form,
    Button,
} from 'semantic-ui-react';
import { useSelector } from 'react-redux';
import StrengthForm from './StrengthForm';

export default function StrengthLog() {
    const [ workoutState, setWorkOutState ] = useState({});
    const {
    } = Form;
    const state = useSelector(state => state.strengthMovementsReducer);
    const movement = Object.entries(state).map(movement => movement);

    useEffect(() => {
        console.log(workoutState)
    }, [workoutState])
   
    return (
        <div>
            <Form>
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
        </div>
    )
}