import { Box, IconButton } from "@mui/material";
import Projects from "../projects";
import "./landing.scss"
import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';

const  Landing = () => {
  return (
    <div className="landing">
        <div className="top">
            <div className="bar">
            <Box sx={{display: 'flex', flexWrap: 'wrap' , justifyContent: 'flex-end'}}>
                <IconButton href="https://github.com/Sp3n99" target="_blank">
                    <GitHubIcon sx={{fontSize:{lg: '50px', xl: '120px', xxl: '150px'}}}/>
                </IconButton>
                <IconButton href="https://www.linkedin.com/in/spencer-rasor/" target="_blank">
                    <LinkedInIcon sx={{fontSize:{lg: '50px', xl: '125px', xxl: '150px'}}}/>
                </IconButton>
                <IconButton href="https://www.facebook.com/spencerrasor1/" target="_blank">
                    <FacebookIcon sx={{fontSize:{lg: '50px', xl: '125px', xxl: '150px'}}}/>
                </IconButton>
            </Box>
            </div>
            <div className="cta-wrapper">
                <div className="spencer-wrapper">
                    <h1 className="spencer">Hi, I'm Spencer</h1>
                </div>
                <h2 className="call-to-action">I specialize in bringing your ideas to life</h2>
            </div>
        </div>
        <div className="floater">
            <div className="projects-wrapper">
                <Projects />
            </div>
        </div>
    </div>
  )
}

export default Landing;