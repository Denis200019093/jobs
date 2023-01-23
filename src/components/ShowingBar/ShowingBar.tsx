import React from "react";
import { Grid, Typography } from "@mui/material";

import CustomDivider from "../atoms/CustomDivider";
import { IVacancy } from "../../models/Vacancy";
import { IUser } from "../../models/User";
import { useGetUserQuery } from "../../redux/features/user.api";

interface IProps {
  result: IVacancy[] | IUser[] | undefined;
  isFetching: boolean;
}

const ShowingBar: React.FC<IProps> = ({ result, isFetching }) => {
  const { data: user } = useGetUserQuery();

  return (
    <Grid item xs={12} md={user?.typeUser === "Employer" ? 12 : 9}>
      <Grid container spacing={4}>
        <Grid container item justifyContent="space-between" alignItems="start">
          <Typography variant="h6">Showing {result?.length} jobs</Typography>
          <CustomDivider />
        </Grid>
        <Grid container item justifyContent="center">
          {user?.typeUser === "Employer"
            ? result?.map((item) => <Typography>Candidate</Typography>)
            : result?.map((item) => <Typography>Vacnacy</Typography>)}
        </Grid>
        {!result?.length ? (
          <Grid container direction="column" alignItems="center">
            <Typography variant="h4">Vacancies not found</Typography>
            <Typography variant="body2">
              Try to change filter or the search field
            </Typography>
          </Grid>
        ) : null}
      </Grid>
    </Grid>
  );
};

export default ShowingBar;
