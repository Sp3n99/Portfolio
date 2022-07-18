import { Box, Container, Grid, Typography } from '@mui/material'
import React, { useState } from 'react'
import { ProjectsContainer } from '../../styles/projects'
import ProjectCard from './projectCard'
import { Colors } from '../../styles/theme'
import projectsData from "./projectsData.json"

const Projects = () => {

    const projects = projectsData.projects;

  return (
    <Box sx={{}}>
        <Box sx={{paddingTop: '16px'}}>
            <Typography sx={{textAlign: 'center', color: '#418434e', pt: '1vh', pb: '1vh'}}variant="h2">Projects</Typography>
        </Box>
        <Grid 
                container
                spacing={2}
                sx={{pl: {xs: '5%', sm: '15%'}, pr: {xs: '5%', sm: '15%'}, pt: '0', mt: '0', pb: {xs: '6%' , sm: '3%', lg: '1.5%'}}}
            >

                {
                    projects.map((project, index) => (
                        <Grid item xs={12} md={6} xl={4} key={index}>
                            <ProjectCard title={project.title} description={project.description} tools={project.tools} objective={project.objective} img={project.img}></ProjectCard>
                        </Grid>
                    ))
                }
        </Grid>
    </Box>
  )
}

export default Projects