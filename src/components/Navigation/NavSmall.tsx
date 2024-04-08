// Images
import Logo from "/ColorNoBG.png";
// MUI Components
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Drawer from "@mui/material/Drawer";
// MUI Icons
import PhoneIphoneTwoToneIcon from "@mui/icons-material/PhoneIphone";
// React Functions
import { useEffect, useState } from "react";
// Third Party Library
import { HashLink } from "react-router-hash-link";

const NavSmall = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 992) {
        setDrawerOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Box
      display={{ xs: "flex", lg: "none" }}
      justifyContent={"space-between"}
      alignItems={"center"}
      width={"100%"}
    >
      <Box flexGrow={1}>
        <img width="auto" height="70vh" src={Logo} />
      </Box>
      <Box justifyContent={"flex-end"}>
        <IconButton
          size="large"
          onClick={() => setDrawerOpen(true)}
          color="inherit"
        >
          <MenuIcon />
        </IconButton>
        <Drawer
          anchor="right"
          open={drawerOpen}
          onClose={() => setDrawerOpen(false)}
        >
          <Box
            sx={{ width: 250 }}
            role="presentation"
            onClick={() => setDrawerOpen(false)}
          >
            <List>
              <ListItem disablePadding>
                <ListItemButton component={HashLink} to="/#about" smooth>
                  <ListItemText primary="About" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton component={HashLink} to="/#services" smooth>
                  <ListItemText primary="Services" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton component={HashLink} to="/#schedule" smooth>
                  <ListItemText primary="Schedule" />
                </ListItemButton>
              </ListItem>
            </List>
          </Box>
          <Box
            sx={{ width: 250, marginTop: "auto" }}
            role="presentation"
            onClick={() => setDrawerOpen(false)}
          >
            <List>
              <ListItem disablePadding>
                <ListItemButton component={"a"} href="tel:6157857349">
                  <PhoneIphoneTwoToneIcon />
                  <ListItemText primary="Call Us" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton
                  component={"a"}
                  href="https://lahprotn.securefilepro.com/portal/#/login"
                >
                  <ListItemText primary="Client Portal" />
                </ListItemButton>
              </ListItem>
            </List>
          </Box>
        </Drawer>
      </Box>
    </Box>
  );
};

export default NavSmall;
