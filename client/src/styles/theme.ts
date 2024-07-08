import { createTheme } from "@mui/material";

export const f1Theme = createTheme({
    palette: {
        primary: {
            main: '#ff0000', // Ferrari Red
        },
        secondary: {
            main: '#000000', // Black
        },
        background: {
            default: '#f4f4f4', // Light grey background
        },
        text: {
            primary: '#ffffff', // White text
            secondary: '#ff0000', // Red text
        },
    },
    typography: {
        fontFamily: 'Roboto, Arial, sans-serif',
        h1: {
            fontWeight: 700,
            color: '#ff0000',
        },
        h2: {
            fontWeight: 700,
            color: '#000000',
        },
        body1: {
            color: '#000000',
        },
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: '8px',
                    textTransform: 'none',
                },
                containedPrimary: {
                    backgroundColor: '#ff0000',
                    color: '#ffffff',
                    '&:hover': {
                        backgroundColor: '#cc0000',
                    },
                },
                outlinedPrimary: {
                    borderColor: '#ff0000',
                    color: '#ff0000',
                    '&:hover': {
                        backgroundColor: 'rgba(255, 0, 0, 0.1)',
                    },
                },
            },
        },
    },
});

export default f1Theme;