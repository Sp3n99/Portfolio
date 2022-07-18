import { Box, styled } from "@mui/material";

export const ProjectsContainer = styled(Box)(()=>({
    display: 'flex',
    width: '100%',
    justifyContent: 'center',
}));

export const ProjectCardContainer = styled(Box)(()=>({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    flexDirection: 'column'
}));