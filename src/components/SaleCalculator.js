import React from "react";
import {
    TextField,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    Divider,
    Box, Fab, CardMedia, Snackbar, Alert
} from "@mui/material";
import {Backup, Calculate} from "@mui/icons-material";
import Result from "./Result";
import {collection, doc, getDocs, setDoc} from "firebase/firestore";
import db from "../Firebase";

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
            coordinator: '',
            location: '',
            date: '',
            time: '',
            beginningChange: 0,
            totalAmount: 0,
            totalTickets: 0,
            leftTickets: 0,
            result: false,
            image: null,
            notification: false,
            success: true,
            churches: []
        }
    }

    componentDidMount() {
        setInterval(() => {
            this.setState({sold : this.state.totalTickets - this.state.leftTickets});
            this.setState({profit : this.state.sold * 25});
            this.setState({donation : this.state.totalAmount - this.state.profit - this.state.beginningChange});
        }, 1000)
        this.importChurchesFromFirestore().then();
    }

    importChurchesFromFirestore = async () => {
        const querySnapshot = await getDocs(collection(db, "churches"));
        let churchesFromFirebase = []
        querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            churchesFromFirebase = [...churchesFromFirebase, doc.data().fullName]
        });
        this.setState({churches: churchesFromFirebase});
    }

    exportDataToFirestore = () => {
        const errorConfig = {
            success: false,
            notification: true,
        }
        if (this.checkEmpty() || this.checkInputError()) this.setState(errorConfig)
        else {
            const church = this.state.location.split(' ').reverse[0];
            const date = new Date(this.state.date);
            const [month, day] = [date.getMonth(), date.getDate() + 1];
            const hour = "-" + this.state.time.split(':')[0];
            const result = doc(db, 'ticket-results', 'result-' + church + month + day + hour);
            setDoc(result, {
                coordinator: this.state.coordinator,
                location: this.state.location,
                date: this.state.date,
                time: this.state.time,
                beginningChange: this.state.beginningChange,
                totalAmount: this.state.totalAmount,
                totalTickets: this.state.totalTickets,
                leftTickets: this.state.leftTickets,
                sold: this.state.sold,
                profit: this.state.profit,
                donation: this.state.donation
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

    checkEmpty = () => {
        return (this.state.coordinator === '' ||
            this.state.location === '' ||
            this.state.date === ''||
            this.state.time === ''||
            this.state.beginningChange === 0 ||
            this.state.totalAmount === 0 ||
            this.state.totalTickets === 0 ||
            this.state.leftTickets === 0);
    }

    checkInputError = () => {
        return (this.state.sold < 0 ||
            this.state.profit < 0 ||
            this.state.donation < 0);
    }

    render() {
        return (
            <div>
                <Box sx={{pr:2.5, pt: 2, bgcolor: 'white', borderRadius: 1}}>
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
                                   label="T??n Board"
                                   variant="outlined"
                                   value={this.state.coordinator}
                                   onChange={(e) => this.setState({coordinator: e.target.value})}
                        />
                        <FormControl style={this.state.fieldMargin}
                                     fullWidth required
                                     variant='outlined'
                        >
                            <InputLabel id="church"><b>Nh?? Th???</b></InputLabel>
                            <Select value={this.state.location}
                                    onChange={(e) => this.setState({location: e.target.value})}
                                    label="Nh?? Th???"
                                    labelId="demo-simple-select-helper-label"
                                    id="demo-simple-select-helper"
                            >
                                {
                                    this.state.churches.map((church, index) => (
                                        <MenuItem value={church} key={index}>{church}</MenuItem>
                                    ))
                                }
                            </Select>
                        </FormControl>
                        <TextField InputLabelProps={{shrink: true}} type='date' style={this.state.fieldMargin} fullWidth required
                                   id="outline-basic" label="Ng??y b??n" variant="outlined"
                                   value={this.state.date}
                                   onChange={(e) => this.setState({date: e.target.value})}
                        />
                        <TextField InputLabelProps={{shrink: true}} type='time' style={this.state.fieldMargin} fullWidth required
                                   id="outline-basic" label="Gi??? l???" variant="outlined"
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
                                   label="Ti???n l??? (????n v???: dollar)" variant="outlined"
                                   value={this.state.beginningChange}
                                   onChange={(e)=>this.setState({beginningChange: e.target.value})}
                        />
                        <TextField type='number' style={this.state.fieldMargin} fullWidth required id="outline-basic"
                                   label="T???ng ti???n (????n v???: dollar)" variant="outlined"
                                   value={this.state.totalAmount}
                                   onChange={(e)=>this.setState({totalAmount: e.target.value})}
                        />
                        <TextField type='number' style={this.state.fieldMargin} fullWidth required id="outline-basic"
                                   label="T???ng v?? (????n v???: v??)" variant="outlined"
                                   value={this.state.totalTickets}
                                   onChange={(e)=>this.setState({totalTickets: e.target.value})}
                        />
                        <TextField type='number' style={this.state.fieldMargin} fullWidth required id="outline-basic"
                                   label="C??n l???i (????n v???: v??)" variant="outlined"
                                   value={this.state.leftTickets}
                                   onChange={(e)=>this.setState({leftTickets: e.target.value})}
                        />
                    </Box>
                    <Divider sx={{my:3}}/>
                    <Box sx={{
                        color: 'black',
                        pb: 3, pl: 3
                    }}>
                    {
                        (this.state.image !== null) ? (
                            <CardMedia component='img'
                                       image={this.state.image}
                                       alt="Result"
                            />
                        ) : (
                            <i>Ch??a C?? D??? Li???u!</i>
                        )
                    }
                    </Box>
                </Box>

                <Fab variant="extended"
                     sx={{left:16,
                         bottom:16,
                         position:'fixed',
                         bgcolor:'green',
                         '&:hover': {
                             bgcolor: 'green',
                         },
                         color: 'white'
                     }}
                     onClick={()=>this.setState({result: true})}
                >
                    <Calculate sx={{mr: 1}}/>
                    T??nh To??n
                </Fab>
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
                     onClick={this.exportDataToFirestore}
                >
                    <Backup sx={{mr: 1}}/>
                    C???p Nh???t
                </Fab>
                <Result result={this.state.result}
                        closeResult={()=>this.setState({result: false})}
                        info={{
                            coordinator: this.state.coordinator,
                            location: this.state.location,
                            date: this.state.date,
                            time: this.state.time
                        }}
                        input={{
                            beginningChange: this.state.beginningChange,
                            totalAmount: this.state.totalAmount,
                            totalTickets: this.state.totalTickets,
                            leftTickets: this.state.leftTickets,
                        }}
                        calculated={{
                            sold: this.state.sold,
                            profit: this.state.profit,
                            donation: this.state.donation,
                        }}
                        image={(imageURL) => this.setState({image: imageURL})}
                />
                <Snackbar
                    open={this.state.notification}
                    autoHideDuration={5000}
                    onClose={() => this.setState({notification: false})}
                    message={this.state.message}
                >
                    {(this.state.success) ? <Alert onClose={() => this.setState({notification: false})}
                                                   severity="success"
                                                   variant="filled"
                    >D??? li???u c???p nh???t th??nh c??ng!
                    </Alert> : <Alert onClose={() => this.setState({notification: false})}
                                      variant="filled"
                                      severity="error"
                    >D??? li???u kh??ng th??? c???p nh???t, vui l??ng ki???m tra l???i!
                    </Alert>}
                </Snackbar>
            </div>
        );
    }
}

export default SaleCalculator