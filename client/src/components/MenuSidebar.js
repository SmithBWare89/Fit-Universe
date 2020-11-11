import React from 'react';
import {
  Grid,
  Menu,
  Sidebar,
} from 'semantic-ui-react';
import { TOGGLE_SIDEBAR } from '../utils/actions/sidebar';
import { useDispatch, useSelector } from 'react-redux';

export default function MenuSidebar() {
    const dispatch = useDispatch();
    const state = useSelector(state => state.sidebarReducer);
    const { sidebarMenu } = state
    
    return (
        <Grid
            columns={1}
        >
            <Grid.Column>
                <Sidebar
                    as={Menu}
                    animation='overlay'
                    direction='left'
                    dimmed='true'
                    visible={sidebarMenu.visible}
                    inverted
                    vertical
                    className="menuSidebar"
                >
                    <Menu.Item as='a' onClick={() => dispatch({type: TOGGLE_SIDEBAR})}>
                        <span className="menu-item">
                            <i className="fas menu-icon fa-user" key='user-profile-icon'/>
                             Profile
                        </span>
                    </Menu.Item>
                    <Menu.Item as='a' onClick={() => dispatch({type: TOGGLE_SIDEBAR})}>
                        <span className="menu-item">
                            <i className="fas menu-icon fa-cog" key='settings-cog'/>
                             Settings
                        </span>
                    </Menu.Item>
                </Sidebar>
            </Grid.Column>
        </Grid>
    )
}

