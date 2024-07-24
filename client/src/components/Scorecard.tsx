import { Box, Button, Card, CardActions, CardContent, CardMedia, TextField, Typography } from "@mui/material";

export const Scorecard = ({driverForename, driverSurname, averagePosition, driverPerformanceSummary}) => {

    const driverNames = [
        'Max_Verstappen',
        'Lewis_Hamilton',
        'Charles_Leclerc',
        'Carlos_Sainz',
        'Sergio_Perez',
        'George_Russell',
        'Lando_Norris',
        'Daniel_Ricciardo',
        'Esteban_Ocon',
        'Pierre_Gasly',
        'Fernando_Alonso',
        'Lance_Stroll',
        'Valtteri_Bottas',
        'Zhou_Guanyu',
        'Kevin_Magnussen',
        'Nico_Hulkenberg',
        'Alexander_Albon',
        'Logan_Sargeant',
        'Oscar_Piastri',
        'Yuki_Tsunoda'
    ]

    if (!driverNames.some(name => name.toLowerCase() === (driverForename + "_" + driverSurname).toLowerCase())) {
        driverForename = "Generic";
        driverSurname = "F1";
    } else {
        driverForename = driverForename.charAt(0).toUpperCase() + driverForename.slice(1);
        driverSurname = driverSurname.charAt(0).toUpperCase() + driverSurname.slice(1);
    }

    return (
        <Box sx={{ display: "flex", flexDirection: "row", gap: 2 }}>
            {/* RESULT */}
            <Card sx={{ maxWidth: 400 }}>
                <CardMedia
                    component="img"
                    sx={{ height: 400 }}
                    image={require(`../assets/driverpics/${driverForename}_${driverSurname}.webp`)}
                    title="driver image"
                />
                <CardContent>
                    <Typography gutterBottom variant="h4" component="div">
                        <strong>{driverForename} {driverSurname}</strong>
                    </Typography>
                    <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: 'baseline' }}>
                        <Typography gutterBottom variant="h1" component="div">
                            <strong>69</strong>
                        </Typography>
                        <Typography gutterBottom variant="h4" component="div">
                            Rating
                        </Typography>
                    </Box>
                    <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
                        {averagePosition.filter((position) => position[1] === driverForename && position[2] === driverSurname).map((position) => (
                            <Typography key={position[0]} variant="h6" color="text.secondary">
                                Avg Pos: {parseFloat(position[3]).toFixed(2)}
                            </Typography>
                        ))}
                        <Typography variant="h6" color="text.secondary">Ur mom</Typography>
                        <Typography variant="h6" color="text.secondary">Ur mom</Typography>
                    </Box>
                </CardContent>
            </Card>
        </Box>
    )
}

export default Scorecard;