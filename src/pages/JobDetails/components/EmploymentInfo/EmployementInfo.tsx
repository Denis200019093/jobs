import React from "react";
import { Divider, Grid, Typography } from "@mui/material";

import { IVacancy } from "../../../../models/Vacancy";

const EmployementInfo: React.FC<{ vacancyDetails?: IVacancy }> = ({
  vacancyDetails,
}) => {
  return (
    <Grid
      container
      item
      sx={{
        boxShadow: "0 4px 6px rgb(25 15 9 / 10%)",
        p: 3,
        borderRadius: "10px",
      }}
    >
      <Grid container spacing={4}>
        <Grid container item>
          <Typography variant="h5">Employment Information</Typography>
          <Divider sx={{ width: "100%", pt: 3 }} />
        </Grid>
        <Grid container item>
          <Grid container item xs={6} alignItems="center">
            <Grid item xs={4}>
              <Typography variant="body2">Industry</Typography>
            </Grid>
            <Grid item xs={8}>
              <Typography>{vacancyDetails?.jobIndustries}</Typography>
            </Grid>
          </Grid>
          <Grid container item xs={6} alignItems="center">
            <Grid item xs={4}>
              <Typography variant="body2">Job position</Typography>
            </Grid>
            <Grid item xs={8}>
              <Typography>
                {vacancyDetails?.jobPositions?.join(", ")}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid container item>
          <Grid container item xs={6} alignItems="center">
            <Grid item xs={4}>
              <Typography variant="body2">Salary</Typography>
            </Grid>
            <Grid item xs={8}>
              <Typography>{vacancyDetails?.jobSalary?.join(" - ")}$</Typography>
            </Grid>
          </Grid>
          <Grid container item xs={6} alignItems="center">
            <Grid item xs={4}>
              <Typography variant="body2">Experience</Typography>
            </Grid>
            <Grid item xs={8}>
              <Typography>{vacancyDetails?.jobExperience}</Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid container item>
          <Grid container item xs={6} alignItems="center">
            <Grid item xs={4}>
              <Typography variant="body2">Job type</Typography>
            </Grid>
            <Grid item xs={8}>
              <Typography>{vacancyDetails?.jobTypes?.join(", ")}</Typography>
            </Grid>
          </Grid>
          <Grid container item xs={6} alignItems="center">
            <Grid item xs={4}>
              <Typography variant="body2">Date</Typography>
            </Grid>
            <Grid item xs={8}>
              <Typography>10/08/2022</Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default EmployementInfo;
