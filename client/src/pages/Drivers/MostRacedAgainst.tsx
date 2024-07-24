import { Box, Button, TextField, Typography } from "@mui/material";
import { useState } from "react"
import { getMostRacedAgainst } from "api/F1Api";

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
        console.log(response)
    }

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
            <small>Examples: Fernando Alonso</small>
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

export default MostRacedAgainst;