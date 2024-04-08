import { BrowserRouter } from "react-router-dom";
import NavigationRoutes from "./NavigationRoutes";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import NavSmall from "./NavSmall";
import NavFull from "./NavFull";
import { PRIMARY } from "../Constants";

function NavigationBar() {
  return (
    <BrowserRouter>
      <AppBar position="static" sx={{ bgcolor: PRIMARY }}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <NavSmall />
            <NavFull />
          </Toolbar>
        </Container>
      </AppBar>
      <NavigationRoutes />
    </BrowserRouter>
  );
}

export default NavigationBar;
