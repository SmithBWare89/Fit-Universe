import React, { useEffect, useState } from 'react';
import {
    Form,
    Button,
    Header,
    Segment
} from 'semantic-ui-react';
import {useDispatch} from 'react-redux';

export default function StrengthForm({props}) {
    const [numberSets, setNumberSets] = useState(0);
    const [workoutState, setWorkOutState ] = useState({});
    const dispatch = useDispatch();
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

    const setsArray = (() => {
        const emptyArray = []
        for(let i = 0; i < numberSets; i++) {
            emptyArray.push(' ');
        }
        return emptyArray;
    })();

    useEffect(() => {
        setNumberSets(props[1].sets);
    }, [props, dispatch]);

    return (
        <div>
            <Header as='h1'>
                {liftName}
                <Header.Subheader>
                    <Segment.Inline>
                        <Button className="addSet" onClick={() => dispatch({type: `${props[1].addSet}`})}>+</Button>
                        {
                            numberSets >= 1
                                ? (
                                    <Button className="deleteSet" onClick={(e) => {
                                        /* 
                                            The two const declarations will find the last div of rep/weight fields then grabs their name
                                        */
                                        const weightField = Array.from(document.querySelectorAll(`.${liftVarName}-weight`)).pop().lastChild.firstChild.getAttribute('name');
                                        const repField = Array.from(document.querySelectorAll(`.${liftVarName}-rep`)).pop().lastChild.getAttribute('name');
                                        // Then we can also remove the property from the workout state as well


                                        setWorkOutState(
                                            delete workoutState[weightField],
                                            delete workoutState[repField]
                                        )
                                        dispatch({type: `${props[1].deleteSet}`})
                                    }}>x</Button>
                                )
                                : (
                                    <Button className="deleteSet" onClick={(e) => {                                    
                                        dispatch({type: `${props[1].reducer}`})
                                    }}>x</Button>
                                )
                        }
                    </Segment.Inline>
                </Header.Subheader>
            </Header>
                {             
                    numberSets
                    ? (
                        setsArray.map((item, index) => {
                            const repName = `${liftVarName}-rep-${index}`;
                            const weightName = `${liftVarName}-weight-${index}`
                            if (!workoutState.hasOwnProperty(repName)) {
                                setWorkOutState(
                                    {
                                        ...workoutState,
                                        [repName]: '',
                                        [weightName]: ''
                                    }
                                )
                            }
                            
                            return <>
                            <Group widths='equal'>
                                <Select 
                                    fluid 
                                    label='Reps' 
                                    placeholder='Select Reps' 
                                    options={repOptions} 
                                    name={repName}
                                    value={workoutState[repName]}
                                    className={`${liftVarName}-rep`}
                                    key={`${repName}-key`}
                                    onChange={(e) => {
                                        setWorkOutState(
                                            {
                                                ...workoutState,
                                                [repName]: e.target.firstChild.textContent
                                            }
                                        )
                                    }}
                                />
                                <Input 
                                    fluid 
                                    placeholder='Enter Weight' 
                                    label='Weight' 
                                    name={weightName}
                                    value={workoutState[weightName]}
                                    className={`${liftVarName}-weight`}
                                    key={`${weightName}-key`}
                                    onChange={(e) => {
                                        setWorkOutState(
                                            {
                                                ...workoutState,
                                                [weightName]: e.target.value
                                            }
                                        )
                                        console.log(workoutState[weightName])
                                    }}
                                />
                            </Group>
                            </>
                        })
                        
                    )
                    : ''
                 }
        </div>
    )
}