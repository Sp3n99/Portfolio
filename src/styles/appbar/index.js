import { AppBar, Box, styled, Typography } from "@mui/material";


export const AppBarContainer = styled(AppBar)(()=>({
    position: 'static'
}));

export const Title = styled(Typography)(({ theme }) => ({
    fontSize: "3rem",
    [theme.breakpoints.down('md')] : {
        fontSize: "1.5rem",
    }
}));

export const Name = styled(Typography)(({ theme }) => ({
    fontSize: "2rem",
    [theme.breakpoints.down('md')]: {
        fontSize: "1.4rem"
    }
}));    