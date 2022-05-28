import React from "react";
import Attendance from "../components/Attendance";
import {Fab} from "@mui/material";
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
                <Fab variant="extended"
                     sx={{right:16,
                         bottom:16,
                         position:'fixed',
                         bgcolor:'green',
                         '&:hover': {
                             bgcolor: 'green',
                         },
                         color: 'white'
                     }}>
                    <Backup sx={{mr: 1}}/>
                    Cập Nhật
                </Fab>
            </div>
        )
    }
}

export default Members;