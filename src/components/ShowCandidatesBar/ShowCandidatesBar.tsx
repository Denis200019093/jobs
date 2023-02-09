import React from "react";
import { Grid, Typography } from "@mui/material";

import { IUser } from "../../models/User";
import CustomDivider from "../Reusable/CustomDivider";
import Candidate from "../Candidate";

interface IProps {
  candidates: IUser[] | undefined;
}

const ShowCandidatesBar: React.FC<IProps> = ({ candidates }) => {
  return (
    <Grid container item xs={12}>
      <Grid container spacing={4}>
        <Grid container item justifyContent="space-between" alignItems="start">
          <Typography variant="h6">
            Candidates {candidates?.length}
          </Typography>
          <CustomDivider />
        </Grid>
        <Grid container item justifyContent="center">
          {candidates?.length ? (
            candidates?.map((item) => <Candidate key={item._id} item={item} />)
          ) : (
            <Grid container direction="column" alignItems="center">
              <Typography sx={{ mb: 1 }} variant="h5">
                Not found candidates
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

export default ShowCandidatesBar;
