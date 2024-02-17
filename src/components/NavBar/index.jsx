import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useMediaQuery from "@mui/material/useMediaQuery";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import MenuIcon from "@mui/icons-material/Menu";
import {
  List,
  ListItem,
  Collapse,
  Box,
  IconButton,
  AppBar,
  Toolbar,
  Typography,
} from "@mui/material";
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import HeaderLogo from '../../assets/logonavbar.png';
import styles from './navbar.module.scss'

export default function NavBar() {
  const small = useMediaQuery("(max-width:900px)");
  const full = useMediaQuery("(min-width:900px)");
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    // Retrieve active section from localStorage when component mounts
    const storedSection = localStorage.getItem('activeSection');
    if (storedSection) {
      setActiveSection(storedSection);
    }
  }, []); // Empty dependency array to run this effect only once on component mount

  const handleClick = () => {
    setOpen(!open);
  };

  const navigateTo = (section) => {
    navigate("/" + section);
  };

  const mobileNavigateTo = (section) => {
    navigate("/" + section);
    setOpen(false);
    setActiveSection(section);
    // Store active section in localStorage
    localStorage.setItem('activeSection', section);
  };

  return (
    <>
      <AppBar position="sticky" className={styles.navbar}>
        <Toolbar className={styles.navbar}>
          {small && (
            <Box style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
              <List sx={{ padding: '0' }}>
                <ListItem sx={{ display: 'flex', justifyContent: 'space-between', padding: '0' }}>
                  <Box className='box1' sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <img src={HeaderLogo} alt="Logo" style={{ height: '30px', width: 'auto', cursor: 'pointer' }} onClick={() => navigateTo('')} />
                    <Typography className={styles.logoText} variant="h1" onClick={() => navigateTo('')}>
                      Alyuza
                    </Typography>
                  </Box>
                  <IconButton onClick={handleClick} style={{ color: 'white' }}>
                    <MenuIcon className={styles.burgerButton} />
                    {open ? <ExpandLess className={styles.burgerButton} /> : <ExpandMore className={styles.burgerButton} />}
                  </IconButton>
                </ListItem>
                <Collapse in={open} timeout="auto" unmountOnExit className={styles.collapse}>
                  <List component="div" disablePadding>
                    <ListItem className={styles.listItem} onClick={() => mobileNavigateTo('')}>
                      <Typography className={styles.listItemText}>
                        Home {activeSection === '' && <span className={styles.arrowIcon}> <ArrowLeftIcon />You{`'`}re here </span>}
                      </Typography>
                    </ListItem>
                    <ListItem className={styles.listItem} onClick={() => mobileNavigateTo('projects')}>
                      <Typography className={styles.listItemText}>
                        Projects {activeSection === 'projects' && <span className={styles.arrowIcon}> <ArrowLeftIcon />You{`'`}re here </span>}
                      </Typography>
                    </ListItem>
                    <ListItem className={styles.listItem} onClick={() => mobileNavigateTo('about')}>
                      <Typography className={styles.listItemText}>
                        About {activeSection === 'about' && <span className={styles.arrowIcon}> <ArrowLeftIcon />You{`'`}re here </span>}
                      </Typography>
                    </ListItem>
                    <ListItem className={styles.listItem} onClick={() => mobileNavigateTo('technologies')}>
                      <Typography className={styles.listItemText}>
                        Technologies {activeSection === 'technologies' && <span className={styles.arrowIcon}> <ArrowLeftIcon />You{`'`}re here </span>}
                      </Typography>
                    </ListItem>
                    <ListItem className={styles.listItem} onClick={() => mobileNavigateTo('contact')}>
                      <Typography className={styles.listItemText}>
                        Contact {activeSection === 'contact' && <span className={styles.arrowIcon}> <ArrowLeftIcon />You{`'`}re here </span>}
                      </Typography>
                    </ListItem>
                  </List>
                </Collapse>
              </List>
            </Box>
          )}

          {full && (
            <Box style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
              <Box className='box1' sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <img src={HeaderLogo} alt="Logo" style={{ height: '40px', width: 'auto', cursor: 'pointer' }} onClick={() => navigateTo('')} />
                <Typography className={styles.logoText} variant="h1" color="inherit" onClick={() => navigateTo('')} >
                  Alyuza Satrio Prayogo
                </Typography>
              </Box>
              <Box className='box2' sx={{ p: 2, display: 'flex', justifyContent: 'flex-end', gap: '30px' }}>
                <Typography className={styles.navbarText} onClick={() => navigateTo('')} style={{ fontWeight: 'bold' }}>
                  Home
                </Typography>
                <Typography className={styles.navbarText} onClick={() => navigateTo('about')}>
                  About
                </Typography>
                <Typography className={styles.navbarText} onClick={() => navigateTo('projects')}>
                  Projects
                </Typography>
                <Typography className={styles.navbarText} onClick={() => navigateTo('technologies')}>
                  Technologies
                </Typography>
                <Typography className={styles.navbarText} onClick={() => navigateTo('contact')}>
                  Contact
                </Typography>
              </Box>
            </Box>
          )}
        </Toolbar>
      </AppBar>
    </>
  );
}
