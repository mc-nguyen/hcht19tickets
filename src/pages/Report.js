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
                                <StyledTableCell align="right">Tổng Vé Đã Bán</StyledTableCell>
                                <StyledTableCell align="right">Profit</StyledTableCell>
                                <StyledTableCell align="right">Donation</StyledTableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <StyledTableRow>
                                <StyledTableCell component="th" scope="row">
                                    St. Barbara
                                </StyledTableCell>
                                <StyledTableCell align="center">Ngày Bán</StyledTableCell>
                                <StyledTableCell align="center">Giờ Lễ</StyledTableCell>
                                <StyledTableCell align="center">Coordinator</StyledTableCell>
                                <StyledTableCell align="right">Tổng Vé Đã Bán</StyledTableCell>
                                <StyledTableCell align="right">Profit</StyledTableCell>
                                <StyledTableCell align="right">Donation</StyledTableCell>
                            </StyledTableRow>
                            <StyledTableRow>
                                <StyledTableCell component="th" scope="row">
                                    St. Barbara
                                </StyledTableCell>
                                <StyledTableCell align="center">Ngày Bán</StyledTableCell>
                                <StyledTableCell align="center">Giờ Lễ</StyledTableCell>
                                <StyledTableCell align="center">Coordinator</StyledTableCell>
                                <StyledTableCell align="right">Tổng Vé Đã Bán</StyledTableCell>
                                <StyledTableCell align="right">Profit</StyledTableCell>
                                <StyledTableCell align="right">Donation</StyledTableCell>
                            </StyledTableRow>
                            <StyledTableRow>
                                <StyledTableCell component="th" scope="row">
                                    St. Barbara
                                </StyledTableCell>
                                <StyledTableCell align="center">Ngày Bán</StyledTableCell>
                                <StyledTableCell align="center">Giờ Lễ</StyledTableCell>
                                <StyledTableCell align="center">Coordinator</StyledTableCell>
                                <StyledTableCell align="right">Tổng Vé Đã Bán</StyledTableCell>
                                <StyledTableCell align="right">Profit</StyledTableCell>
                                <StyledTableCell align="right">Donation</StyledTableCell>
                            </StyledTableRow>
                            <StyledTableRow>
                                <StyledTableCell component="th" scope="row">
                                    <b><u>TỔNG KẾT</u></b>
                                </StyledTableCell>
                                <StyledTableCell align="center"></StyledTableCell>
                                <StyledTableCell align="center"></StyledTableCell>
                                <StyledTableCell align="center"></StyledTableCell>
                                <StyledTableCell align="right"><b>100</b></StyledTableCell>
                                <StyledTableCell align="right"><b>$2000.00</b></StyledTableCell>
                                <StyledTableCell align="right"><b>$5000.00</b></StyledTableCell>
                            </StyledTableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
            </Box>
        )
    }
}

export default Report;