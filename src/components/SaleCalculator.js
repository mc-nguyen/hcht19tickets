import React from "react";
import {
    FormGroup,
    TextField,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    Button,
    Divider,
    Box, Fab
} from "@mui/material";
import {Backup, Calculate} from "@mui/icons-material";

class SaleCalculator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            calStyle: {
                bgcolor: "#4caf50",
                '&:hover': {
                    bgcolor: "#43a047"
                },
                margin: '1%'
            },
            fieldMargin: {
                margin: 10,
                color: "white"
            },
            coordinator: this.props.coordinator,
            location: this.props.location,
            date: this.props.date,
            time: this.props.time,
            beginningChange: 0,
            totalAmount:0,
            totalTickets: 0,
            leftTickets: 0
        }
    }

    calculate = () => {
        let sold = this.state.totalTickets - this.state.leftTickets;
        let profit = sold * 25;
        let donation = this.state.totalAmount - profit - this.state.beginningChange;
        console.log([sold, profit, donation]);
    }

    render() {
        return (
            <div>

                <Box sx={{pr:3, bgcolor: 'white'}}>
                    <Box
                        sx={{
                            display: 'grid',
                            columnGap: 2,
                            gridTemplateColumns: 'repeat(2, 1fr)',
                        }}
                    >
                        <TextField style={this.state.fieldMargin}
                                   fullWidth
                                   required
                                   id="outline-basic"
                                   label="Tên Board"
                                   variant="outlined"
                                   value={this.state.coordinator}
                                   onChange={(e) => this.setState({coordinator: e.target.value})}
                        />
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
                    </Box>
                    <Divider sx={{my:3}}/>
                    <Box
                        sx={{
                            display: 'grid',
                            columnGap: 2,
                            gridTemplateColumns: 'repeat(2, 1fr)',
                        }}
                    >
                        <TextField type='number' style={this.state.fieldMargin} fullWidth required id="outline-basic"
                                   label="Tiền lẻ (đơn vị: dollar)" variant="outlined"
                                   value={this.state.beginningChange}
                                   onChange={(e)=>this.setState({beginningChange: e.target.value})}
                        />
                        <TextField type='number' style={this.state.fieldMargin} fullWidth required id="outline-basic"
                                   label="Tổng tiền (đơn vị: dollar)" variant="outlined"
                                   value={this.state.totalAmount}
                                   onChange={(e)=>this.setState({totalAmount: e.target.value})}
                        />
                        <TextField type='number' style={this.state.fieldMargin} fullWidth required id="outline-basic"
                                   label="Tổng vé (đơn vị: vé)" variant="outlined"
                                   value={this.state.totalTickets}
                                   onChange={(e)=>this.setState({totalTickets: e.target.value})}
                        />
                        <TextField type='number' style={this.state.fieldMargin} fullWidth required id="outline-basic"
                                   label="Còn lại (đơn vị: vé)" variant="outlined"
                                   value={this.state.leftTickets}
                                   onChange={(e)=>this.setState({leftTickets: e.target.value})}
                        />
                    </Box>
                </Box>

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
                    <Calculate sx={{mr: 1}}/>
                    Tính Toán
                </Fab>
            </div>
        );
    }
}

export default SaleCalculator