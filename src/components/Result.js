import React from 'react';
import {
    Avatar,
    Backdrop,
    List,
    ListItem,
    ListItemAvatar,
    ListItemIcon,
    ListItemText,
} from "@mui/material";
import {deepOrange} from "@mui/material/colors";
import {
    Church,
    LocalActivity,
    Paid,
    VolunteerActivism
} from "@mui/icons-material";

class Result extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <Backdrop
                sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={true}
                onClick={this.props.closeResult}
            >
                <List sx={{bgcolor: deepOrange[300]}}>
                    <ListItem>
                        <ListItemAvatar>
                            <Avatar>
                                <Church />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary="Tên Nhà Thờ, ngày - giờ lễ" secondary="Tên Board phụ trách" />
                    </ListItem>
                    <ListItem>
                        <ListItemIcon>
                            <LocalActivity />
                        </ListItemIcon>
                        <ListItemText primary="30 Vé" />
                    </ListItem>
                    <ListItem>
                        <ListItemIcon>
                            <Paid />
                        </ListItemIcon>
                        <ListItemText primary="750 dollars" />
                    </ListItem>
                    <ListItem>
                        <ListItemIcon>
                            <VolunteerActivism />
                        </ListItemIcon>
                        <ListItemText primary="100 dollars" />
                    </ListItem>
                </List>

            </Backdrop>
        );
    }
}

export default Result;