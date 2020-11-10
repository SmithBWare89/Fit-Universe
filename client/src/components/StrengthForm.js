import React, { useEffect, useState } from 'react';
import {
    Form,
    Button,
    Header,
    Segment
} from 'semantic-ui-react';
import {useDispatch} from 'react-redux';
import {repOptions, weightOptions} from '../utils/helpers/setsAndRepsOptions';

export default function StrengthForm({props, workoutState, setWorkOutState}) {
    const [ numberSets, setNumberSets] = useState(0);
    console.log(workoutState)

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
                                        const repField = Array.from(document.querySelectorAll(`.${liftVarName}-rep`)).pop().lastChild.getAttribute('name');
                                        const weightField = Array.from(document.querySelectorAll(`.${liftVarName}-weight`)).pop().lastChild.getAttribute('name');
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
                            <Group widths='equal' inline>
                                <>
                                <Select 
                                    label={{children: 'Number Of Reps'}} 
                                    placeholder='Select Reps' 
                                    options={repOptions} 
                                    name={repName}
                                    className={`${liftVarName}-rep`}
                                    width={5}
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
                                </>
                                <Select 
                                    placeholder='Enter Weight' 
                                    label={{children: 'Weight'}}  
                                    name={weightName}
                                    options={weightOptions}
                                    className={`${liftVarName}-weight`}
                                    key={`${weightName}-key`}
                                    width={5}
                                    required
                                    onChange={(e) => {
                                        setWorkOutState(
                                            {
                                                ...workoutState,
                                                [weightName]: e.target.firstChild.textContent
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
        </div>
    )
}