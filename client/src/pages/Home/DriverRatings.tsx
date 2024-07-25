import { Box, Button, TextField, Autocomplete, Typography } from "@mui/material";
import { useState } from "react";
import { getDriverRating } from "api/F1Api";
import Scorecard from "components/Scorecard";
import { drivers } from 'data'; // Import from data file

export const DriverRatings = () => {
    const [driverName, setDriverName] = useState("Max Verstappen");
    const [showScorecard, setShowScorecard] = useState(false);
    const [scorecardData, setScorecardData] = useState({
        driverForename: "",
        driverSurname: "",
        data: []
    });

    const submitQuery = async () => {

        if(driverName.split(' ').length != 2) { return; }
        let driverForename = driverName.split(' ')[0];
        let driverSurname = driverName.split(' ')[1];

        const payload = {
            "driver_surname": driverSurname.charAt(0).toUpperCase() + driverSurname.slice(1),
            "driver_forename": driverForename.charAt(0).toUpperCase() + driverForename.slice(1)
        }
        const response = await getDriverRating(payload);
        setScorecardData({
            driverForename: driverForename,
            driverSurname: driverSurname,
            data: response.message[0]
        });
        setShowScorecard(true);
    }

    return (
        <Box sx={{ display: "flex", flexDirection: "row", gap: 4 }}>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                <Box>
                    <Typography fontStyle="italic">Special Feature</Typography>
                    <Typography sx={{ fontSize: "32px", fontWeight: 600 }}>Driver Ratings</Typography>
                </Box>
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
                <Button
                    sx={{ maxWidth: "400px" }}
                    variant="contained"
                    onClick={submitQuery}
                >
                    Submit
                </Button>
            </Box>

            {/* RESULT */}
            {showScorecard && (
                <Scorecard
                    driverForename={scorecardData.driverForename}
                    driverSurname={scorecardData.driverSurname}
                    data={scorecardData.data}
                />
            )}
        </Box>
    )
}

export default DriverRatings;
