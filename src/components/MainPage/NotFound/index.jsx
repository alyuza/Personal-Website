import { Box, Typography } from '@mui/material'
import styles from './notfound.module.scss'
import astronout from '../../../assets/astronout.png'

export default function NotFoundComponent() {
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
        </Box>
        <img className={styles.astronaut} src={astronout} alt="Astronout photo" />
      </Box>
    </>
  )
}
