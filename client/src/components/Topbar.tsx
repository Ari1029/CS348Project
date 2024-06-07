import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';


const pages = ['Home', 'Grand Prix', 'Racers'];
const nav = ["/", "/gp", "/racers"];

const Topbar = () => {
    const navigate = useNavigate();

    const onClickPageButton = (index : number) => {
        navigate(nav[index]);
    }

    return (
        <AppBar position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters>

                <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                    {pages.map((page, index) => (
                        <Button
                            key={page}
                            onClick={() => onClickPageButton(index)}
                            sx={{ my: 2, color: 'white', display: 'block', px: 2 }}
                        >
                            {page}
                        </Button>
                    ))}
                </Box>

                </Toolbar>
            </Container>
        </AppBar>
    );
}

export default Topbar;