import { Box, Button, TextField, Typography } from "@mui/material";
import { useState } from "react"
import { getFastestLap } from "api/F1Api";

type propTypes = {
    fastestLap: number,
    setFastestLap: (lap : number) => void
}
export const FastestLap = ({fastestLap, setFastestLap} : propTypes) => {
    const [raceName, setRaceName] = useState<string>("Monaco Grand Prix");
    const [raceYear, setRaceYear] = useState<number>(2023);
    const [driverSurname, setDriverSurname] = useState<string>("Hamilton");
    const [driverForename, setDriverForename] = useState<string>("Lewis");

    const onChangeRaceYear = (newVal : string) => {
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
                <TextField
                    value={raceName}
                    onChange={(event) => setRaceName(event.target.value)}
                    label="Race Name"
                    variant="standard"
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
            <Button
                sx={{ maxWidth: "400px" }}
                variant="contained"
                onClick={submitQuery}
            >
                Submit
            </Button>
            <Typography sx={{ fontSize: "24px", fontWeight: 600 }}>
                {`Result: ${fastestLap/1000}`} Seconds 
            </Typography>
        </Box>
    )
}

export default FastestLap;