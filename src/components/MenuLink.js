import React from 'react';
import {Calculate, Church, Note, People} from '@mui/icons-material';
import {Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText} from '@mui/material';

export default function MenuLink(props) {
    const tabList = [
        {
            name: 'Bảng Tính',
            icon: <Calculate/>,
            link: '/'
        },
        {
            name: 'Điểm Danh',
            icon: <People/>,
            link: '/members'
        },
        {
            name: 'Nhà Thờ',
            icon: <Church/>,
            link: '/churches-config'
        },
        {
            name: 'Report',
            icon: <Note/>,
            link: '/report'
        }
    ]

    return(
        <React.Fragment>
            <Drawer
                open={props.opened}
                onClose={props.close()}
                transitionDuration={16}
                elevation={16}
                sx={{
                    padding: 50
                }}
            >
                <List>
                    {
                        tabList.map((item, index) => (
                            <ListItem key={index} disablePadding>
                                <ListItemButton>
                                    <ListItemIcon>{item.icon}</ListItemIcon>
                                    <ListItemText primary={item.name}/>
                                </ListItemButton>
                            </ListItem>
                        ))
                    }
                </List>
            </Drawer>
        </React.Fragment>
    );
};