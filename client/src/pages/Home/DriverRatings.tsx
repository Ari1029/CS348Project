import { Box, Button, Card, CardActions, CardContent, CardMedia, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { getDriverRating } from "api/F1Api";    // average position
import Scorecard from "components/Scorecard";
export const DriverRatings = () => {
    
    const [driverSurname, setDriverSurname] = useState<string>("Verstappen");
    const [driverForename, setDriverForename] = useState<string>("Max");

    const [showScorecard, setShowScorecard] = useState<boolean>(false);

    const [scorecardData, setScorecardData] = useState<any>({
        driverForename: "",
        driverSurname: "",
        data: []
    });

    const submitQuery = async () => {
        const payload = {
            "driver_surname": driverSurname.charAt(0).toUpperCase() + driverSurname.slice(1),
            "driver_forename": driverForename.charAt(0).toUpperCase() + driverForename.slice(1)
        }
        const response = await getDriverRating(payload);
        setScorecardData({
            driverForename: driverForename,
            driverSurname: driverSurname,
            data: response["message"][0]
        });
        setShowScorecard(true);
        
        console.log(response)
    }

    return (
        <Box sx={{ display: "flex", flexDirection: "row", gap: 4 }}>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                <TextField
                    value={driverForename}
                    onChange={(event) => setDriverForename(event.target.value)}
                    label="Driver Forename"
                    variant="standard"
                    sx={ {width: "400px"} }
                />
                <TextField
                    value={driverSurname}
                    onChange={(event) => setDriverSurname(event.target.value)}
                    label="Driver Surname"
                    variant="standard"
                    sx={ {width: "400px"} }
                />
                <small>Examples: Max Verstappen</small>
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