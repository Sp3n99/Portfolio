import { Box, Divider, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography } from '@mui/material';
import React from 'react';
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';

const ToolsList = ({ tools }) => {
    

  return (
    <Box sx={{flexBasis: {xs: '100%', 'lg': '20%', xl: '35%'}}}>
        <ListItem>
                <ListItemText primary={<Typography sx={{fontSize: {xs: '24px', md: '26px', xl: '36px', xxl: '64px'}, paddingLeft: {xs: '0', xl: '5%'}}}>Tools:</Typography>} />
        </ListItem>
        <Divider variant = "middle" />
        {
                tools.map((tool, index) => (
                        <ListItem key={index}>
                                <ListItemText primary={<Typography sx={{fontSize: {xs: '20px', md: '22px', xl: '32px', xxl: '46px'}, paddingLeft: {xs: '0', xl: '5%'}}}>{tool}</Typography>} />
                        </ListItem>
                )) 
        }
    </Box>
  )
}

export default ToolsList