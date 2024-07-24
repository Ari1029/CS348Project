import { Box, Button, TextField, Typography } from "@mui/material";
import { useState } from "react"
import { getConsecutiveWins } from "api/F1Api";

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
        console.log(response)
    }
    console.log(consecutiveWins)

    return (
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
                <TextField
                    value={driverForename}
                    onChange={(event) => setDriverForename(event.target.value)}
                    label="Driver Forename"
                    variant="standard"
                    sx={{ width: "48%" }}
                />
                <TextField
                    value={driverSurname}
                    onChange={(event) => setDriverSurname(event.target.value)}
                    label="Driver Surname"
                    variant="standard"
                    sx={{ width: "48%" }}
                />
            </Box>
            <small>Examples: Max Verstappen (query is recursive, may be slow)</small>
            <Typography sx={{ fontSize: "24px", fontWeight: 600 }}>
                {`Result: ${consecutiveWins[0][1]} Consecutive Wins`} 
            </Typography>
            <Button
                sx={{ maxWidth: "400px" }}
                variant="contained"
                onClick={submitQuery}
            >
                Submit
            </Button>
        </Box>
    )
}

export default ConsecutiveWins;