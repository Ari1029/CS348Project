import { Box, Button, TextField, Typography } from "@mui/material";
import { useState } from "react"
import { getBestCircuitForConstructor } from "api/F1Api";

// type propTypes = {
//     data: {String, number},
//     setData: (varName : number) => void
// }

export const TopThreeCircuits = ({data, setData}) => {
    const [constructorName, setConstructorName] = useState<string>("Ferrari");

    const submitQuery = async () => {
        const payload = {
            "constructor_name": constructorName
        }
        const response = await getBestCircuitForConstructor(payload);
        setData(response["message"]);
    }

    return (
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
                <TextField
                    value={constructorName}
                    onChange={(event) => setConstructorName(event.target.value)}
                    label="Constructor Name"
                    variant="standard"
                    sx={{ width: "48%" }}
                />
            </Box>
            <Box>
                <small>Examples: Ferrari, McLaren, Mercedes, Red Bull</small>
            </Box>
            <Typography component={'span'} sx={{ fontSize: "24px", fontWeight: 600 }}>
                Result: 
                <ol>
                    {data.map(nameAndNumWins => (
                    <li key={nameAndNumWins[0]}>
                        <div>{nameAndNumWins[0]}, {nameAndNumWins[1]} Wins</div>
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

export default TopThreeCircuits;