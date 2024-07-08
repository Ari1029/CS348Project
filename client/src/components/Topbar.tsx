import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import { Button } from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';
import { useTheme } from '@emotion/react';
import f1Theme from 'styles/theme';

const pages = ['Home', 'Drivers', 'Constructors'];
const nav = ["/", "/drivers", "/constructors"];

const Topbar = () => {
    const f1Logo = require('../assets/f1_logo.png');
    const navigate = useNavigate();
    const location = useLocation();

    const onClickPageButton = (index: number) => {
        navigate(nav[index]);
    }

    return (
        <AppBar position="static">
            <Box sx={{ maxWidth: '100%', px: 3 }}>
                <Toolbar disableGutters>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex', gap: "1%" } }}>
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
                        <Box
                            component="img"
                            sx={{
                                height: 20,
                                width: 222,
                                justifySelf: "flex-end",
                                marginLeft: "auto",
                                alignSelf: "center",
                            }}
                            alt="F1 Logo"
                            src={f1Logo}
                        />
                    </Box>
                </Toolbar>
            </Box>
        </AppBar>
    );
}

export default Topbar;
