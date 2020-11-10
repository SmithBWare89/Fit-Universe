import React from 'react';
import {
    Modal,
    Header,
    Icon,
    Button
} from 'semantic-ui-react';
import { useDispatch, useSelector} from 'react-redux';
import { CLOSE_MODAL } from '../utils/actions/errorModal';

export default function ErrorModal(){
    const state = useSelector(state => state.errorModalReducer);
    const dispatch = useDispatch();
    
    return (
        <Modal
            basic
            dimmer='blurring'
            open={state.open}
        >
            <Header icon>
                <Icon name='bug' size='large'/>
                An Error Has Occurred!
            </Header>
            <Modal.Content>
                <p>
                    {state.errorMessage}
                </p>
            </Modal.Content>
            <Modal.Actions>
                <Button
                    basic
                    color='red'
                    inverted
                    onClick={() => dispatch({type: CLOSE_MODAL})}
                >
                    <Icon name='window close outline' />
                    Done
                </Button>
            </Modal.Actions>
        </Modal>
    )
}