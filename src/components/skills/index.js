import { Box, IconButton, TextField, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import "./skills.scss"
import reactlogo from "../../logos/reactlogo.png";
import nodelogo from "../../logos/nodelogo.png";
import scsslogo from "../../logos/scsslogo.png";
import jslogo from "../../logos/jslogo.png";
import firebaselogo from "../../logos/firebaselogo.png";
import mongologo from "../../logos/mongologo.png";
import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';

const Skills = () => {

    const faders = document.querySelectorAll('.fade-in');
    const appearOptions = {
      threshold: 1,
    };

    const appearOnScroll = new IntersectionObserver((entries, appearOnScroll) => {
      entries.forEach(entry => {
        console.log(entry.target.classList);
        if(!entry.isIntersecting){
          return;
        }

        entry.target.classList.add('appear');
        appearOnScroll.unobserve(entry.target);
      });

    }, appearOptions);

    useEffect(() => {
        const faders = document.querySelectorAll('.fade-in');
        const appearOptions = {
          threshold: 1,
        };
    
        const appearOnScroll = new IntersectionObserver((entries, appearOnScroll) => {
          entries.forEach(entry => {
            console.log(entry.target.classList);
            if(!entry.isIntersecting){
              return;
            }
    
            entry.target.classList.add('appear');
            appearOnScroll.unobserve(entry.target);
          });
    
        }, appearOptions);
  
        faders.forEach(fader => {
          appearOnScroll.observe(fader);
        });
       
      }, [faders, appearOnScroll, ])



  return (
    <Box sx={{flexDirection: {xs: 'column', lg: 'row'}, height: '100%', pt:{xs: '3%', lg: '1%'}, pb:{xs: '3%', lg: '1%'}}} className="skills">
        <Box className="skillsWrapper" sx={{flex: '2'}}>
            <Box className="skillsHeader">
                <Typography variant="h2" color="#4B3D2E">Skills</Typography>
            </Box>
            <Box className="logosWrapper">
                <Box className="left">
                  <div className="fade-in logo-wrapper">
                    <img src={jslogo} className="logo" alt="javascript logo"></img>
                    <h4 className="title">JavaScript</h4>
                  </div>
                  <div className="fade-in logo-wrapper">
                    <img src={reactlogo} className="logo react" alt="react logo"></img>
                    <h4 className="title">React</h4>
                  </div>
                  <div className="fade-in logo-wrapper">
                    <img src={scsslogo} className="logo scss" alt="scss logo"></img> 
                    <h4 className="title">SCSS</h4>
                  </div>
                </Box>
                <Box className="right">
                  <div className="fade-in logo-wrapper">
                      <img src={nodelogo} className="logo node" alt="node logo"></img> 
                      <h4 className="title">Node</h4>
                  </div>
                  <div className="fade-in logo-wrapper firebase-wrapper">
                      <img src={firebaselogo} className="logo firebase" alt="firebase logo"></img> 
                      <h4 className="title">Firebase</h4>
                  </div>
                  <div className="fade-in logo-wrapper firebase-wrapper">
                      <img src={mongologo} className="logo mongo" alt="mongodb logo"></img> 
                      <h4 className="title">Mongo</h4>
                  </div>
                </Box>
            </Box>
          </Box>


        <Box sx={{height: '100%', display: 'flex', flexDirection: 'column', flex: '3', pl:{xs: '10px', lg: '50px'}, pt: {xs: '3%', lg: '0%'}, width: '100%', alignItems: 'center'}}>

                <Typography variant="h2" sx={{height: '20%', display: 'flex', alignItems: 'center', color: '#4B3D2E', width: '80%'}}>About Me</Typography>
                <Box sx={{height: '80%', display: 'flex', flexDirection: 'column', justifyContent: 'space-around', width: '80%'}}>
                    <Typography sx={{fontSize: '1.5rem'}}>Hi, I'm Spencer Rasor. I'm a full stack web developer with a background in computer science.</Typography>
                    <Typography sx={{fontSize: '1.5rem'}}>ASDF</Typography>
                    <Box sx={{}}>
                    <IconButton sx={{pl: '0'}}href="https://github.com/Sp3n99" target="_blank">
                        <GitHubIcon />
                    </IconButton>
                    <IconButton href="https://www.linkedin.com/in/spencer-rasor/" target="_blank">
                        <LinkedInIcon />
                    </IconButton>
                    <IconButton href="https://www.facebook.com/spencerrasor1/" target="_blank">
                        <FacebookIcon />
                    </IconButton>
                    </Box>
                </Box>
        </Box>
        <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', pt:  {xs: '3%', lg: '0%'}, pb: {xs: '4%', lg: '1%'}, flex: '2', height: '100%'}}>
                <Typography variant="h2" sx={{alignSelf: 'flex-start', pl: '10%', color: '#4B3D2E', pb: {xs: '0%', lg: '3%'}}}>Contact Me</Typography>
                <Box sx={{display: 'flex', alignSelf: 'center', width: '80%'}}>
                    <TextField sx={{mt: '1vh', flexBasis: '50%', pr: '1px'}}label="First Name" variant="outlined" />
                    <TextField sx={{mt: '1vh', flexBasis: '50%', pl: '1px', pr: '1px'}} label="Last Name" variant="outlined" />
                </Box>
                <TextField sx={{mt: '1vh', width: '80%'}} label="Email" variant="outlined" />
                <TextField sx={{mt: '1vh', width: '80%'}} label="Message" multiline minRows={4} maxRows={8} variant="outlined" />
            </Box>
    </Box>
  )
}

export default Skills