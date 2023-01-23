import React from "react";
import { Divider, Grid } from "@mui/material";

const CustomDivider: React.FC = () => {
  return (
    <Grid container item sx={{ mt: 3, mb: 3 }}>
      <Divider sx={{ width: "100%" }} />
    </Grid>
  );
};

export default CustomDivider;
