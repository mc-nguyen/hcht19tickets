import React from "react";
import {Avatar, Box, Button, IconButton, ListItem, ListItemAvatar, ListItemText, TextField} from "@mui/material";
import {Church, Delete, Send} from "@mui/icons-material";
import {deepPurple} from "@mui/material/colors";

class ChurchesConfig extends React.Component {
    render() {
        return (
            <Box sx={{
                my: 3, pt: 1, borderRadius: 3,
                bgcolor: deepPurple[300],
                width: 1/4
            }}>
                <ListItem
                    secondaryAction={
                        <IconButton edge="end" aria-label="delete">
                            <Delete />
                        </IconButton>
                    }
                >
                    <ListItemAvatar>
                        <Avatar sx={{ width: 56, height: 56, mr: 3 }}>
                            <Church />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText
                        primary="Single-line item"
                        sx={{fontSize: 30, fontWeight: 'bold'}}
                    />
                </ListItem>
                <Box sx={{ display: 'flex', alignItems: 'flex-end', m: 1, p:1, bgcolor: 'white', borderRadius: 3 }}>
                    <Church sx={{ color: 'action.active', mr: 1, my: 0.5, width: 30, height: 30 }} />
                    <TextField id="input-with-sx"
                               label="Nhà Thờ"
                               variant="standard"
                               fullWidth
                               sx={{mr: 2}}
                    />
                    <Button variant="contained" endIcon={<Send />}>
                        Thêm
                    </Button>
                </Box>
            </Box>
        )
    }
}

export default ChurchesConfig;