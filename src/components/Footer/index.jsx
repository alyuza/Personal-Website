import Typography from "@mui/material/Typography";
// import Link from "@mui/material/Link";
// import Grid from "@mui/material/Grid";
// import { GitHub, Instagram, LinkedIn } from "@mui/icons-material";
import { Box } from "@mui/material";
import styles from "./footer.module.scss"

export default function Footer() {
  return (
    <Box component="footer" className={styles.footer}>
        {/* <Grid container spacing={5}>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              About me
              bla bla bla
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Thank you for coming
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              Contact
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Jl. Semolowaru Indah II Blok N / No 30, Surabaya
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Email: alyuza.dev@gmail.com
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Phone: +62812 1605 8360
            </Typography>
          </Grid>

          <Grid item xs={12} sm={4}>
            <Box sx={{ display: 'flex', flexDirection: 'column', margin: '10px 0px' }}>
              <Typography variant="h6" color="text.primary" gutterBottom>
                Contact
              </Typography>
              <Typography variant="body" color="text.primary" gutterBottom>
                alyuza.sat@gmail.com
              </Typography>
            </Box>
            <Box style={{ display: 'flex', gap: '6px' }}>
              <Link href="https://www.linkedin.com/in/alyuzasp/"
                color="inherit"
                target="_blank"
              >
                <LinkedIn sx={{ fontSize: '25px' }} />
              </Link>
              <Link href="https://github.com/alyuza"
                color="inherit"
                target="_blank"
              >
                <GitHub />
              </Link>
              <Link
                href="https://www.instagram.com/alyuzasp/"
                color="inherit"
                target="_blank"
              >
                <Instagram />
              </Link>
            </Box>
          </Grid>
        </Grid> */}

        <Box>
          <Typography variant="body2" color="text.secondary" align="center">
            {"Copyright © 2024 Alyuza Satrio Prayogo"}
          </Typography>
        </Box>
    </Box >
  );
}