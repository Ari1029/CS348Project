import { Box, Button, Typography, Autocomplete, TextField } from "@mui/material";
import { useState } from "react";
import { getConsecutiveWins } from "api/F1Api";
import { drivers } from 'data'; // Import from data file

export const ConsecutiveWins = ({consecutiveWins, setConsecutiveWins}) => {
    const [driverSurname, setDriverSurname] = useState<string>("Verstappen");
    const [driverForename, setDriverForename] = useState<string>("Max");

    const submitQuery = async () => {
        const payload = {
            "driver_surname": driverSurname,
            "driver_forename": driverForename
        }
        const response = await getConsecutiveWins(payload);
        setConsecutiveWins(response["message"]);
        console.log(response);
    }

    console.log(consecutiveWins);

    return (
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
                <Autocomplete
                    freeSolo
                    options={drivers.map(option => option.forename)}
                    value={driverForename}
                    onChange={(event, newValue) => {
                        setDriverForename(newValue);
                        const matchedDriver = drivers.find(driver => driver.forename === newValue);
                        setDriverSurname(matchedDriver ? matchedDriver.surname : "");
                    }}
                    onFocus={() => {
                        setDriverForename("");
                        setDriverSurname("");
                    }}
                    renderInput={(params) => <TextField {...params} label="Driver Forename" variant="standard" />}
                    sx={{ width: "48%" }}
                />
                <Autocomplete
                    freeSolo
                    options={drivers.map(option => option.surname)}
                    value={driverSurname}
                    onChange={(event, newValue) => {
                        setDriverSurname(newValue);
                        const matchedDriver = drivers.find(driver => driver.surname === newValue);
                        setDriverForename(matchedDriver ? matchedDriver.forename : "");
                    }}
                    onFocus={() => {
                        setDriverForename("");
                        setDriverSurname("");
                    }}
                    renderInput={(params) => <TextField {...params} label="Driver Surname" variant="standard" />}
                    sx={{ width: "48%" }}
                />
            </Box>
            <small>Examples: Max Verstappen (query is recursive, may take longer)</small>
            <Button
                sx={{ maxWidth: "400px" }}
                variant="contained"
                onClick={submitQuery}
            >
                Submit
            </Button>
            <Typography sx={{ fontSize: "24px", fontWeight: 600 }}>
                {`Result: ${consecutiveWins.length ? `${consecutiveWins[0][1]} Consecutive Wins` : 'No Data'}`}
            </Typography>
        </Box>
    )
}

export default ConsecutiveWins;
