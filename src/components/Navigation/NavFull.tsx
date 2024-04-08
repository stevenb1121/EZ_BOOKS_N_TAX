// Images
import Logo from "/ColorNoBG.png";
// Constants
import { ALTERNATE, SECONDARY, PRIMARY } from "../Constants";
// MUI Components
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
// MUI Icons
import PhoneIphoneTwoToneIcon from "@mui/icons-material/PhoneIphone";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
// Third Party Library
import { HashLink } from "react-router-hash-link";

const NavFull = () => {
  return (
    <Box
      display={{ xs: "none", lg: "flex" }}
      justifyContent={"space-between"}
      alignItems={"center"}
      width={"100%"}
    >
      <Box>
        <img width="auto" height="70vh" src={Logo} />
      </Box>
      <Box
        sx={{
          color: SECONDARY,
        }}
      >
        <Button
          component={HashLink}
          to="/#about"
          smooth
          sx={{
            color: "inherit",
            fontWeight: 550,
            fontSize: 17,
          }}
        >
          About
        </Button>
        <Button
          component={HashLink}
          to="/#services"
          smooth
          sx={{
            color: "inherit",
            fontWeight: 550,
            fontSize: 17,
          }}
        >
          Services
        </Button>
        <Button
          component={HashLink}
          to="/#schedule"
          smooth
          sx={{
            color: "inherit",
            fontWeight: 550,
            fontSize: 17,
          }}
        >
          Schedule
        </Button>
      </Box>
      <Box>
        <Button
          component="a"
          href="tel:6157857349"
          variant="contained"
          sx={{
            marginRight: ".5rem",
            bgcolor: SECONDARY,
            color: PRIMARY,
            "&:hover": { bgcolor: ALTERNATE },
          }}
          startIcon={<PhoneIphoneTwoToneIcon />}
        >
          Call Us
        </Button>
        <Button
          component="a"
          href="https://lahprotn.securefilepro.com/portal/#/login"
          variant="contained"
          sx={{
            bgcolor: SECONDARY,
            color: PRIMARY,
            "&:hover": { bgcolor: ALTERNATE },
          }}
          startIcon={<AccountCircleIcon />}
        >
          Client Portal
        </Button>
      </Box>
    </Box>
  );
};

export default NavFull;
