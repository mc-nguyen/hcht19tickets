import React from 'react';
import {Button, TextField} from "@mui/material";
import {Backup} from "@mui/icons-material";

export default function Attendance() {
    const [names, setNames] = React.useState("");
    const calStyle = {
        bgcolor: "#4caf50",
        '&:hover': {
            bgcolor: "#43a047"
        },
        margin: '5%',
    }
    function exportMemberList() {
        console.log(names.split("\n"));
    }

    return (
        <div>
            <h1 text-align="center">Điểm Danh Member</h1>
            <div style={{background: "white", padding: 15}}>
                <TextField
                    id="outlined-multiline-flexible"
                    label="Members bán vé"
                    multiline
                    fullWidth
                    rows={10}
                    value={names}
                    onChange={(e) => setNames(e.target.value)}
                />
            </div>
            <Button style={calStyle} variant="contained" color="success" onClick={exportMemberList}>
                <Backup sx={{ mr: 1 }} />
                Cập nhật
            </Button>
        </div>
    )
};