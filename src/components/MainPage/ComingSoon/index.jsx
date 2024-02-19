import {
  Box
} from "@mui/material";
import comingsoonimage from '../../../assets/comingSoon.png'
import kepala from '../../../assets/kepala.png'
import styles from './soon.module.scss'

export default function index() {
  return (
    <Box className={styles.soonPage}>
        <img className={styles.soonImage} src={comingsoonimage} alt="Alyuza Photo" />
        {/* <img className={styles.kepalaImage} src={kepala} alt="Alyuza Photo" /> */}
    </Box>
  )
}
