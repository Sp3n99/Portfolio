import { Box, Paper, TextField, Typography, useMediaQuery } from '@mui/material'
import React from 'react'
import theme from '../../styles/theme'
import DesktopFooter from './desktopFooter'
import MobileFooter from './mobileFooter'

const Footer = () => {

    /* matches returns true if user is on a mobile device */
    const matches = useMediaQuery(theme.breakpoints.down('lg'));

    return(<DesktopFooter />)
  
}

export default Footer