import React from 'react';
import {
    Form,
    Select
} from 'semantic-ui-react';

export default function WorkoutLog() {
    return (
        <Form.Group>
            <Form.Input 
                placeholder='Movement Name'
            />
            <Form.Field 
                control={Select}
                inline
                label='Select # Of Reps'
            />
            
        </Form.Group>
    )
}