import React from 'react';
import {
    Container,
    Menu
} from 'semantic-ui-react';
import { TOGGLE_SIDEBAR } from '../utils/actions/sidebar';
import { useDispatch, useSelector } from 'react-redux';

export default function Navigation() {
    const dispatch = useDispatch();
    const state = useSelector(state => state);

    function toggleSidebar() {
        dispatch({type: TOGGLE_SIDEBAR});
    }
    
    return (
        <Menu 
            secondary
        >
            <Menu.Menu >
                <Menu.Item
                    as='a'
                    onClick={toggleSidebar}
                    className="nav-icon"
                >
                    <i className="far fa-user-circle fa-3x"></i>
                </Menu.Item>
                <Menu.Item as='a' href='/'> 
                    <i className="fas fa-home fa-3x"></i>
                </Menu.Item>
                <Menu.Item as='a' href='/workouts'>
                    <i className="fas fa-dumbbell fa-3x"></i>
                </Menu.Item>
                <Menu.Item as='a' href='/blogs'>
                    <i className="fas fa-comment-dots fa-3x"></i>
                </Menu.Item>
                <Menu.Item as='a' href='/music'>
                    <i className="fas fa-music fa-3x"></i>
                </Menu.Item>
                <Menu.Item as='a' href='/shop'>
                    <i className="fas fa-shopping-cart fa-3x"></i>
                </Menu.Item>
            </Menu.Menu>
            <Menu.Menu position='right'>
                <Menu.Item as='a'>
                    <i className="fas fa-sign-out-alt fa-3x" />
                </Menu.Item>
            </Menu.Menu>
        </Menu>
    )
}