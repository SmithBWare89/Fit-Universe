import React, { useEffect, useState } from 'react';
import {
    Form,
    Button,
    Header,
    Segment,
    Icon
} from 'semantic-ui-react';
import {useDispatch, useSelector} from 'react-redux';
import {repOptions} from '../utils/helpers/setsAndRepsOptions';
import {saveWorkout} from '../utils/helpers/idbPromise';
import {
    useMutation
} from '@apollo/react-hooks';

export default function StrengthForm({props, workoutState, setWorkOutState, setUsedReducer}) {
    const [ numberSets, setNumberSets ] = useState(0);
    const movementState = useSelector(state => state.strengthMovementsReducer);
    const dispatch = useDispatch();
    const liftVarName = props[0];
    const liftName = props[1].name;
    const [addStrength, {error}] = useMutation()
    
    const {
        Group,
        Input,
        Select
    } = Form;

    const setsArray = (() => {
        const emptyArray = []
        for(let i = 0; i < numberSets; i++) {
            emptyArray.push(' ');
        }
        return emptyArray;
    })();

    useEffect(() => {
        setNumberSets(movementState[props[0]].sets)
        saveWorkout(workoutState)
        
    }, [workoutState, movementState, dispatch]);

    return (
        <Segment style={{backgroundColor: 'var(--pewter)'}}>
            <Header as='h1' style={{marginBottom: '10px'}}>
                {liftName}
                <Header.Subheader style={{marginTop: '5px', marginBottom: '15px'}}>
                    <Segment.Inline>
                        <Button className="addSet" onClick={(e) => {
                            e.preventDefault();                   
                            dispatch({type: `${props[1].addSet}`})
                        }}>
                            <Icon 
                                name='add'
                                size='small'
                                aria-label='Add Button'
                            />
                            Add Set
                        </Button>
                        {
                            numberSets > 0
                                ? (
                                    <Button 
                                        className="deleteSet"
                                        onClick={(e) => {
                                        e.preventDefault();
                                        /* 
                                            The two const declarations will find the last div of rep/weight fields then grabs their name
                                        */
                                        const repField = Array.from(document.querySelectorAll(`.${liftVarName}-rep-${numberSets}`)).pop();
                                        const weightField = Array.from(document.querySelectorAll(`.${liftVarName}-weight-${numberSets}`)).pop();
                                        // Then we can also remove the property from the workout state as well
                                        if(workoutState.length === 1) {
                                            setWorkOutState({})
                                        }

                                        setWorkOutState(
                                            delete workoutState[weightField],
                                            delete workoutState[repField]
                                        )

                                        dispatch({type: `${props[1].deleteSet}`})
                                    }}>
                                        <Icon 
                                            name='delete'
                                            size='small'
                                            aria-label='Delete Button'
                                            labelPosition='right'
                                        />
                                        Delete Button
                                    </Button>
                                )
                                : (
                                    <Button className="deleteSet" onClick={(e) => {
                                        e.preventDefault();     
                                        setWorkOutState({})                      
                                        dispatch({type: `${props[1].reducer}`})
                                    }}>
                                        <Icon 
                                            name='delete'
                                            size='small'
                                            aria-label='Delete Button'
                                        />
                                        Delete Button
                                    </Button>
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
                            const weightName = `${liftVarName}-weight-${index}`;
                            return <>
                            <div>
                                <h2>Set {index}</h2>
                            </div>
                            <Group widths='equal' style={{marginBottom: '10px'}}>
                                <Select 
                                    label={'Number Of Reps'} 
                                    placeholder='Select Reps' 
                                    options={repOptions} 
                                    name={repName}
                                    className={`${liftVarName}-rep-${index}`}
                                    width={1}
                                    required
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
                                    placeholder='Enter Weight'
                                    label={{children: 'Weight'}}
                                    name={weightName}
                                    className={`${liftVarName}-weight`}
                                    key={`${weightName}-key`}
                                    width={1}
                                    required
                                    onChange={(e) => {
                                        if (isNaN(e.target.value) || e.target.value.length > 4 || e.target.value > 1000) {
                                            const input = e.target;
                                            input.classList.add('error');
                                            setTimeout(function() {
                                                input.classList.remove('error')
                                            }, 300)
                                        }
                                        setWorkOutState(
                                            {
                                                ...workoutState,
                                                [weightName]: e.target.value
                                            }
                                        )
                                    }}
                                />
                            </Group>
                            </>
                        })
                        
                    )
                    : ''
                 }
        </Segment>
    )
}