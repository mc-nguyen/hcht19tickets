import React from 'react';
import {
    Avatar,
    Backdrop, Button,
    List,
    ListItem,
    ListItemAvatar,
    ListItemIcon,
    ListItemText,
} from "@mui/material";
import {deepOrange} from "@mui/material/colors";
import {
    Church, Download,
    LocalActivity,
    Paid,
    VolunteerActivism
} from "@mui/icons-material";

class Result extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            sold: ((this.props.calculated.sold) ? (this.props.calculated.sold) : 0) + " vé",
            profit: ((this.props.calculated.profit) ? (this.props.calculated.profit) : 0) + " dollars",
            donation: ((this.props.calculated.donation) ? (this.props.calculated.donation) : 0) + " dollars",
            primaryInfo: this.props.info.location + ", " + this.props.info.date + " - " + this.props.info.time
        }
    }

    componentDidMount() {
        setInterval(()=>{
            this.setState({
                sold: this.props.calculated.sold + " vé",
                profit: this.props.calculated.profit + " dollars",
                donation: this.props.calculated.donation + " dollars",
                primaryInfo: this.props.info.location + ", " + this.props.info.date + " - " + this.props.info.time
            })
        }, 1000)
    }

    render() {
        return(
            <Backdrop
                sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={this.props.result}
                onClick={this.props.closeResult}
            >
                <List sx={{bgcolor: deepOrange[300]}} id="result">
                    <ListItem>
                        <ListItemAvatar>
                            <Avatar>
                                <Church />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary={this.state.primaryInfo}
                                      secondary={this.props.info.coordinator}
                        />
                    </ListItem>
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

                    <Button variant="contained" sx={{mt: 2}}>
                        <Download sx={{mr:2}}/>
                        Contained
                    </Button>
                </List>

            </Backdrop>
        );
    }
}

export default Result;