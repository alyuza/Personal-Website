import {
  Box
} from "@mui/material";
import comingsoonimage from '../../../assets/comingSoon.png'
import styles from './soon.module.scss'

export default function index() {
  return (
    <Box className={styles.soonPage}>
        <img className={styles.soonImage} src={comingsoonimage} alt="Alyuza Photo" />
    </Box>
  )
}
