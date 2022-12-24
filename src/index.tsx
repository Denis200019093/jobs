import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { ThemeProvider } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";

import App from "./App";

import { setupStore } from "./redux/store";
import { theme } from "./configs/theme";

import "./index.css";

const store = setupStore();

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <>
    <ThemeProvider theme={theme}>
      <Router basename="/">
        <Provider store={store}>
          <CssBaseline />
          <App />
        </Provider>
      </Router>
    </ThemeProvider>
  </>
);
