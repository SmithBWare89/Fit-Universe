import React from 'react';
import {
    Form,
    Button,
    Container,
} from 'semantic-ui-react';
import { useDispatch } from 'react-redux';

export default function Reps(liftVarName, reducer, repOptions) {
    const {
        Group,
        Input,
        Select
    } = Form;
    const dispatch = useDispatch();
    return (
        <>
            <Group widths='equal' key={`${liftVarName}`}>
                <Select fluid label='Reps' placeholder='Select Reps' options={repOptions} />
                <Input fluid placeholder='Enter Weight' label='Weight' />
                <Button className="addSet" onClick={dispatch({type: `${reducer}`})}>+</Button>
                <Button>x</Button>
            </Group>
        </>
    )
}