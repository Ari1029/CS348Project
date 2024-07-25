import { Box, Button, Typography, Autocomplete, TextField } from "@mui/material";
import { useState } from "react";
import { getConsecutiveWins } from "api/F1Api";
import { drivers } from 'data'; // Import from data file

export const ConsecutiveWins = ({consecutiveWins, setConsecutiveWins}) => {
    const [driverName, setDriverName] = useState("Max Verstappen");

    const submitQuery = async () => {

        if(driverName.split(' ').length != 2) { return; }
        let driverForename = driverName.split(' ')[0];
        let driverSurname = driverName.split(' ')[1];

        const payload = {
            "driver_surname": driverSurname.charAt(0).toUpperCase() + driverSurname.slice(1),
            "driver_forename": driverForename.charAt(0).toUpperCase() + driverForename.slice(1)
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
                    options={drivers}
                    value={driverName}
                    onInputChange={(event, newValue) => {
                        setDriverName(newValue);
                    }}
                    renderInput={(params) => <TextField {...params} label="Driver Name" variant="standard" error={driverName.split(' ').length != 2} helperText={driverName.split(' ').length != 2 ? "Invalid input" : ""}/>}
                    sx={{ width: "400px" }}
                    
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
