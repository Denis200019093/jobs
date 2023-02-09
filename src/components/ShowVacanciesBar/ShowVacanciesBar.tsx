import React from "react";
import { Grid, Typography } from "@mui/material";

import { IVacancy } from "../../models/Vacancy";
import CustomDivider from "../Reusable/CustomDivider";
import JobVacancy from "../Reusable/JobVacancy";

interface IProps {
  vacancies: IVacancy[] | undefined;
}

const ShowVacanciesBar: React.FC<IProps> = ({ vacancies }) => {
  return (
    <Grid item xs={12} md={9}>
      <Grid container spacing={4}>
        <Grid container item justifyContent="space-between" alignItems="start">
          <Typography variant="h6">Vacancies {vacancies?.length}</Typography>
          <CustomDivider />
        </Grid>
        <Grid container item justifyContent="center">
          {vacancies?.length ? (
            vacancies?.map((item) => <JobVacancy key={item._id} item={item} />)
          ) : (
            <Grid container direction="column" alignItems="center">
              <Typography sx={{ mb: 1 }} variant="h5">
                Not found vacancies
              </Typography>
              <Typography variant="body2">
                Try to change filter or the search field
              </Typography>
            </Grid>
          )}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ShowVacanciesBar;
