import React, {useState} from 'react';
import {
    Button,
    Header,
    Modal,
    Form
} from 'semantic-ui-react';
import { useDispatch, useSelector } from 'react-redux';

export default function SelectMovements() {
    const {
        Group,
        Field,
    } = Form;

    const [open, setOpen] = useState(false);
    const dispatch = useDispatch();
    const state = useSelector(state => state.strengthMovementsReducer);

    return (
        <Modal
            closeIcon
            open={open}
            trigger={<Button>Select Your Movements</Button>}
            onClose={() => setOpen(false)}
            onOpen={() => setOpen(true)}
        >
            <Header>Select Your Movements</Header>
            <Modal.Content>
                <Group grouped>
                    {
                        Object.entries(state).map(movement => {
                            return <>
                                <Field 
                                    label={movement[1].name}
                                    name={movement[1].name}
                                    type='checkbox'
                                    control='input'
                                    onClick={() => dispatch({type: `${movement[1].reducer}`})}
                                />
                            </>
                        })
                    }
                </Group>
            </Modal.Content>
            <Modal.Actions>
                <Button color='red' onClick={() => setOpen(false)}>
                    Cancel
                </Button>
                <Button color='green' onClick={() => setOpen(false)}>
                    Done
                </Button>
            </Modal.Actions>
        </Modal>
    )
}