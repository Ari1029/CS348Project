import { Box, Button, Typography, Autocomplete, TextField } from "@mui/material";
import { useState } from "react";
import { getMostRacedAgainst } from "api/F1Api";
import { drivers } from 'data'; // Import from data file

export const MostRacedAgainst = ({mostRacedAgainst, setMostRacedAgainst}) => {
    const [driverName, setDriverName] = useState("Fernando Alonso");

    const submitQuery = async () => {

        if(driverName.split(' ').length != 2) { return; }
        let driverForename = driverName.split(' ')[0];
        let driverSurname = driverName.split(' ')[1];

        console.log(driverSurname, driverForename);
        const payload = {
            "driver_surname": driverSurname.charAt(0).toUpperCase() + driverSurname.slice(1),
            "driver_forename": driverForename.charAt(0).toUpperCase() + driverForename.slice(1)
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
                    options={drivers}
                    value={driverName}
                    onInputChange={(event, newValue) => {
                        setDriverName(newValue);
                    }}
                    renderInput={(params) => <TextField {...params} label="Driver Name" variant="standard" error={driverName.split(' ').length != 2} helperText={driverName.split(' ').length != 2 ? "Invalid input" : ""}/>}
                    sx={{ width: "400px" }}
                    
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
