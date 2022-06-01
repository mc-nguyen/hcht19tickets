import React from "react";
import {
    Box,
    Paper,
    styled,
    Table,
    TableBody,
    TableCell,
    tableCellClasses,
    TableContainer,
    TableHead,
    TableRow
} from "@mui/material";
import {collection, getDocs} from "firebase/firestore";
import db from "../Firebase";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));

class Report extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            results: [],
            totalSold: 0,
            totalProfit: 0,
            totalDonation: 0
        }
    }

    componentDidMount() {
        this.importDataFromDatabase().then();
    }

    importDataFromDatabase = async () => {
        const querySnapshot = await getDocs(collection(db, "ticket-results"));
        let resultsFromFirebase = [];
        let [tSold, tProfit, tDonation] = [0, 0, 0];
        querySnapshot.forEach((document) => {
            // doc.data() is never undefined for query doc snapshots
            const result = {
                coordinator: document.data().coordinator,
                location: document.data().location,
                date: document.data().date,
                time: document.data().time,
                sold: document.data().sold,
                profit: document.data().profit,
                donation: document.data().donation
            }
            resultsFromFirebase = [...resultsFromFirebase, result];
            tSold += result.sold;
            tProfit += result.profit;
            tDonation += result.donation;
            console.log(resultsFromFirebase)
        });
        this.setState({
            results: resultsFromFirebase,
            totalSold: tSold,
            totalProfit: tProfit,
            totalDonation: tDonation
        });
        console.log(this.state.results)
    }

    render() {
        return (
            <Box sx={{mx:1}}>
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 700 }} aria-label="customized table">
                        <TableHead>
                            <TableRow>
                                <StyledTableCell>Nhà Thờ</StyledTableCell>
                                <StyledTableCell align="center">Ngày Bán</StyledTableCell>
                                <StyledTableCell align="center">Giờ Lễ</StyledTableCell>
                                <StyledTableCell align="center">Coordinator</StyledTableCell>
                                <StyledTableCell align="center">Tổng Vé Đã Bán</StyledTableCell>
                                <StyledTableCell align="right">Profit</StyledTableCell>
                                <StyledTableCell align="right">Donation</StyledTableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {
                                (this.state.results.length !== 0) ?
                                this.state.results.map((result, index) => (
                                    <StyledTableRow key={index}>
                                        <StyledTableCell component="th" scope="row">
                                            {result.location}
                                        </StyledTableCell>
                                        <StyledTableCell align="center">{result.date}</StyledTableCell>
                                        <StyledTableCell align="center">{result.time}</StyledTableCell>
                                        <StyledTableCell align="center">{result.coordinator}</StyledTableCell>
                                        <StyledTableCell align="center">{result.sold}</StyledTableCell>
                                        <StyledTableCell align="right">${result.profit}</StyledTableCell>
                                        <StyledTableCell align="right">${result.donation}</StyledTableCell>
                                    </StyledTableRow>
                                )) : (
                                        <StyledTableRow>
                                            <StyledTableCell component="th" scope="row">
                                                <i>Chưa có kết quả tính toán</i>
                                            </StyledTableCell>
                                            <StyledTableCell align="center"></StyledTableCell>
                                            <StyledTableCell align="center"></StyledTableCell>
                                            <StyledTableCell align="center"></StyledTableCell>
                                            <StyledTableCell align="center"></StyledTableCell>
                                            <StyledTableCell align="right"></StyledTableCell>
                                            <StyledTableCell align="right"></StyledTableCell>
                                        </StyledTableRow>
                                    )
                            }
                            <StyledTableRow>
                                <StyledTableCell component="th" scope="row">
                                    <b><u>TỔNG KẾT</u></b>
                                </StyledTableCell>
                                <StyledTableCell align="center"></StyledTableCell>
                                <StyledTableCell align="center"></StyledTableCell>
                                <StyledTableCell align="center"></StyledTableCell>
                                <StyledTableCell align="center"><b>{this.state.totalSold}</b></StyledTableCell>
                                <StyledTableCell align="right"><b>${this.state.totalProfit}</b></StyledTableCell>
                                <StyledTableCell align="right"><b>${this.state.totalDonation}</b></StyledTableCell>
                            </StyledTableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
            </Box>
        )
    }
}

export default Report;