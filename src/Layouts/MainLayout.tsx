import React from "react";
import { Grid } from "@mui/material";

interface GuestLayoutProps {
  children: JSX.Element;
}

const MainLayout: React.FC<GuestLayoutProps> = ({ children }) => {
  return (
    <Grid container justifyContent="center">
      <Grid item xs={10}>
        {children}
      </Grid>
    </Grid>
  );
};

export default MainLayout;
