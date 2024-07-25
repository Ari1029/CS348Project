import { Box, Button, Typography, Autocomplete, TextField } from "@mui/material";
import { useState } from "react";
import { getBestCircuitForConstructor } from "api/F1Api";
import { constructors } from 'data'; 

export const TopThreeCircuits = ({ data, setData }) => {
    const [constructorName, setConstructorName] = useState<string>("");

    const submitQuery = async () => {
        if (!constructorName) return; // Prevent calling the API without a constructor name
        const payload = {
            "constructor_name": constructorName.charAt(0).toUpperCase() + constructorName.slice(1)
        };
        try {
            const response = await getBestCircuitForConstructor(payload);
            setData(response["message"]);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
                <Autocomplete
                    freeSolo
                    options={constructors}
                    value={constructorName}
                    onInputChange={(event, newValue) => {
                        setConstructorName(newValue);
                    }}
                    renderInput={(params) => <TextField {...params} label="Constructor Name" variant="standard" />}
                    sx={{ width: "100%" }}
                />
            </Box>
            <small>Examples: Ferrari, McLaren, Mercedes, Red Bull</small>
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
                    {data && data.map((nameAndNumWins, index) => (
                        <li key={index}>
                            <div>{nameAndNumWins[0]}, {nameAndNumWins[1]} Wins</div>
                        </li>
                    ))}
                </ol>
            </Typography>
        </Box>
    );
};

export default TopThreeCircuits;
