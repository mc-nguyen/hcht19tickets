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
    }
    tabList = [
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
    handleClose = () => {
        this.setState({
            anchor: null,
            open: Boolean(null)
        })
    }
    render() {
        return(
            <div>
                <AppBar position="fixed" sx={{ mr: 0}}>
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
                            sx={{ mr: 2, ml: 10 }}
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
                    <MenuItem onClick={()=>window.location.pathname='/'}><Calculate sx={{mr:2}}/>Bảng Tính Tiền Vé</MenuItem>
                    <MenuItem onClick={()=>window.location.pathname='/members'}><People sx={{mr:2}}/>Điểm Danh</MenuItem>
                    <MenuItem onClick={()=>window.location.pathname='/churches-config'}><Church sx={{mr:2}}/>Danh Sách Nhà Thờ</MenuItem>
                    <MenuItem onClick={()=>window.location.pathname='/report'}><Note sx={{mr:2}}/>Kiểm Kê</MenuItem>
                </MenuComponent>
            </div>
        );
    }
}

export default BotNav;