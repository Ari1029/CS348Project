import { Box, Button, Paper, Table, TableBody, TableCell, TableContainer, TableFooter, TableHead, TablePagination, TableRow, TextField, Typography } from "@mui/material";
import { getAvgPositionForRacers } from "api/F1Api";
import { useState } from "react";

type propTypes = {
    averagePosition: any[],
    setAveragePosition: (avgPos : any) => void
}
export const AveragePosition = ({averagePosition, setAveragePosition} : propTypes) => {
    const [page, setPage] = useState<number>(0);
    const [rowsPerPage, setRowsPerPage] = useState<number>(10);
    const handleChangePage = (event: React.MouseEvent<HTMLButtonElement> | null, newPage: number) => {
        setPage(newPage);
    }
    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    const submitQuery = async () => {
        const response = await getAvgPositionForRacers();
        setAveragePosition(response["message"]);
    }

    return (
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell><Typography sx={{ fontWeight: 600 }}>Driver</Typography></TableCell>
                            <TableCell align="right"><Typography sx={{ fontWeight: 600 }}>Average Position</Typography></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {averagePosition.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => (
                            <TableRow key={row[0] + " " + row[1]} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                <TableCell component="th" scope="row">
                                    {row[0]}
                                </TableCell>
                                <TableCell align="right">{row[1]}</TableCell>
                            </TableRow>
                        ))}
                        {averagePosition.length == 0 && (
                            <TableRow>
                                <TableCell colSpan={3} sx={{ textAlign: "center" }}>
                                    No data to display.
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                    <TableFooter>
                        <TableRow sx={{ borderTop: 1 }}>
                            <TablePagination
                                count={averagePosition.length}
                                page={page}
                                onPageChange={handleChangePage}
                                rowsPerPage={rowsPerPage}
                                onRowsPerPageChange={handleChangeRowsPerPage}
                            />
                        </TableRow>
                    </TableFooter>
                </Table>
            </TableContainer>
            <Button
                sx={{ maxWidth: "400px" }}
                variant="contained"
                onClick={submitQuery}
            >
                Get Average Positions
            </Button>
        </Box>
    )
}

export default AveragePosition;