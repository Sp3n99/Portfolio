import { Box, Button, Container, IconButton, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { AppBarContainer, Title } from '../../styles/appbar'
import { Colors } from '../../styles/theme'
import Actions from './actions'

const AppBar = () => {
  return (
    <AppBarContainer
      sx={{
        height: '',
        backgroundColor: 'rgba(98,70,69, .6)',
        width: '100%',
      }}
    >
      <Toolbar sx={{flex: '1', justifyContent: 'flex-end', alignItems: "center", height: '100%', borderTop: `1px solid ${Colors.shadowBlue}`}}>    
        <Actions />
      </Toolbar>
    </AppBarContainer>
  )
}

export default AppBar