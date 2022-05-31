import * as React from 'react';
import {Calculate, Church, Menu, Note, People} from "@mui/icons-material";
import {
    AppBar,
    Toolbar,
    IconButton,
    Typography,
    Menu as MenuComponent,
    MenuItem
} from "@mui/material";

class BotNav extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            anchor: null,
            open: Boolean(null)
        }
        document.title = props.title;
    }
    styleMenuItem = {
        py: 2,
        '&:hover': {
            bgcolor: '#330066',
            color: 'white'
        }
    }
    render() {
        return(
            <div>
                <AppBar position="fixed">
                    <Toolbar>
                        <IconButton
                            id='menu'
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            aria-controls={this.state.open ? 'basic-menu' : undefined}
                            aria-haspopup="true"
                            aria-expanded={this.state.open ? 'true' : undefined}
                            sx={{ mr: 2, ml: '5%' }}
                            onClick={(e) => this.setState({
                                anchor: e.target,
                                open: Boolean(e.target)
                            })}
                        >
                            <Menu/>
                        </IconButton>
                        <Typography variant="h4" color="inherit">
                          {this.props.title}
                        </Typography>
                    </Toolbar>
                </AppBar>
                <MenuComponent
                    id="basic-menu"
                    anchorEl={this.state.anchor}
                    open={this.state.open}
                    onClose={()=>this.setState({
                        anchor: null,
                        open: Boolean(null)
                    })}
                    MenuListProps={{
                        'aria-labelledby': 'menu',
                    }}
                    sx={{mt:3}}
                >
                    <MenuItem onClick={()=>window.location.pathname='/' }
                              sx={this.styleMenuItem}
                    >
                        <Calculate sx={{mr:2}}/>Bảng Tính Tiền
                    </MenuItem>
                    <MenuItem onClick={()=>window.location.pathname='/members'}
                              sx={this.styleMenuItem}
                    >
                        <People sx={{mr:2}}/>Điểm Danh
                    </MenuItem>
                    <MenuItem onClick={()=>window.location.pathname='/churches-config'}
                              sx={this.styleMenuItem}
                    >
                        <Church sx={{mr:2}}/>Danh Sách Nhà Thờ
                    </MenuItem>
                    <MenuItem onClick={()=>window.location.pathname='/report'}
                              sx={this.styleMenuItem}
                    >
                        <Note sx={{mr:2}}/>Kiểm Kê
                    </MenuItem>
                </MenuComponent>
            </div>
        );
    }
}

export default BotNav;