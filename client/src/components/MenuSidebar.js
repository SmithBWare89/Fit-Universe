import React from 'react';
import {
  Button,
  Grid,
  Header,
  Icon,
  Image,
  Menu,
  Segment,
  Sidebar,
} from 'semantic-ui-react';
import { TOGGLE_SIDEBAR } from '../utils/actions/sidebar';
import { useDispatch, useSelector } from 'react-redux';

export default function MenuSidebar() {
    const dispatch = useDispatch();
    const state = useSelector(state => state);
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
                    // width='thin'
                    className="menuSidebar"
                >
                    <Menu.Item as='a' onClick={() => dispatch({type: TOGGLE_SIDEBAR})}>
                        <span class="menu-item">
                            <i class="fas menu-icon fa-user" />
                             Profile
                        </span>
                    </Menu.Item>
                    <Menu.Item as='a' onClick={() => dispatch({type: TOGGLE_SIDEBAR})}>
                        <span class="menu-item">
                            <i class="fas menu-icon fa-pager" />
                             Coaching
                        </span>
                    </Menu.Item>
                    <Menu.Item as='a' onClick={() => dispatch({type: TOGGLE_SIDEBAR})}>
                        <span class="menu-item">
                            <i class="fas menu-icon fa-cog" />
                             Settings
                        </span>
                    </Menu.Item>
                    <Menu.Item as='a' onClick={() => dispatch({type: TOGGLE_SIDEBAR})}>
                        <span class="menu-item">
                            <i class="fas menu-icon fa-sign-out-alt" />
                             Logout
                        </span>
                    </Menu.Item>
                </Sidebar>
            </Grid.Column>
        </Grid>
    )
}

