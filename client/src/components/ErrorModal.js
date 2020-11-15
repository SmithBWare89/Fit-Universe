import React from 'react';
import {
    Modal,
    Header,
    Icon,
    Button
} from 'semantic-ui-react';
import { useDispatch, useSelector} from 'react-redux';
import { CLOSE_MODAL } from '../utils/actions/globalStateActions';

export default function ErrorModal(){
    const state = useSelector(state => state.globalStateReducer);
    const dispatch = useDispatch();
    
    return (
        <Modal
            basic
            dimmer='blurring'
            size = 'small'
            open={state.errorModalOpen}
        >
            <Header icon style={{textAlign: 'center'}}>
                <Icon name='bug' size='large'/>
                An Error Has Occurred!
                <p>
                    {state.errorMessage}
                </p>
            </Header>
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