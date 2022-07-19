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
        <Box sx={{paddingTop: {xs: '16px', lg: '20px', xl: '30px', xxl: '40px'}}}>
        </Box>
        <Grid 
                container
                spacing={4}
                sx={{pl: {xs: '5%', sm: '10%'}, pr: {xs: '5%', sm: '10%'}, pt: '0', mt: '0', pb: {xs: '6%' , sm: '3%', lg: '2.5%'}}}
            >

                {
                    projects.map((project, index) => (
                        <Grid item xs={12} md={6} lg={4} xl={4} key={index}>
                            <ProjectCard title={project.title} description={project.description} tools={project.tools} objective={project.objective} img={project.img} site={project.site} github={project.github}></ProjectCard>
                        </Grid>
                    ))
                }
        </Grid>
    </Box>
  )
}

export default Projects