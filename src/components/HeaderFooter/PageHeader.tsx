// Constants
import { PRIMARY, SECONDARY, ALTERNATE } from "../Constants";
// MUI Components
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
// Third Party Library
import { HashLink } from "react-router-hash-link";

interface HeaderProps {
  pictureLocation: string;
  longHeading: string;
  description: string;
}

const PageHeader = ({
  pictureLocation,
  longHeading,
  description,
}: HeaderProps) => {
  return (
    <Container
      maxWidth={false}
      disableGutters
      sx={{
        backgroundColor: "#fff",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
      }}
    >
      <Container
        maxWidth={false}
        disableGutters
        sx={{
          backgroundImage: `url(${pictureLocation})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
          flexGrow: 1,
        }}
      >
        <Container
          maxWidth={false}
          disableGutters
          sx={{
            width: "100%",
            background:
              "linear-gradient(81.31deg,#f8f8f8 43.23%,rgba(255,255,255,0) 85.93%)",
            paddingY: "5vh",
            paddingLeft: { xs: "1rem", sm: "5rem" },
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <Typography
            variant="h3"
            color={PRIMARY}
            sx={{
              maxWidth: { xs: "20rem", sm: "30rem" },
              lineHeight: "calc(11/10)",
              paddingBottom: "25px",
            }}
          >
            {longHeading}
          </Typography>
          <Typography
            variant="h6"
            color="text.secondary"
            sx={{
              maxWidth: { xs: "20rem", sm: "30rem" },
              lineHeight: "calc(16/10)",
              paddingBottom: "25px",
            }}
          >
            {description}
          </Typography>
          <Button
            variant="contained"
            sx={{
              bgcolor: SECONDARY,
              color: ALTERNATE,
              "&:hover": { bgcolor: PRIMARY },
            }}
            component={HashLink}
            to="/#schedule"
            smooth
          >
            Schedule a Free Consultation
          </Button>
        </Container>
      </Container>
    </Container>
  );
};

export default PageHeader;
