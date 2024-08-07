import { Box, Button, TextField, Typography, Autocomplete } from "@mui/material";
import { useState } from "react";
import { getFastestLap } from "api/F1Api";
import { drivers, raceNames } from 'data'; // Import from data file

type propTypes = {
    fastestLap: number,
    setFastestLap: (lap: number) => void
}

export const FastestLap = ({fastestLap, setFastestLap}: propTypes) => {
    const [raceName, setRaceName] = useState<string>("Monaco Grand Prix");
    const [raceYear, setRaceYear] = useState<number>(2023);
    const [driverName, setDriverName] = useState("Lewis Hamilton");

    const onChangeRaceYear = (newVal: string) => {
        const newNum = parseInt(newVal);
        if (newNum >= 1950) { //earliest date in DB
            setRaceYear(newNum);
        }
    }

    const submitQuery = async () => {

        if(driverName.split(' ').length != 2) { return; }
        let driverForename = driverName.split(' ')[0];
        let driverSurname = driverName.split(' ')[1];

        const payload = {
            "race_name": raceName,
            "race_year": raceYear,
            "driver_surname": driverSurname.charAt(0).toUpperCase() + driverSurname.slice(1),
            "driver_forename": driverForename.charAt(0).toUpperCase() + driverForename.slice(1)
        }
        const response = await getFastestLap(payload);
        setFastestLap(response["message"]);
    }

    return (
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
                <Autocomplete
                    freeSolo
                    options={raceNames}
                    value={raceName}
                    onChange={(event, newValue) => {
                        setRaceName(newValue);
                    }}
                    renderInput={(params) => <TextField {...params} label="Race Name" variant="standard" />}
                    sx={{ width: "48%" }}
                />
                <TextField
                    value={raceYear}
                    type="number"
                    onChange={(event) => onChangeRaceYear(event.target.value)}
                    label="Race Year"
                    variant="standard"
                    sx={{ width: "48%" }}
                />
            </Box>
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
            <small>Examples: Monaco Grand Prix, Lewis Hamilton</small>
            <Button
                sx={{ maxWidth: "400px" }}
                variant="contained"
                onClick={submitQuery}
            >
                Submit
            </Button>
            <Typography sx={{ fontSize: "24px", fontWeight: 600 }}>
                {`Result: ${fastestLap / 1000}`} Seconds 
            </Typography>
        </Box>
    )
}

export default FastestLap;
