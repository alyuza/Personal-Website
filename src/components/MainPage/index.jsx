
import { Box } from '@mui/material';
import Typography from '@mui/material/Typography';
import NavBar from '../NavBar';
import Footer from '../Footer';

const MainPage = () => {
  return (
    <>
      <NavBar />
      <Box id="home" style={{ height: '3vw' }} />
      <Box className="scroll-section" sx={{ padding: '20px', height: '50vh' }}>
        <Typography variant="h5">Home Section</Typography>
        {/* Your section content goes here */}
      </Box>

      <Box id="about" style={{ height: '3vw' }} />
      <Box className="scroll-section" style={{ padding: '20px', height: '50vh', backgroundColor: '#cfd8dc' }}>
        <Typography variant="h5">About Section</Typography>
        {/* Your section content goes here */}
      </Box>

      <div id="skills" style={{ height: '3vw', backgroundColor: '#cfd8dc' }} />
      <Box elevation={3} style={{ padding: '20px', height: '50vh' }}>
        <Typography variant="h5">Skills Section</Typography>
        {/* Your section content goes here */}
      </Box>

      <Box id="projects" style={{ height: '3vw' }} />
      <Box elevation={3} style={{ padding: '20px', height: '50vh', backgroundColor: '#cfd8dc' }}>
        <Typography variant="h5">Projects Section</Typography>
        {/* Your section content goes here */}
      </Box>

      <Box id="getintouch" style={{ height: '3vw', backgroundColor: '#cfd8dc' }} />
      <Box elevation={3} style={{ padding: '20px', height: '100vh' }}>
        <Typography variant="h5">Get In Touch Section</Typography>
        {/* Your section content goes here */}
      </Box>
      <Footer />
    </>
  );
};

export default MainPage;
