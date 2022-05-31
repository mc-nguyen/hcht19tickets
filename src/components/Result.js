import React from 'react';
import {
    Avatar,
    Backdrop, Badge, Box, Button,
    List,
    ListItem,
    ListItemAvatar,
    ListItemIcon,
    ListItemText,
} from "@mui/material";
import {deepOrange, green, lightBlue} from "@mui/material/colors";
import {
    AccountBalance,
    Church, Download,
    LocalActivity, Money,
    Paid,
    VolunteerActivism
} from "@mui/icons-material";
import html2canvas from "html2canvas";

class Result extends React.Component {
    constructor(props) {
        super(props);
        const month = new Date(this.props.info.date).getMonth();
        const day = new Date(this.props.info.date).getDate() + 1;
        this.state = {
            sold: ((this.props.calculated.sold) ? (this.props.calculated.sold) : 0) + " vé",
            profit: ((this.props.calculated.profit) ? (this.props.calculated.profit) : 0) + " dollars",
            donation: ((this.props.calculated.donation) ? (this.props.calculated.donation) : 0) + " dollars",
            primaryInfo: this.props.info.location + ", " + month + "/" + day + " - " + this.props.info.time
        }
    }

    componentDidMount() {
        setInterval(()=>{
            const month = new Date(this.props.info.date).getMonth();
            const day = new Date(this.props.info.date).getDate() + 1;
            let [hour, minute] = this.props.info.time.split(':');
            hour = parseInt(hour);
            const timePeriod = hour < 11 ? "sáng": (
                hour < 14 ? "trưa" : (
                    hour < 19 ? "chiều" : (
                        hour < 22 ? "tối" : "đêm"
            )));
            hour -= hour > 12 ? 12 : 0;
            minute = parseInt(minute);
            const time = hour + ((minute !== 0) ? ":" + this.props.info.time.split(':')[1] : " giờ") + " " + timePeriod;

            this.setState({
                beginningChange: this.props.input.beginningChange + " dollars",
                totalAmount: this.props.input.totalAmount + " dollars",
                totalTickets: this.props.input.totalTickets + " vé",
                leftTickets: this.props.input.leftTickets + " vé",
                sold: this.props.calculated.sold + " vé",
                profit: this.props.calculated.profit + " dollars",
                donation: this.props.calculated.donation + " dollars",
                primaryInfo: this.props.info.location + ", " + month + "/" + day + " - lễ " + time
            })
        }, 1000)
    }

    uploadBlob = (e) => {
        html2canvas(document.getElementById('result')).then((canvas) => {
            this.props.image(canvas.toDataURL('image/png'));
        })
    }

    render() {
        return(
            <Backdrop
                sx={{ color: deepOrange, zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={this.props.result}
                onClick={this.props.closeResult}
            >
                <Box sx={{
                    bgcolor: deepOrange[300],
                    display: 'grid',
                    gap: 1,
                    gridTemplateColumns: 'repeat(2, 1fr)',
                }}
                     id='result'
                >
                    <ListItem sx={{ gridColumn: 'span 2'}}>
                        <ListItemAvatar>
                            <Avatar sx={{
                                bgcolor: lightBlue[900]
                            }}>
                                <Church />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary={this.state.primaryInfo}
                                      secondary={"Coordinator: " + this.props.info.coordinator}
                        />
                    </ListItem>
                    <List>
                        <b>Nhập</b>
                        <ListItem>
                            <ListItemIcon>
                                <Money />
                            </ListItemIcon>
                            <ListItemText primary={this.state.beginningChange} />
                        </ListItem>
                        <ListItem>
                            <ListItemIcon>
                                <AccountBalance />
                            </ListItemIcon>
                            <ListItemText primary={this.state.totalAmount} />
                        </ListItem>
                        <ListItem>
                            <ListItemIcon>
                                <Badge badgeContent={'->'} color="primary">
                                    <Paid />
                                </Badge>
                            </ListItemIcon>
                            <ListItemText primary={this.state.totalTickets} />
                        </ListItem>
                        <ListItem>
                            <ListItemIcon>
                                <Badge badgeContent={'<-'} color="primary">
                                    <Paid />
                                </Badge>
                            </ListItemIcon>
                            <ListItemText primary={this.state.leftTickets} />
                        </ListItem>
                    </List>
                    <List>
                        <b>Kết Quả</b>
                        <ListItem>
                            <ListItemIcon>
                                <LocalActivity />
                            </ListItemIcon>
                            <ListItemText primary={this.state.sold} />
                        </ListItem>
                        <ListItem>
                            <ListItemIcon>
                                <Paid />
                            </ListItemIcon>
                            <ListItemText primary={this.state.profit} />
                        </ListItem>
                        <ListItem>
                            <ListItemIcon>
                                <VolunteerActivism />
                            </ListItemIcon>
                            <ListItemText primary={this.state.donation} />
                        </ListItem>
                    </List>

                    <Button onClick={(e) => this.uploadBlob(e)}
                            sx={{
                                mx: 2, mb: 2,
                                bgcolor: green[500],
                                color: 'white',
                                '&:hover': {
                                    bgcolor: 'white',
                                    color: green[500]
                                },
                                gridColumn: 'span 2',
                                pt: 1
                            }}
                    >
                        <Download sx={{my:0,mr:2}}/>
                        Xuất Kết Quả!
                    </Button>

                </Box>

            </Backdrop>
        );
    }
}

export default Result;