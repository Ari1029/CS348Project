import { Box, Button, Paper, Table, TableBody, TableCell, TableContainer, TableFooter, TableHead, TablePagination, TableRow, TextField, Typography } from "@mui/material";
import { getDriverPerformanceSummary } from "api/F1Api";
import { useEffect, useState } from "react";

type propTypes = {
    driverPerformanceSummary: any[],
    setDriverPerformanceSummary: (poos : any) => void
}
export const DriverPerformanceSummary = ({driverPerformanceSummary, setDriverPerformanceSummary} : propTypes) => {
    const [page, setPage] = useState<number>(0);
    const [rowsPerPage, setRowsPerPage] = useState<number>(5);
    const handleChangePage = (event: React.MouseEvent<HTMLButtonElement> | null, newPage: number) => {
        setPage(newPage);
    }
    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    const [querySuccess, setQuerySuccess] = useState<boolean>(false);
    const [lowerBound, setLowerBound] = useState<number>(20);
    const [upperBound, setUpperBound] = useState<number>(100);
    const submitQuery = async () => {
        try {
            const response = await getDriverPerformanceSummary({
                lower_bound: lowerBound,
                upper_bound: upperBound,
            });
            setDriverPerformanceSummary(response["message"]);
            setQuerySuccess(true);
        }
        catch (e) {
            setDriverPerformanceSummary([]);
            console.log(e);
            setQuerySuccess(false);
        }
    }

    const onChangeLowerBound = (newVal : string) => {
        const newNum = parseInt(newVal);
        if ((newNum >= 0 && newNum <= 100) || isNaN(newNum)) { //earliest date in DB
            setLowerBound(newNum);
        }
    }
    const onChangeUpperBound = (newVal : string) => {
        const newNum = parseInt(newVal);
        if ((newNum >= 0 && newNum <= 100) || isNaN(newNum)) { //earliest date in DB
            setUpperBound(newNum);
        }
    }

    return (
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
                <TextField
                    value={lowerBound}
                    type="number"
                    onChange={(event) => onChangeLowerBound(event.target.value)}
                    label="Lower Bound"
                    variant="standard"
                    sx={{ width: "48%" }}
                />
                <TextField
                    value={upperBound}
                    type="number"
                    onChange={(event) => onChangeUpperBound(event.target.value)}
                    label="UpperBound"
                    variant="standard"
                    sx={{ width: "48%" }}
                />
            </Box>
            <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
                <Button
                    sx={{ maxWidth: "400px", width: "25%" }}
                    variant="contained"
                    onClick={submitQuery}
                >
                    Submit
                </Button>
                <small>
                    {`Query Status: ${querySuccess ? "Success" : "Not Completed"}`}
                </small>
            </Box>
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell><Typography sx={{ fontWeight: 600 }}>Driver</Typography></TableCell>
                            <TableCell align="right"><Typography sx={{ fontWeight: 600 }}>Win Percentage</Typography></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {driverPerformanceSummary.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => (
                            <TableRow key={row[0]} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                <TableCell component="th" scope="row">
                                    {row[1] + " " + row[2]}
                                </TableCell>
                                <TableCell align="right">{parseFloat(row[6]).toFixed(2) + "%"}</TableCell>
                            </TableRow>
                        ))}
                        {driverPerformanceSummary.length == 0 && (
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
                                count={driverPerformanceSummary.length}
                                page={page}
                                onPageChange={handleChangePage}
                                rowsPerPage={rowsPerPage}
                                rowsPerPageOptions={[5, 10, 25, 50, 100]}
                                onRowsPerPageChange={handleChangeRowsPerPage}
                            />
                        </TableRow>
                    </TableFooter>
                </Table>
            </TableContainer>
        </Box>
    )
}

export default DriverPerformanceSummary;