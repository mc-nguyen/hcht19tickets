import React from "react";
import Attendance from "../components/Attendance";
import {Alert, Fab, Snackbar} from "@mui/material";
import {Backup} from "@mui/icons-material";
import {doc, setDoc} from "firebase/firestore";
import db from "../Firebase";

class Members extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            members: [],
            location: "",
            date: "",
            time: "",
            success: true,
            notification: false
        }
    }

    componentDidMount() {
        setInterval(()=> {

        },1000)
    }

    checkEmpty = () => {
        return (
            this.state.members.length === 0 ||
            this.state.location === "" ||
            this.state.date === "" ||
            this.state.time === ""
        );
    }

    exportData2Firebase = () => {
        const errorConfig = {
            success: false,
            notification: true,
        }
        if (this.checkEmpty()) this.setState(errorConfig)
        else {
            const church = this.state.location.split(' ').reverse[0];
            const date = new Date(this.state.date);
            const [month, day] = [date.getMonth(), date.getDate() + 1];
            const hour = "-" + this.state.time.split(':')[0];
            const result = doc(db, 'members', 'members-' + church + month + day + hour);
            setDoc(result, {
                members: this.state.members,
                location: this.state.location,
                date: this.state.date,
                time: this.state.time,
            }, {merge: true}).then(r => {
                console.log("Succeeded export to firestore!");
                this.setState({
                    success: true,
                    notification: true,
                });
            }).catch(e => {
                console.log(e);
                this.setState(errorConfig);
            })
        }
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
                     }}
                     onClick={this.exportData2Firebase}
                >
                    <Backup sx={{mr: 1}}/>
                    Cập Nhật
                </Fab>
                <Snackbar
                    open={this.state.notification}
                    autoHideDuration={5000}
                    onClose={() => this.setState({notification: false})}
                    message={this.state.message}
                >
                    {(this.state.success) ? <Alert onClose={() => this.setState({notification: false})}
                                                   severity="success"
                                                   variant="filled"
                    >Điểm danh cập nhật thành công!
                    </Alert> : <Alert onClose={() => this.setState({notification: false})}
                                      variant="filled"
                                      severity="error"
                    >Điểm danh không thể cập nhật, vui lòng kiểm tra lại!
                    </Alert>}
                </Snackbar>
            </div>
        )
    }
}

export default Members;