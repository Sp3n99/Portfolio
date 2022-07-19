import { Box, IconButton, TextField, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import "./skills.scss"
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
    <div className="skills">
      <div className="wrapper">
        <div className="left">
          <h3>About Me</h3>
          <div className="about">
            <p>Hi, I'm Spencer Rasor.<br></br>I'm a full stack web developer with a background in computer science and a passion for building websites.</p>
          </div>
          <div className="social">
            <p>Feel free to check me out on social media!<br></br>You can also reach me at<br></br>srasor10@gmail.com</p>
            <div className="icons">
                <IconButton href="https://github.com/Sp3n99" target="_blank">
                    <GitHubIcon className="icon" />
                </IconButton>
                <IconButton href="https://www.linkedin.com/in/spencer-rasor/" target="_blank">
                    <LinkedInIcon className="icon" />
                </IconButton>
                <IconButton href="https://www.facebook.com/spencerrasor1/" target="_blank">
                    <FacebookIcon className="icon" />
                </IconButton>
            </div>
          </div>
        </div>
        <div className="right">
          <h3>My Skills</h3>
          <div className="skills-wrapper">
            <div className="front">
              <h4>Front-End</h4>
              <ul>
                <li>Javascript</li>
                <li>React</li>
                <li>SCSS/SASS</li>
                <li>MUI</li>
              </ul>
            </div>
            <div className="back">
              <h4>Back-End</h4>
              <ul>
                <li>NodeJS</li>
                <li>ExpressJS</li>
                <li>Firebase</li>
                <li>MongoDB</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills