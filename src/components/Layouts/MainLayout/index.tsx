import React from "react";
import { Grid } from "@mui/material";

interface GuestLayoutProps {
  children: React.ReactElement;
}

const GuestLayout: React.FC<GuestLayoutProps> = ({ children }) => {
  return (
    <Grid container justifyContent="center">
      <Grid item xs={10}>
        {children}
      </Grid>
    </Grid>
  );
};

export default GuestLayout;
