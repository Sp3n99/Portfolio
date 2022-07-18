import { Box, IconButton, Typography } from '@mui/material'
import React from 'react'
import { Colors } from '../../styles/theme'
import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import { Name } from '../../styles/appbar';


const Actions = () => {
  return (
        <div className="actions">
            <Box sx={{flex: '1', display: 'flex', flexWrap: 'wrap' , justifyContent: 'flex-end'}}>
                <IconButton href="https://github.com/Sp3n99" target="_blank">
                    <GitHubIcon />
                </IconButton>
                <IconButton href="https://www.linkedin.com/in/spencer-rasor/" target="_blank">
                    <LinkedInIcon />
                </IconButton>
                <IconButton href="https://www.facebook.com/spencerrasor1/" target="_blank">
                    <FacebookIcon />
                </IconButton>
            </Box>
        </div>
  )
}

export default Actions