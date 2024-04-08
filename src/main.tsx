import React from "react";
import ReactDOM from "react-dom/client";
import NavigationBar from "./components/Navigation/NavigationBar";
import {
  ThemeProvider,
  createTheme,
  responsiveFontSizes,
} from "@mui/material/styles";
import { FONT } from "../src/components/Constants";

let theme = createTheme({
  typography: {
    allVariants: {
      fontFamily: FONT,
    },
  },
});
theme = responsiveFontSizes(theme);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <NavigationBar />
    </ThemeProvider>
  </React.StrictMode>
);
