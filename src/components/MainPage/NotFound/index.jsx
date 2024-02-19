import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Typography } from '@mui/material';
import styles from './notfound.module.scss';
import astronaut from '../../../assets/astronaut.png';

export default function NotFoundComponent() {
  const [countdown, setCountdown] = useState(9); // Initial countdown value
  const navigate = useNavigate()

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prevCount) => prevCount - 1); // Decrement countdown every second
    }, 1000);

    // Clear interval when countdown reaches 0
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    // Navigate back to empty string ('') after countdown reaches 0
    if (countdown === 0) {
      navigate('');
    }
  }, [countdown, navigate]);

  return (
    <>
      <Box className={styles.pageNotFound}>
        <Box>
          <Typography variant='h2' className={styles.text}>
            Oops! You ran out of oxygen.
          </Typography>
          <Typography variant='h2' className={styles.text2}>
            404 Page not found.
          </Typography>
          <Typography variant='h2' className={styles.countdown}>
            Redirecting in {countdown} seconds...
          </Typography>
        </Box>
        <img className={styles.astronaut} src={astronaut} alt="Astronaut photo" />
      </Box>
    </>
  );
}
