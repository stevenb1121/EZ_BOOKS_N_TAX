// Images
import Logo from "/ColorNoBG.png";
// Constants
import { PRIMARY, SECONDARY, ALTERNATE } from "../Constants";
//MUI Components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
// Third Party Library
import { HashLink } from "react-router-hash-link";

const PageFooter = () => {
  return (
    <Container
      maxWidth={false}
      disableGutters
      sx={{
        color: SECONDARY,
        backgroundColor: PRIMARY,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        paddingBottom: "5rem",
        position: "relative",
      }}
    >
      <Grid mx={"2rem"} marginTop={2} marginBottom={-7} container spacing={2}>
        <Grid item xs={12} md={6}>
          <Grid container direction={"column"}>
            <Grid item>
              <img width="auto" height="100vh" src={Logo} />
            </Grid>
            <Grid item>
              <Typography variant="body1" maxWidth={"35rem"}>
                {
                  "Dedicated to keeping your business finances operating smoothly so you can focus on your business. It's accounting, done better."
                }
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={6} md={3}>
          <Grid container direction={"column"}>
            <Grid item>
              <Typography
                variant="h4"
                sx={{
                  textDecoration: "underline",
                  textUnderlineOffset: "0.55rem",
                }}
              >
                Services
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                component={HashLink}
                smooth
                to="/#services"
                sx={{ textDecoration: "none", color: "inherit" }}
                variant="h6"
              >
                Bookkeeping
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                component={HashLink}
                smooth
                to="/#services"
                sx={{ textDecoration: "none", color: "inherit" }}
                variant="h6"
              >
                Tax Services
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                component={HashLink}
                smooth
                to="/#services"
                variant="h6"
                sx={{ textDecoration: "none", color: "inherit" }}
              >
                Business Consulting
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={6} md={3}>
          <Grid container direction={"column"}>
            <Grid item>
              <Typography
                variant="h4"
                sx={{
                  textDecoration: "underline",
                  textUnderlineOffset: "0.55rem",
                }}
              >
                Company
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                component={HashLink}
                smooth
                to="/#about"
                sx={{ textDecoration: "none", color: "inherit" }}
                variant="h6"
              >
                About Us
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                component={HashLink}
                smooth
                to="/#schedule"
                sx={{ textDecoration: "none", color: "inherit" }}
                variant="h6"
              >
                Schedule
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Divider variant="middle" sx={{ bgcolor: ALTERNATE }} />
        </Grid>
        <Grid item xs={12}>
          <Grid container direction={"row"}>
            <Grid item xs={1}>
              <Typography variant="h6">Copyright</Typography>
            </Grid>
            <Grid item xs={10}></Grid>
            <Grid item xs={1}>
              <Typography variant="h6">Other words</Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default PageFooter;
