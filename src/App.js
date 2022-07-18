import logo from './logo.svg';
import './App.css';
import { UIProvider } from './context/ui';
import AppBar from './components/appbar';
import Projects from './components/projects';
import { ThemeProvider, useMediaQuery } from '@mui/material';
import theme from './styles/theme';
import Footer from './components/footer';
import Skills from "./components/skills"
import Landing from './components/landing';

function App() {

  const matches = useMediaQuery(theme.breakpoints.down('sm'));



  return (
    <ThemeProvider theme={theme}>
      <UIProvider>
        <Landing />
        <Skills />
        <Footer />
      </UIProvider>
    </ThemeProvider>
  );
}

export default App;
