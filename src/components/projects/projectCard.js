import { Box, Card, CardActions, CardContent, CardMedia, Collapse, IconButton, Typography } from '@mui/material'
import React, { useState } from 'react'
import { ProjectCardContainer } from '../../styles/projects'
import GitHubIcon from '@mui/icons-material/GitHub';
import PublicIcon from '@mui/icons-material/Public';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandMore from '@mui/icons-material/ExpandMore';
import ToolsList from './toolsList';
import Objective from './objective';
import "./projectCard.scss";

const ProjectCard = ({ title, description, tools, objective, img, site, github}) => {

  const [expanded, setExpanded] = useState(false);

  const expandHandler = () => {
    setExpanded(!expanded);
  }

  const image = require(`../../images/${img}`);

  return (
    <Card sx={{borderRadius: '30px', backgroundColor: 'white', border: '20px solid #8b94a8'}}className="card">
      <CardMedia component="img" sx={{height: {xs: '280px', xl: '400px', xxl: '600px'}}} image={image} className="card-media">
      </CardMedia>
      <CardContent sx={{minHeight: {xs: '150px', lg: '150px', xl: '250px', xxl: '400px'}}}>
        <Typography variant="h5" sx={{fontSize: {xs: '24px', md: '28px', xl: '40px', xxl: '76px'}}} fontWeight="600" color="rgb(78, 89, 113)">
          {title}
        </Typography>
        <Typography variant="body2" sx={{pt: '6px', fontSize: {xs: '20px', md: '22px', xl: '36px', xxl: '66px'}, fontWeight: '500', color: 'black'}}>
          {description}
        </Typography>
      </CardContent>
      <CardActions sx={{display: 'flex', justifyContent: 'space-between', height: {xs: '50px', xl: '100px', xxl: '200px'}}}>
        <Box>
          <IconButton href={site} target="_blank">
              <PublicIcon sx={{color:"#8b94a8", fontSize: {xs: '24px', md: '28px', xl: '40px', xxl: '76px'}}}/>
            </IconButton>
            <IconButton href={github} target="_blank">
              <GitHubIcon sx={{color:"#8b94a8", fontSize: {xs: '24px', md: '28px', xl: '40px', xxl: '76px'}}}/>
            </IconButton>
        </Box>
        <IconButton onClick={expandHandler}>
          <ExpandMore expand={expanded.toString()} aria-expanded={expanded} aria-label="show more" sx={{color:"#8b94a8", fontSize: {xs: '24px', md: '28px', xl: '40px', xxl: '76px'}}}>
              <ExpandMoreIcon />
          </ExpandMore>
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <Box sx={{display: 'flex', flexWrap: 'wrap'}}>
          <ToolsList tools={tools}/>
          <Objective objective={objective}/>
        </Box>
      </Collapse>
    </Card>
  )
}

export default ProjectCard