import React from "react";
import { Grid } from "@mui/material";

import Result from "../Result";

const Home: React.FC = () => {
  return (
    <Grid container spacing={6}>
      <Grid container item>
        <Result />
      </Grid>
    </Grid>
  );
};

export default Home;
