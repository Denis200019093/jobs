import React from "react";
import { Grid } from "@mui/material";

// Mine
import JobVacancy from "../../components/JobVacancy";

const SavedJobs: React.FC = () => {
  return (
    <Grid container item xs={12}>
      {["2", "2"].map((item, index) => (
        <JobVacancy key={index} />
      ))}
    </Grid>
  );
};

export default SavedJobs;
