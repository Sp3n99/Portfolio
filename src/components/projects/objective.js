import { Box, Divider, List, ListItem, ListItemText, Typography } from '@mui/material'
import React from 'react'

const Objective = ({ objective }) => {

  return (
    <Box sx={{ flex: '2'}}>
        <ListItem>
            <ListItemText primary={<Typography fontSize="1.3rem">Objective:</Typography>} />
        </ListItem>
        <Divider variant="middle"/>
        <ListItem>
            <ListItemText primary={<Typography fontSize="1.15rem">{objective}</Typography>} />
        </ListItem>
    </Box>
  )
}

export default Objective