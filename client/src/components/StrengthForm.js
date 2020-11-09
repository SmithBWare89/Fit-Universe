import React, { useEffect } from 'react';
import {
    Form,
    Button
} from 'semantic-ui-react';

export default function StrengthForm({props}) {
    const setsArray = new Array(props[1].sets)
    console.log(props)
    console.log(props[0])
    const liftVarName = props[0];
    const liftName = props[1].name;

    const {
        Group,
        Input,
        Select
    } = Form;
    
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

    return (
        <div>
            <h1>Hello!</h1>
                {               
                    props[1].triggered
                    ?
                        setsArray.map(item => {
                            return <Group widths='equal'>
                            <Select fluid label='Reps' placeholder='Select Reps' options={repOptions} name={`${liftVarName}-rep-1`}/>
                            <Input fluid placeholder='Enter Weight' label='Weight' name={`${liftVarName}-weight-1`}/>
                            <Button className="addSet">+</Button>
                            <Button className="deleteSet">x</Button>
                            </Group>
                        })
                    : console.log('Thing')
                 }
        </div>
    )
}