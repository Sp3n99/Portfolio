import React from 'react'
import { Box, IconButton, Paper, TextField, Typography } from '@mui/material'
import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';

const DesktopFooter = () => {
  return (
    <Box sx={{display: 'flex', justifyContent: 'center', backgroundColor: 'rgba(119,128,148, .9)', pb: '.5%'}}>
            <Box sx={{width:{xs: '90%', lg: '60%'}, display: 'flex', justifyContent: 'center', alignItems: 'center', pt: '1%', pl: '2%'}}>
                <Typography sx={{pr: '2%', color: 'white', fontSize: {xs: '16px', lg: '24px', xl: '30px', xxl: '40px'}}}>{"I developed this website using React, SCSS, and MUI. Feel free to check out the code :)"}</Typography>
                <IconButton sx={{ml: '0', pl: '0', color: 'white', fontSize: {xs: '16px', lg: '24px'}}}href="https://github.com/Sp3n99" target="_blank">
                    <GitHubIcon sx={{pb: '0', fontSize: {xs: '16px', lg: '24px', xl: '30px', xxl: '40px'}}}href="https://github.com/Sp3n99/Portfolio" target="_blank"/>
                </IconButton>
            </Box>
        </Box>
  )
}

export default DesktopFooter