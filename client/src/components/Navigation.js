import React from 'react';
import {
    Menu
} from 'semantic-ui-react';
import { TOGGLE_SIDEBAR } from '../utils/actions/globalStateActions';
import { useDispatch } from 'react-redux';
import Auth from '../utils/auth'

export default function Navigation() {
    const dispatch = useDispatch();
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
                <Menu.Item as='a' href='/dashboard'> 
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
                <Menu.Item as='a' href='/' onClick={() => Auth.logout()}>
                    <i className="fas fa-sign-out-alt fa-3x" />
                </Menu.Item>
            </Menu.Menu>
        </Menu>
    )
}