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
            key='select-modal'
        >
            <Header>Select Your Movements</Header>
            <Modal.Content key='select-modal-content'>
                <Group grouped key='select-modal-group'>
                    {
                        Object.entries(state).map((movement, index) => {
                            return <>
                                <Field 
                                    label={movement[1].name}
                                    name={movement[1].name}
                                    type='checkbox'
                                    control='input'
                                    key={`${movement[0]}-selection-${index}`}
                                    onClick={() => dispatch({type: `${movement[1].reducer}`})}
                                />
                            </>
                        })
                    }
                </Group>
            </Modal.Content>
            <Modal.Actions key='select-modal-actions'>
                <Button color='green' onClick={() => setOpen(!open)} key='modal-select-done'>
                    Done
                </Button>
            </Modal.Actions>
        </Modal>
    )
}