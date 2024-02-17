import {
  Box,
  Typography,
  Button,
  IconButton
} from '@mui/material';

import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from '@mui/icons-material/Email';

import styles from './home.module.scss'
import background from '../../../assets/background.png'
import wave from '../../..//assets/wave-animation.gif'

import ButtonCV from '../../Material/Button';

export default function HomeSection() {
  return (

    <Box id="home" className={styles.home}>
      <Box className={styles.homeFlexbox}>
        <Box className={styles.homeContainerText}>
          <Typography className={styles.homeText} variant="h4">
            Hello <img className={styles.wave} src={wave} alt='wave-icon' />
          </Typography>
          <Typography className={styles.homeTitle} variant='h3'>
            I{'\''}m <span style={{ color: 'rgb(216, 27, 68)' }}>Alyuza</span> Satrio Prayogo
          </Typography>
          <Typography variant='h5' className={styles.homeDescription}>
            Full Stack Software Engineer
          </Typography>
          <Button className={styles.downloadButton} href='https://drive.google.com/file/d/1WQThDEUCxOr40pGrzQ6NM0SXhjtpzpyS/view?usp=sharing' target="_blank" rel="noreferrer" >
            <ButtonCV />
          </Button>
          <Box className={styles.containerSocialMedia}>
            <IconButton href="https://www.linkedin.com/in/alyuzasp/" target="_blank" rel="noreferrer">
              <LinkedInIcon className={styles.socialMediaIcon} />
            </IconButton>
            <IconButton href="https://github.com/alyuza" target="_blank" rel="noreferrer">
              <GitHubIcon className={styles.socialMediaIcon} />
            </IconButton>
            <IconButton href="mailto:alyuza.sat@gmail.com">
              <EmailIcon className={styles.socialMediaIcon} />
            </IconButton>
            <IconButton href="https://www.instagram.com/alyuzasp/" target="_blank" rel="noreferrer">
              <InstagramIcon className={styles.socialMediaIcon} />
            </IconButton>
          </Box>
        </Box>
        <Box>
          <img className={styles.homePhoto} src={background} alt="Alyuza Photo" />
        </Box>
      </Box>

    </Box>
  )
}