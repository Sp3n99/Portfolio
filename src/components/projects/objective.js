import { Box, Divider, List, ListItem, ListItemText, Typography } from '@mui/material'
import React from 'react'

const Objective = ({ objective }) => {

  return (
    <Box sx={{ flex: '2'}}>
        <ListItem>
            <ListItemText primary={<Typography sx={{fontSize: {xs: '24px', md: '26px', xl: '36px', xxl: '64px'}}}>Objective:</Typography>} />
        </ListItem>
        <Divider variant="middle"/>
        <ListItem>
            <ListItemText primary={<Typography sx={{fontSize: {xs: '20px', md: '22px', xl: '32px', xxl: '46px'}}}>{objective}</Typography>} />
        </ListItem>
    </Box>
  )
}

export default Objective