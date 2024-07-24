import { Box, Button, Card, CardActions, CardContent, CardMedia, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { getAvgPositionForRacers, getDriverRating } from "api/F1Api";    // average position
import { getDriverPerformanceSummary } from "api/F1Api"; // win percentage
import AveragePosition from "pages/Rankings/AveragePosition";
import Scorecard from "components/Scorecard";
export const DriverRatings = () => {
    
    const [driverSurname, setDriverSurname] = useState<string>("Norris");
    const [driverForename, setDriverForename] = useState<string>("Lando");

    const [showScorecard, setShowScorecard] = useState<boolean>(false);

    const [scorecardData, setScorecardData] = useState<any>({
        driverForename: "",
        driverSurname: "",
        averagePosition: [],
        driverPerformanceSummary: []
    });

    const submitQuery = async () => {
        const payload = {
            "lower_bound": 0,
            "upper_bound": 100
        }
        const payload1 = {
            "driver_surname": driverSurname,
            "driver_forename": driverForename
        }
        const response = await getAvgPositionForRacers();
        const response2 = await getDriverPerformanceSummary(payload);
        const response3 = await getDriverRating(payload1);
        setScorecardData({
            driverForename: driverForename,
            driverSurname: driverSurname,
            averagePosition: response["message"],
            driverPerformanceSummary: response2["message"]
        });
        setShowScorecard(true);
        
        console.log(response)
        console.log(response2)
        console.log(response3);

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
                <small>Examples: Lando Norris</small>
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
                    averagePosition={scorecardData.averagePosition}
                    driverPerformanceSummary={scorecardData.driverPerformanceSummary}
                />
            )}
        </Box>
    )
}

export default DriverRatings;