import React, { useEffect, useState } from 'react';
import {
    Form,
    Button,
    Header,
    Segment,
    Icon
} from 'semantic-ui-react';
import {useDispatch} from 'react-redux';
import {repOptions, weightOptions} from '../utils/helpers/setsAndRepsOptions';

export default function StrengthForm({props, workoutState, setWorkOutState}) {
    const [ numberSets, setNumberSets] = useState(0);
    const dispatch = useDispatch();
    const liftVarName = props[0];
    const liftName = props[1].name;
    
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
        setNumberSets(props[1].sets);
    }, [props, dispatch]);

    return (
        <Segment style={{backgroundColor: 'var(--pewter)'}}>
            <Header as='h1' style={{marginBottom: '10px'}}>
                {liftName}
                <Header.Subheader style={{marginTop: '5px', marginBottom: '15px'}}>
                    <Segment.Inline>
                        <Button 
                            className="addSet" 
                            onClick={() => dispatch({type: `${props[1].addSet}`})}
                        >
                            <Icon 
                                name='plus'
                                size='small'
                                aria-label='Plus Sign'
                                labelPosition='right'
                            />
                            Add Set
                        </Button>
                        {
                            numberSets >= 1
                                ? (
                                    <Button 
                                        className="deleteSet"
                                        onClick={(e) => {
                                        /* 
                                            The two const declarations will find the last div of rep/weight fields then grabs their name
                                        */
                                        const repField = Array.from(document.querySelectorAll(`.${liftVarName}-rep`)).pop().lastChild.getAttribute('name');
                                        const weightField = Array.from(document.querySelectorAll(`.${liftVarName}-weight`)).pop().lastChild.getAttribute('name');
                                        // Then we can also remove the property from the workout state as well
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
                                        dispatch({type: `${props[1].reducer}`})
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
                            <div>
                                <h2>Set {index}</h2>
                            </div>
                            <Group widths='equal' style={{marginBottom: '10px'}}>
                                <Form.Select 
                                    label={'Number Of Reps'} 
                                    placeholder='Select Reps' 
                                    options={repOptions} 
                                    name={repName}
                                    className={`${liftVarName}-rep`}
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