import React from 'react'
import { Box, IconButton, Paper, TextField, Typography } from '@mui/material'
import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';

const MobileFooter = () => {
  return (
    <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', backgroundColor: 'rgba(250, 252, 250, 1)', pt: '1%', pb: '2%'}}>
            <Box sx={{width: '80%', display: 'flex', flexDirection: 'column', pt: '1%', pb: '2%'}}>
                <Typography variant="h6" sx={{pl: '0', pr: '0', pt: '0', m: '0', pb: '2'}}>About Me</Typography>
                <Typography sx={{}}>I'm an aspiring full stack web developer. I'm typing this so I can see how even it will look when there is more text occupying the space. This is filler text wow I love filler text so much oh my god.</Typography>
            </Box>

            <Box sx={{width: '80%', display: 'flex', flexDirection: 'column', alignItems: 'center', pt: '1%', pb: '1%'}}>
                <Box sx={{display: 'flex', width: '100%', justifyContent: 'space-between', p: '0'}}>
                <Typography variant="h6" sx={{alignSelf: 'flex-start'}}>Contact Me</Typography>
                    <Box sx={{display: 'flex', justifyContent: 'flex-end', alignItems: 'flex-end'}}>
                        <IconButton sx={{mt: '0', pt: '0', mb: '0'}} href="https://github.com/Sp3n99" target="_blank">
                            <GitHubIcon />
                        </IconButton>
                        <IconButton sx={{mt: '0', pt: '0'}} href="https://www.linkedin.com/in/spencer-rasor/" target="_blank">
                            <LinkedInIcon />
                        </IconButton>
                        <IconButton sx={{mt: '0', pt: '0'}} href="https://www.facebook.com/spencerrasor1/" target="_blank">
                            <FacebookIcon />
                        </IconButton>
                    </Box>
                </Box>
                <Box sx={{width: '100%', display: 'flex', alignSelf: 'flex-start'}}>
                    <TextField sx={{mt: '1vh', flexBasis: '50%', pr: '1px'}}label="First Name" variant="outlined" />
                    <TextField sx={{mt: '1vh', flexBasis: '50%', pl: '1px', pr: '1px'}} label="Last Name" variant="outlined" />
                </Box>
                <TextField sx={{mt: '1vh', width: '100%', pl: '1px'}} label="Email" variant="outlined" />
                <TextField sx={{mt: '1vh', width: '100%'}} label="Message" multiline maxRows={4} variant="outlined" />
            </Box>

        </Box>
  )
}

export default MobileFooter