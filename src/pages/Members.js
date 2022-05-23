import React from "react";
import Attendance from "../components/Attendance";
import {Button} from "@mui/material";
import {Backup} from "@mui/icons-material";

class Members extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            members: [],
            location: "",
            date: "",
            time: ""
        }
    }
    calStyle = {
        bgcolor: "#4caf50",
        '&:hover': {
            bgcolor: "#43a047"
        },
        margin: '5%',
    }
    exportMemberList = () => {
        console.log(this.state)
    }
    render() {
        return (
            <div>
                <h1 text-align="center">Điểm Danh Member</h1>
                <Attendance members={this.state.members}
                            editMembers={(m) => this.setState({members: m})}
                            info={{
                                location: this.state.location,
                                date: this.state.date,
                                time: this.state.time
                            }}
                            editInfo={(l, d, t) => this.setState({
                                location: l,
                                date: d,
                                time: t
                            })}
                />
                <Button style={this.calStyle} variant="contained" color="success" onClick={this.exportMemberList}>
                    <Backup sx={{ mr: 1 }} />
                    Cập nhật
                </Button>
            </div>
        )
    }
}

export default Members;