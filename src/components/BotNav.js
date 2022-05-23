import * as React from 'react';
import {AdminPanelSettings,
    Calculate,
    EmojiPeople
} from "@mui/icons-material";
import {
    Paper,
    BottomNavigation,
    BottomNavigationAction,
} from "@mui/material";

class BotNav extends React.Component {
    render() {
        return(
            <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
                <BottomNavigation
                    showLabels
                    value={this.props.value}
                    onChange={(event, newValue) => {
                        this.props.setValue(newValue);
                        console.log(newValue);
                    }}
                    style={{background: (this.props.value===0) ? "orangered" : ((this.props.value===1) ? "#33FFBD" : "#DBFF33")}}
                >
                    <BottomNavigationAction style={{color: (this.props.value===0) ? "#33FFBD" : ""}} label="Bảng Tính" icon={<Calculate />} />
                    <BottomNavigationAction style={{color: (this.props.value===1) ? "#FF5733" : ""}} label="Điểm Danh" icon={<EmojiPeople />} />
                    <BottomNavigationAction style={{color: (this.props.value===2) ? "#581845" : ""}} label="Báo Cáo" icon={<AdminPanelSettings />} />
                </BottomNavigation>
            </Paper>
        );
    }
}

export default BotNav;