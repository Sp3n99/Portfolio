import { createTheme } from "@mui/material";


export const Colors = {
    primary: "#FDE74C",
    secondary: "#FF784F",
    black: "#050517",
    shadowBlue: "#7D8CA3",
    mediumBlue: "#8075FF",
    light: "#fde439"
}

const theme = createTheme({
    palette: {
        primary: {
            main: 
                Colors.primary
            },
        secondary: {
            main:
                Colors.secondary
        }
    },
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 900,
            lg: 1200,
            xl: 1620
        }
    }
})

export default theme