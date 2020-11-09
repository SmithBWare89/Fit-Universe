import React, {useEffect, useState} from 'react';
import {
    Form,
    Button,
    Container,
} from 'semantic-ui-react';
import { useDispatch, useSelector } from 'react-redux';
import SelectMovements from './SelectMovements';

export default function StrengthLog() {
    const {
        Group,
        Input,
        Select
    } = Form;
    const dispatch = useDispatch();
    const state = useSelector(state => state.strengthWorkoutReducer);

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

    // function addSet(e, liftVarName) {
    //     e.preventDefault();
    //     const formEl = document.querySelector(`#${liftVarName}`);
    //     const divContainer = document.createElement('div');
    //     divContainer.classList = 'equal width fields';
    //     const repsHTML = `<div class="field"><label>Reps</label><div role="listbox" aria-expanded="false" class="ui fluid selection dropdown" tabindex="0"><div aria-atomic="true" aria-live="polite" role="alert" class="divider default text">Select Reps</div><i aria-hidden="true" class="dropdown icon"></i><div class="menu transition"><div role="option" aria-checked="false" aria-selected="true" class="selected item" style="pointer-events: all;"><span class="text">1</span></div><div role="option" aria-checked="false" aria-selected="false" class="item" style="pointer-events: all;"><span class="text">2</span></div><div role="option" aria-checked="false" aria-selected="false" class="item" style="pointer-events: all;"><span class="text">3</span></div><div role="option" aria-checked="false" aria-selected="false" class="item" style="pointer-events: all;"><span class="text">4</span></div><div role="option" aria-checked="false" aria-selected="false" class="item" style="pointer-events: all;"><span class="text">5</span></div><div role="option" aria-checked="false" aria-selected="false" class="item" style="pointer-events: all;"><span class="text">6</span></div><div role="option" aria-checked="false" aria-selected="false" class="item" style="pointer-events: all;"><span class="text">7</span></div><div role="option" aria-checked="false" aria-selected="false" class="item" style="pointer-events: all;"><span class="text">8</span></div><div role="option" aria-checked="false" aria-selected="false" class="item" style="pointer-events: all;"><span class="text">9</span></div><div role="option" aria-checked="false" aria-selected="false" class="item" style="pointer-events: all;"><span class="text">10</span></div><div role="option" aria-checked="false" aria-selected="false" class="item" style="pointer-events: all;"><span class="text">11</span></div><div role="option" aria-checked="false" aria-selected="false" class="item" style="pointer-events: all;"><span class="text">12</span></div><div role="option" aria-checked="false" aria-selected="false" class="item" style="pointer-events: all;"><span class="text">13</span></div><div role="option" aria-checked="false" aria-selected="false" class="item" style="pointer-events: all;"><span class="text">14</span></div><div role="option" aria-checked="false" aria-selected="false" class="item" style="pointer-events: all;"><span class="text">15</span></div><div role="option" aria-checked="false" aria-selected="false" class="item" style="pointer-events: all;"><span class="text">16</span></div><div role="option" aria-checked="false" aria-selected="false" class="item" style="pointer-events: all;"><span class="text">17</span></div><div role="option" aria-checked="false" aria-selected="false" class="item" style="pointer-events: all;"><span class="text">18</span></div><div role="option" aria-checked="false" aria-selected="false" class="item" style="pointer-events: all;"><span class="text">19</span></div><div role="option" aria-checked="false" aria-selected="false" class="item" style="pointer-events: all;"><span class="text">20</span></div></div></div></div>`;
    //     const weightHTML = `<div class="field"><label>Weight</label><div class="ui fluid input"><input placeholder="Enter Weight" type="text"></div></div>`
    //     const addSetButton = `<button class="ui button addSet">+</button>`
    //     const deleteButton = `<button class="ui button deleteSet">x</button>`
    //     divContainer.innerHTML = `${repsHTML}${weightHTML}${addSetButton}${deleteButton}`;
    // }

    function workoutFormatter(movement) {
        const liftVarName = movement[0]
        const liftName = movement[1].name
        const reducer = movement[1].reducer
        const sets = movement[1].sets
        return (
            <>
            <Form className={liftVarName} key={liftVarName} id={liftVarName}>
                <h1>{liftName}</h1>
                <Group widths='equal'>
                    <Select fluid label='Reps' placeholder='Select Reps' options={repOptions} name={`${liftVarName}-rep-1`}/>
                    <Input fluid placeholder='Enter Weight' label='Weight' name={`${liftVarName}-weight-1`}/>
                    <Button className="addSet">+</Button>
                    <Button className="deleteSet">x</Button>
                </Group>
                <Group widths='equal'>
                    <Select fluid label='Reps' placeholder='Select Reps' options={repOptions} name={`${liftVarName}-rep-2`}/>
                    <Input fluid placeholder='Enter Weight' label='Weight' name={`${liftVarName}-weight-1`}/>
                    <Button className="addSet">+</Button>
                    <Button className="deleteSet">x</Button>
                </Group>
                <Group widths='equal'>
                    <Select fluid label='Reps' placeholder='Select Reps' options={repOptions} name={`${liftVarName}-rep-3`}/>
                    <Input fluid placeholder='Enter Weight' label='Weight' name={`${liftVarName}-weight-1`}/>
                    <Button className="addSet">+</Button>
                    <Button className="deleteSet">x</Button>
                </Group>
            </Form>
        <Button id={`${liftVarName}Button`} onClick={() =>dispatch({type: `${reducer}`})}>Remove Movement</Button>
            </>
        )
    }

   
    return (
        <Container id="strengthContainer">
            <SelectMovements />
            <Form>
            {
                Object.entries(state).map(movement => {
                    const checked = movement[1].triggered
                    if (checked) {
                        return workoutFormatter(movement);
                    }
                })
            }
            <Button content='submit'>Submit</Button>
            </Form>
        </Container>
    )
}