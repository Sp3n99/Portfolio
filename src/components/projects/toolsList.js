import { Box, Divider, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography } from '@mui/material';
import React from 'react';
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';

const ToolsList = ({ tools }) => {
    

  return (
    <Box sx={{flexBasis: {xs: '100%', 'lg': '20%'}}}>
        <ListItem>
                <ListItemText primary={<Typography fontSize="1.3rem">Tools:</Typography>} />
        </ListItem>
        <Divider variant = "middle" />
        {
                tools.map((tool, index) => (
                        <ListItem key={index}>
                                <ListItemText primary={<Typography fontSize="1.15rem">{tool}</Typography>} />
                        </ListItem>
                )) 
        }
    </Box>
  )
}

export default ToolsList