import { Box, Button, TextField, Autocomplete } from "@mui/material";
import { useState } from "react";
import { getDriverRating } from "api/F1Api";
import Scorecard from "components/Scorecard";
import { drivers } from 'data'; // Import from data file

export const DriverRatings = () => {
    const [driverSurname, setDriverSurname] = useState("");
    const [driverForename, setDriverForename] = useState("");
    const [showScorecard, setShowScorecard] = useState(false);
    const [scorecardData, setScorecardData] = useState({
        driverForename: "",
        driverSurname: "",
        data: []
    });

    const submitQuery = async () => {
        const payload = {
            driver_surname: driverSurname.charAt(0).toUpperCase() + driverSurname.slice(1),
            driver_forename: driverForename.charAt(0).toUpperCase() + driverForename.slice(1)
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
                    sx={{ width: "400px" }}
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
