import { Box, Card, CardActions, CardContent, CardMedia, Collapse, IconButton, Typography } from '@mui/material'
import React, { useState } from 'react'
import { ProjectCardContainer } from '../../styles/projects'
import ProjectDescription from './projectDescription'
import pic from "../../images/dashboard.png"
import GitHubIcon from '@mui/icons-material/GitHub';
import PublicIcon from '@mui/icons-material/Public';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandMore from '@mui/icons-material/ExpandMore';
import ToolsList from './toolsList';
import Objective from './objective';
import "./projectCard.scss";

const ProjectCard = ({ title, description, tools, objective, img}) => {

  const [expanded, setExpanded] = useState(false);

  const expandHandler = () => {
    setExpanded(!expanded);
  }

  const image = require(`../../images/${img}`);

  return (
    <Card className="card">
      <CardMedia component="img" height="280" image={image} className="card-media">
      </CardMedia>
      <CardContent sx={{minHeight: '150px'}}>
        <Typography variant="h5" fontSize="28px" fontWeight="600" color="#4B3D2E">
          {title}
        </Typography>
        <Typography variant="body2" sx={{pt: '6px', fontSize: '22px', fontWeight: '500'}}>
          {description}
        </Typography>
      </CardContent>
      <CardActions sx={{display: 'flex', justifyContent: 'space-between'}}>
        <Box>
          <IconButton>
              <PublicIcon />
            </IconButton>
            <IconButton>
              <GitHubIcon />
            </IconButton>
        </Box>
        <IconButton onClick={expandHandler}>
          <ExpandMore expand={expanded.toString()} aria-expanded={expanded} aria-label="show more">
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