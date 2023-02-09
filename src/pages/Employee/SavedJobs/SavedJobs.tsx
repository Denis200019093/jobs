import React from "react";
import { Grid, Typography } from "@mui/material";

import { useAppSelector } from "../../../hooks/redux";
import { useGetSavedVacanciesQuery } from "../../../redux/features/user.api";
import CustomDivider from "../../../components/Reusable/CustomDivider";
import JobVacancy from "../../../components/Reusable/JobVacancy";
import { useGetMeQuery } from "../../../redux/features/auth.api";

const SavedJobs: React.FC = () => {
  // const { user } = useAppSelector((state) => state.auth);
  const { data: user } = useGetMeQuery();

  const { data: savedVacancies } = useGetSavedVacanciesQuery(
    user?.savedVacancies || [],
    {
      skip: !user?.savedVacancies?.length,
    }
  );

  return (
    <Grid container item xs={12} spacing={6}>
      <Grid container item>
        <Typography variant="h4">My saved jobs</Typography>
        <CustomDivider />
      </Grid>
      <Grid container item justifyContent="center" spacing={2}>
        <Grid container item justifyContent="center">
          {savedVacancies?.length ? (
            savedVacancies?.map((item, index) => (
              <JobVacancy key={index} item={item} />
            ))
          ) : (
            <Grid container direction="column" alignItems="center">
              <Typography variant="h4">You haven't saved jobs yet</Typography>
            </Grid>
          )}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default SavedJobs;
