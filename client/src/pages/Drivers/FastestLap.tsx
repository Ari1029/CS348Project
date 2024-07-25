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
    const [driverSurname, setDriverSurname] = useState<string>("Hamilton");
    const [driverForename, setDriverForename] = useState<string>("Lewis");

    const onChangeRaceYear = (newVal: string) => {
        const newNum = parseInt(newVal);
        if (newNum >= 1950) { //earliest date in DB
            setRaceYear(newNum);
        }
    }

    const submitQuery = async () => {
        const payload = {
            "race_name": raceName,
            "race_year": raceYear,
            "driver_surname": driverSurname,
            "driver_forename": driverForename
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
                    onFocus={() => {
                        setRaceName(""); // Reset race name on focus
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
