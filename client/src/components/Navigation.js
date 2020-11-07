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
            <Menu.Item
                as='a'
                onClick={toggleSidebar}
                className="nav-icon"
            >
                <i class="far fa-user-circle fa-3x"></i>
            </Menu.Item>
            <Menu.Item as='a' href='/'> 
                <i class="fas fa-home fa-3x"></i>
            </Menu.Item>
            <Menu.Item as='a' href='/workouts'>
                <i class="fas fa-dumbbell fa-3x"></i>
            </Menu.Item>
            <Menu.Item as='a' href='/blogs'>
                <i class="fas fa-comment-dots fa-3x"></i>
            </Menu.Item>
            <Menu.Item as='a' href='/music'>
                <i class="fas fa-music fa-3x"></i>
            </Menu.Item>
            <Menu.Item as='a' href='/shop'>
                <i class="fas fa-shopping-cart fa-3x"></i>
            </Menu.Item>
            <Menu.Menu position='right'>
                <Menu.Item as='a'>
                    <i class="fas fa-sign-out-alt fa-3x" />
                </Menu.Item>
            </Menu.Menu>
        </Menu>
    )
}