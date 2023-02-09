import React from "react";
import { Grid, Typography } from "@mui/material";

import { useGetCompanyDetailsQuery } from "../../../redux/features/company.api";
import { useGetMeQuery } from "../../../redux/features/auth.api";
import CustomDivider from "../../../components/Reusable/CustomDivider";
import JobVacancy from "../../../components/Reusable/JobVacancy";

const OurVacancies: React.FC = () => {
  const { data: user } = useGetMeQuery();
  const { data: companyDetails } = useGetCompanyDetailsQuery(user?._id);

  return (
    <Grid container item xs={12} spacing={6}>
      <Grid container item>
        <Typography variant="h4">Our vacanacies</Typography>
        <CustomDivider />
      </Grid>
      <Grid container item justifyContent="center" spacing={2}>
        <Grid container item justifyContent="center">
          {companyDetails?.ourVacancies?.length ? (
            companyDetails?.ourVacancies?.map((item, index) => (
              <JobVacancy key={index} item={item} />
            ))
          ) : (
            <Grid container direction="column" alignItems="center">
              <Typography variant="h4">
                You haven't posted vacancies yet
              </Typography>
            </Grid>
          )}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default OurVacancies;
