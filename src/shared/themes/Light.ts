import {createTheme} from '@mui/material';


export const LightTheme = createTheme({
    palette: {
        primary: {
            main: "#80C683",
            dark: "#509556",
            light: "#b1f9b3",
            contrastText: "#000000",
        },
        secondary: {
            main: "#4fc2f7",
            dark: "#0092c4",
            light: "#8bf5ff",
            contrastText: "#000000",
        },
        background: {
            default: "#f7f6f3",
            paper: "#ffffff",
        }
    }
});