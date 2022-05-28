import React from "react";
import {
    FormGroup,
    TextField,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    Button, Divider,
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

    componentDidMount() {
        setInterval(() => {
            console.log(this.state);
            // this.props.editShift(
            //     this.state.coordinator,
            //     this.state.location,
            //     this.state.date,
            //     this.state.time,
            // );
            console.log(this.props.shift)
            console.log(this.props.summary)
        }, 5000);
    }

    calculate = () => {
        let sold = this.state.totalTickets - this.state.leftTickets;
        let profit = sold * 25;
        let donation = this.state.totalAmount - profit - this.state.beginningChange;
        this.props.editSummary(sold, profit, donation);
        console.log(this.props.summary)
    }

    render() {
        return (
            <div style={{padding: '0 5px 10%'}}>
                <h1 text-align='center'>Bảng Tính Tiền Vé</h1>

                <div style={{background: "white"}}>
                    <FormGroup row>
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
                    </FormGroup>
                    <Divider/>
                    <FormGroup row>
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
                    </FormGroup>
                </div>

                <Button style={this.state.calStyle} variant="contained" color="success" onClick={this.calculate}>
                    <Calculate sx={{mr: 1}}/>
                    Tính toán
                </Button>
                <Button style={this.state.calStyle} variant="contained" color="success">
                    <Backup sx={{mr: 1}}/>
                    Cập nhật
                </Button>
            </div>
        );
    }
};

export default SaleCalculator