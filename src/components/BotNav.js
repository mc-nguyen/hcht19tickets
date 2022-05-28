import * as React from 'react';
import {Menu
} from "@mui/icons-material";
import {
    AppBar,
    Toolbar,
    IconButton,
    Typography
} from "@mui/material";
import MenuLink from "./MenuLink";

class BotNav extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            drawer: false
        }
    }
    render() {
        return(
            <div>
                <AppBar position="fixed">
                    <Toolbar>
                        <IconButton
                          size="large"
                          edge="start"
                          color="inherit"
                          aria-label="menu"
                          sx={{ mr: 2 }}
                        >
                            <Menu/>
                        </IconButton>
                        <Typography variant="h6" color="inherit">
                          {this.props.title}
                        </Typography>
                    </Toolbar>
                </AppBar>
                <MenuLink/>
            </div>
        );
    }
}

export default BotNav;