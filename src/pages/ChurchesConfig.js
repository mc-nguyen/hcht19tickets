import React from "react";
import {
    Alert,
    Avatar,
    Box,
    Button,
    IconButton,
    ListItem,
    ListItemAvatar, ListItemSecondaryAction,
    ListItemText,
    Snackbar,
    TextField,
    List
} from "@mui/material";
import {Church, Delete, Send} from "@mui/icons-material";
import {deepPurple} from "@mui/material/colors";
import {doc, setDoc, getDocs, collection} from "firebase/firestore";
import db from "../Firebase";

class ChurchesConfig extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            churches: [],
            currentAdded: '',
            success: true,
            notification: false
        }
    }

    componentDidMount() {
        this.importDataFromFirebase().then(r => console.log('successfully read'));
    }

    importDataFromFirebase = async () => {
        const querySnapshot = await getDocs(collection(db, "churches"));
        querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            const church = {
                id: doc.id,
                name: doc.data().fullName
            };
            this.setState({
                churches: [...this.state.churches, church]
            });
        });
    }

    exportData2Firebase = () => {
        const churchArr = this.state.currentAdded.replace(' ','');
        const result = doc(db, 'churches', 'church-'+churchArr.toLowerCase());
        setDoc(result, {
            added: Date.now(),
            fullName: this.state.currentAdded
        }, {merge: true}).then(r => {
            console.log("Succeeded export to firestore!");
            this.setState({
                success: true,
                notification: true,
            });
        }).catch(e => {
            console.log(e);
            this.setState({
                success: false,
                notification: true,
            });
        })
    }

    removeItemFromFirebase = (id) => {
        console.log(id + " worked!");
    }

    render() {
        return (
            <Box sx={{
                my: 3, borderRadius: 3,
                bgcolor: deepPurple[300],
                width: 1/2
            }}>
                <List dense={true}>
                    { this.state.churches.map((church, index) => (
                        <ListItem key={index}
                                  secondaryAction={
                                      <IconButton edge="end" aria-label="delete"
                                                  onClick={this.removeItemFromFirebase(church.id)}
                                      >
                                          <Delete/>
                                      </IconButton>
                                  }
                        >
                            <ListItemAvatar>
                                <Avatar sx={{width: 56, height: 56, mr: 3}}>
                                    <Church/>
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText>
                                <h2>{church.name}</h2>
                            </ListItemText>
                        </ListItem>
                    ))}
                </List>
                <Box sx={{ display: 'flex', alignItems: 'flex-end', m: 1, p:1, bgcolor: 'white', borderRadius: 3 }}>
                    <Church sx={{ color: 'action.active', mr: 1, my: 0.5, width: 30, height: 30 }} />
                    <TextField id="input-with-sx"
                               label="Nhà Thờ"
                               variant="standard"
                               fullWidth
                               sx={{mr: 2}}
                               value={this.state.currentAdded}
                               onChange={(e)=>this.setState({currentAdded: e.target.value})}
                    />
                    <Button variant="contained"
                            endIcon={<Send />}
                            onClick={this.exportData2Firebase}
                    >
                        Thêm
                    </Button>
                </Box>
                <Snackbar
                    open={this.state.notification}
                    autoHideDuration={5000}
                    onClose={() => this.setState({notification: false})}
                    message={this.state.message}
                >
                    {(this.state.success) ? <Alert onClose={() => this.setState({notification: false})}
                                                   severity="success"
                                                   variant="filled"
                    >Thêm nhà thờ thành công!
                    </Alert> : <Alert onClose={() => this.setState({notification: false})}
                                      variant="filled"
                                      severity="error"
                    >Lỗi thêm nhà thờ, vui lòng kiểm tra lại!
                    </Alert>}
                </Snackbar>
            </Box>
        )
    }
}

export default ChurchesConfig;