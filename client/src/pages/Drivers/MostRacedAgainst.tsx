import { Box, Button, Typography, Autocomplete, TextField } from "@mui/material";
import { useState } from "react";
import { getMostRacedAgainst } from "api/F1Api";
import { drivers } from 'data'; // Import from data file

export const MostRacedAgainst = ({mostRacedAgainst, setMostRacedAgainst}) => {
    const [driverSurname, setDriverSurname] = useState<string>("Alonso");
    const [driverForename, setDriverForename] = useState<string>("Fernando");

    const submitQuery = async () => {
        console.log(driverSurname, driverForename);
        const payload = {
            "driver_surname": driverSurname,
            "driver_forename": driverForename
        }
        const response = await getMostRacedAgainst(payload);
        setMostRacedAgainst(response["message"]);
        console.log(response);
    }

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
            <small>Examples: Fernando Alonso</small>
            <Button
                sx={{ maxWidth: "400px" }}
                variant="contained"
                onClick={submitQuery}
            >
                Submit
            </Button>
            <Typography component={'span'} sx={{ fontSize: "24px", fontWeight: 600 }}>
                Result: 
                <ol>
                    {mostRacedAgainst.map(item => (
                    <li key={item[1]}>
                        <div>{item[0]} {item[1]}, {item[2]} races together</div>
                    </li>
                    ))}
                </ol>
            </Typography>
        </Box>
    )
}

export default MostRacedAgainst;
