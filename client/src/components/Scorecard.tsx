import { Box, Paper, Card, CardContent, CardMedia, Typography } from "@mui/material";

export const Scorecard = ({driverForename, driverSurname, data}) => {
    // HANDLE IMAGES

    let imgDriverForename = driverForename.charAt(0).toUpperCase() + driverForename.slice(1);
    let imgDriverSurname = driverSurname.charAt(0).toUpperCase() + driverSurname.slice(1);

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
        imgDriverForename = "Generic";
        imgDriverSurname = "F1";
    }
        
    // HANDLE DATA

    let nationality = "";
    let winRate = 0;
    let avgPos = 0;
    let totalRaces = 0;

    if (Array.isArray(data) && data.length > 5) {
        nationality = data[2];
        winRate = parseFloat(data[3]);
        avgPos = parseFloat(data[4]);
        totalRaces = parseInt(data[5]);
    }

    // all drivers start with 50 + 5 inflation; win rate given weight 10, avg pos given weight 30, total races given weight 10
    const rating = 55 + (winRate/47)*10 + ((20 - avgPos)/20)*30 + (totalRaces/391)*10;

    if (Array.isArray(data)) {
        return (
            <Box sx={{ display: "flex", flexDirection: "row", gap: 2 }}>
                {/* RESULT */}
                <Paper elevation={12}>
                    <Card sx={{ maxWidth: 400 , border: 5, borderColor: "white"}}>
                        <CardMedia
                            component="img"
                            sx={{ height: 400 }}
                            image={require(`../assets/driverpics/${imgDriverForename}_${imgDriverSurname}.webp`)}
                            title="driver image"
                        />
                        <CardContent>
                            <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: 'baseline' }}>
                                <Typography gutterBottom variant="h4" component="div">
                                    <strong>{driverForename.charAt(0).toUpperCase() + driverForename.slice(1)} {driverSurname.charAt(0).toUpperCase() + driverSurname.slice(1)}</strong>
                                </Typography>
                                <Typography gutterBottom variant="h5" component="div">
                                    {nationality}
                                </Typography>                           
                            </Box>
                            
                            <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: 'baseline' }}>
                                <Typography gutterBottom variant="h1" component="div" fontStyle={"italic"}>
                                    <strong>{rating.toFixed(0)}</strong>
                                </Typography>
                                <Typography gutterBottom variant="h5" component="div">
                                    Rating
                                </Typography>
                            </Box>
                            <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
                                <Typography variant="h6" fontStyle={"italic"}>
                                    <div>Win Rate</div>
                                    <strong>{winRate.toFixed(2)}%</strong>
                                </Typography>
                                <Typography variant="h6" fontStyle={"italic"}>
                                    <div>Avg Pos</div>
                                    <strong>{avgPos.toFixed(2)}</strong>
                                </Typography>
                                <Typography variant="h6" fontStyle={"italic"}>
                                    <div>Total Races</div>
                                    <strong>{totalRaces}</strong>
                                </Typography>
                            </Box>
                        </CardContent>
                    </Card>
                </Paper>
            </Box>
        )
    } else {
        return null;
    }
}

export default Scorecard;