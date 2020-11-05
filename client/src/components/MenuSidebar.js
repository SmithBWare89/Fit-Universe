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

export default function MenuSidebar({visible}) {
    return (
        <Grid
            columns={1}
        >
            <Grid.Column>
                <Sidebar.Pushable
                    as={Menu}
                    animation='overlay'
                    direction='left'
                    icon='labeled'
                    // dimmed={true}
                    visible={visible}
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

