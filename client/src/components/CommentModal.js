import React, { useState } from 'react';
import {
    Modal,
    Button,
    Card,
    TextArea
} from 'semantic-ui-react';
import {
    useDispatch,
    useSelector
} from 'react-redux';
import {
    useMutation
} from '@apollo/react-hooks';
import { ADD_COMMENT } from '../utils/mutations';
import { CLOSE_COMMENT_MODAL, SET_COMMENT_TEXT } from '../utils/actions/globalStateActions';
import {timeConverter} from '../utils/helpers/timeConverter';

export default function CommentModal({title}) {
    const [ addComment ] = useMutation(ADD_COMMENT);
    const state = useSelector(({globalStateReducer}) => globalStateReducer);
    const [characterCount, setCharacterCount] = useState(0);
    const { commentModalPostData } = state;
    const dispatch = useDispatch();

    const handleChange = (e) => {
        if (e.target.value.length < 281) {
            dispatch({type: SET_COMMENT_TEXT, commentText: e.target.value})
            setCharacterCount(e.target.value.length);
        }
    };

    const handleCommentSubmit = async (e) => {
        e.preventDefault();
        await addComment({variables: {postId: state.commentModalPostData._id, commentBody: state.commentText}})
        await dispatch({type: CLOSE_COMMENT_MODAL})
    }

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
            <Modal.Header style={{marginLeft: '60px', fontSize: '1.5rem'}}>
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
            <Modal.Header style={{marginLeft: '60px', fontSize: '1.5rem', marginBottom: '10px'}}>
                Enter Your Comment
            </Modal.Header>
            <TextArea
                as='textarea'
                placeholder="New Post..."
                value={state.commentText}
                onChange={handleChange}
                style={{marginBottom: '10px', border: '2px solid var(--munsell)', resize: 'none', width: '295px'}}
                rows='8'
                maxLength='500'
            />
                <p
                    className={`m-0`}
                    style={{marginLeft: '60px', fontSize: '1.25rem'}}
                >
                    Character Count: {characterCount}/500
                </p>
        </Modal.Content>
        <Modal.Actions>
            <Button
                content='Close'
                icon='trash'
                labelPosition='left'
                className='comment-modal-button'
                onClick={() => dispatch({type: CLOSE_COMMENT_MODAL})}
            />
            <Button
                content='Submit'
                icon='plus'
                labelPosition='left'
                className='comment-modal-button'
                onClick={handleCommentSubmit}
            />
        </Modal.Actions>
    </Modal>
    )
}