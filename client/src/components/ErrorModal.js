import React from 'react';
import {
    Modal,
    Header,
    Icon
} from 'semantic-ui-react';
import {useSelector} from 'react-redux';

export default function ErrorModal(){
    const state = useSelector(state => state.errorModalReducer);
    
    return (
        <Modal
            basic
            dimmer='blurring'
            onClose={state}
            onOpen={state}
        >
            <Header icon>
                <Icon name='bug' size='large'/>
                An Error Has Occurred!
            </Header>
            <Modal.Content>
                {errorMessage}
            </Modal.Content>
        </Modal>
    )
}