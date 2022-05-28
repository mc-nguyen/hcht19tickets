import React from 'react';
import {Calculate, Church, Note, People} from '@mui/icons-material';
import {Drawer, Link, List, ListItem, ListItemButton, ListItemIcon, ListItemText} from '@mui/material';

export default function MenuLink(props) {
    const list = [
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
        },
    ]

    return(
        <Drawer
            anchor={'left'}
            open={true}
            onClose={props.close}
        >
            <List>
                {
                    list.map((item, index) => (
                        <ListItem key={item.name} disablePadding>
                            <Link href={item.link}>
                                <ListItemButton>
                                    <ListItemIcon>{item.icon}</ListItemIcon>
                                    <ListItemText primary={item.name}/>
                                </ListItemButton>
                            </Link>
                        </ListItem>
                    ))
                }
            </List>
        </Drawer>
    );
};