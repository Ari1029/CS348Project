import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import { Button } from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useTheme } from '@emotion/react';
import f1Theme from 'styles/theme';


const pages = ['Home', 'Racers', 'Constructors'];
const nav = ["/", "/racers", "/constructors"];

const Topbar = () => {
    const navigate = useNavigate();
    const location = useLocation();

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
                            sx={{
                                my: 2,
                                color: 'white',
                                display: 'block',
                                px: 2,
                                backgroundColor: location.pathname === nav[index] ? f1Theme.palette.secondary.dark : null,
                                '&:hover': {
                                    backgroundColor: location.pathname === nav[index] ? f1Theme.palette.secondary.dark : f1Theme.palette.action.hover,
                                },
                            }}
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