import React, { useState } from 'react';
import {
    Modal,
    Button,
    Icon,
    Card,
    TextArea,
    Container
} from 'semantic-ui-react';
import {
    useDispatch,
    useSelector
} from 'react-redux';
import { CLOSE_COMMENT_MODAL, SET_COMMENT_TEXT } from '../utils/actions/globalStateActions';
import {timeConverter} from '../utils/helpers/timeConverter';

export default function CommentModal({title}) {
    const state = useSelector(({globalStateReducer}) => globalStateReducer);
    const [characterCount, setCharacterCount] = useState(0);
    const { commentModalPostData } = state;
    const dispatch = useDispatch();

    const handleChange = (e) => {
        if (e.target.value.length < 281) {
            dispatch({type: SET_COMMENT_TEXT, commentText: e.target.value})
            console.log(state.commentText)
            setCharacterCount(e.target.value.length);
            console.log(characterCount)
        }
    };

    return (
        <Modal
            dimmer='blurring'
            size='small'
            open={state.commentModalOpen}
        >
            <Modal.Header>
                Add A New Comment!
            </Modal.Header>
            <Modal.Content>
                <Modal.Header style={{fontSize: '1.5rem'}}>
                    Original Post
                </Modal.Header>
                <Card raised className="comment-modal-card">
                    <Card.Content>
                        <Card.Header>
                            {title}
                        </Card.Header>
                        <Card.Meta>
                            Created {timeConverter(commentModalPostData.createdAt)}
                        </Card.Meta>
                        <Card.Description as='p' style={{fontSize: '1.05rem', wordWrap: 'break-word'}}>
                            {commentModalPostData.postText}
                        </Card.Description>
                    </Card.Content>
                </Card>
            </Modal.Content>
            <Modal.Content>
                <Modal.Header style={{fontSize: '1.5rem', marginBottom: '10px'}}>
                    Enter Your Comment
                </Modal.Header>
                <TextArea
                    as='textarea'
                    placeholder="New Post..."
                    value={state.commentText}
                    onChange={handleChange}
                    style={{marginBottom: '10px', border: '2px solid var(--munsell)', resize: 'none', width: '295px'}}
                    rows='5'
                />
            </Modal.Content>
            <Modal.Actions>
                <Button
                    basic
                    color='red'
                    onClick={() => dispatch({type: CLOSE_COMMENT_MODAL})}
                >
                    <Icon name='window close outline' />
                    Done
                </Button>
            </Modal.Actions>
        </Modal>
    )
}