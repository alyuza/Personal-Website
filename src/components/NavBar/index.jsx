import { useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import MenuIcon from "@material-ui/icons/Menu";
import Button from "@material-ui/core/Button";
import useMediaQuery from "@mui/material/useMediaQuery";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import {
  List,
  ListItem,
  ListItemText,
  Collapse,
  Box,
} from "@mui/material";

export default function NavBar() {
  const small = useMediaQuery("(max-width:750px)");
  const full = useMediaQuery("(min-width:750px)");
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <AppBar position="fixed" style={{ backgroundColor: 'black' }}>
        <Toolbar >
          {small && (
            <>
              {/* Change Grid to div with display: flex */}
              <div style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
                <List>
                  <ListItem sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Typography
                      variant="h6"
                      color="inherit"
                      onClick={() => { setOpen(false) }}
                    >
                      ALYUZA.COM
                    </Typography>
                    <Button onClick={handleClick}>
                      <MenuIcon style={{ color: 'white' }} />
                      {open ? <ExpandLess style={{ color: 'white' }} /> : <ExpandMore style={{ color: 'white' }} />}
                    </Button>
                  </ListItem>
                  <Collapse in={open} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                      <ListItem>
                        <ListItemText href='#home' primary="Home" />
                      </ListItem>
                      <ListItem>
                        <ListItemText href='#about' primary="About me" />
                      </ListItem>
                      <ListItem>
                        <ListItemText href='#skills' primary="Skills" />
                      </ListItem>
                      <ListItem>
                        <ListItemText href='#projects' primary="Projects" />
                      </ListItem>
                      <ListItem sx={{ backgroundColor: 'white', borderRadius: '30px', color: 'black', width: '50%' }}>
                        <ListItemText href='#getintouch' primary="Get In Touch" />
                      </ListItem>
                    </List>
                  </Collapse>
                </List>
              </div>
            </>
          )}

          {full && (
            <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
              <Box className='box1' sx={{ p: 2 }}>
                <Typography variant="h6" color="inherit">
                  ALYUZA.COM
                </Typography>
              </Box>
              <Box className='box2' sx={{ p: 2, display: 'flex', justifyContent: 'flex-end' }}>
                <Button color="inherit" sx={{ color: 'white' }}
                  onClick={() => scrollToSection('home')}>
                  Home
                </Button>
                <Button color="inherit" sx={{ color: 'white' }}
                  onClick={() => scrollToSection('about')}>
                  About me
                </Button>
                <Button color="inherit" sx={{ color: 'white' }}
                  onClick={() => scrollToSection('skills')}>
                  Skills
                </Button>
                <Button color="inherit" sx={{ color: 'white' }}
                  onClick={() => scrollToSection('projects')}>
                  Projects
                </Button>
                <Box sx={{ backgroundColor: 'white', borderRadius: '30px', marginLeft: '20px' }}>
                  <Button color="inherit" style={{ color: 'black' }}
                    onClick={() => scrollToSection('getintouch')}>
                    Get In Touch
                  </Button>
                </Box>
              </Box>
            </div>
          )}
        </Toolbar>
      </AppBar>
      <Toolbar />
    </>
  );
}
