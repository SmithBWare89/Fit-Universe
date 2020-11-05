import React from 'react';
import {
  Button,
  Checkbox,
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

export default function MenuSidebar({visible}) {
    console.log(visible)
    const dispatch = useDispatch();
    const state = useSelector(state => state);
    return (
        <Grid
            columns={1}
        >
            <Grid.Column>
                <Sidebar.Pushable
                    as={Menu}
                    animation='slide out'
                    icon='labeled'
                    dimmed={true}
                    visible={visible}
                    onHide={() => dispatch({type: TOGGLE_SIDEBAR})}
                    inverted
                    vertical
                    width='thin'
                >
                    <Menu.Item as='a'>
                        Profile
                    </Menu.Item>
                    <Menu.Item as='a'>
                        Coaching
                    </Menu.Item>
                    <Menu.Item as='a'>
                        Settings
                    </Menu.Item>
                    <Menu.Item as='a'>
                        Logout
                    </Menu.Item>
                </Sidebar.Pushable>
            </Grid.Column>
        </Grid>
    )
}

