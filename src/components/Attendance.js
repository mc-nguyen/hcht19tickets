import React from 'react';
import {Button, FormControl, InputLabel, MenuItem, Select, TextField} from "@mui/material";

class Attendance extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            members: [],
            location: "",
            date: "",
            time: ""
        }
    }

    componentDidMount() {
        setInterval(() => {
            this.props.editMembers(this.state.members);
            this.props.editInfo(this.state.location, this.state.date, this.state.time)
        }, 1);
    }

    render() {
        return (
            <div>
                <div style={{background: "white", padding: 15}}>
                    <FormControl style={this.state.fieldMargin}
                                 fullWidth required
                                 variant='outlined'
                    >
                        <InputLabel id="church"><b>Nhà Thờ</b></InputLabel>
                        <Select value={this.state.location}
                                onChange={(e) => this.setState({location: e.target.value})}
                                label="Nhà Thờ"
                                labelId="demo-simple-select-helper-label"
                                id="demo-simple-select-helper"
                        >
                            <MenuItem value="St. Barbara">St. Barbara</MenuItem>
                            <MenuItem value="La Vang">La Vang</MenuItem>
                            <MenuItem value="Westminster">Westminster</MenuItem>
                        </Select>
                    </FormControl>
                    <TextField InputLabelProps={{shrink: true}} type='date' style={this.state.fieldMargin} fullWidth required
                               id="outline-basic" label="Ngày bán" variant="outlined"
                               value={this.state.date}
                               onChange={(e) => this.setState({date: e.target.value})}
                    />
                    <TextField InputLabelProps={{shrink: true}} type='time' style={this.state.fieldMargin} fullWidth required
                               id="outline-basic" label="Giờ lễ" variant="outlined"
                               value={this.state.time}
                               onChange={(e) => this.setState({time: e.target.value})}
                    />
                    <TextField
                        id="outlined-multiline-flexible"
                        label="Members bán vé"
                        multiline
                        fullWidth
                        rows={10}
                        value={this.state.members.join('\n')}
                        onChange={(e) => this.setState({members: e.target.value.split('\n')})}
                    />
                </div>
            </div>
        )
    }
};

export default Attendance;