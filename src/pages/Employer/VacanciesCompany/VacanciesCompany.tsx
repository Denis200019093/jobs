import React from "react";
import { Button, Grid, Typography } from "@mui/material";

import CustomDivider from "../../../components/atoms/CustomDivider";
import JobVacancy from "../../../components/organisms/JobVacancy";
import PreviewBar from "../../../components/organisms/PreviewBar";
import { useAppSelector } from "../../../hooks/redux";
import { NavLink } from "react-router-dom";

const VacanciesCompany: React.FC = () => {
  const { user } = useAppSelector((state) => state.auth);

  return (
    <Grid container item xs={12}>
      <PreviewBar
        previewTitle={user ? user.fullName : ""}
        miniDescription={""}
        allowEditing={false}
      >
        <NavLink to={`/candidate/${user?._id}`}>
          <Button variant="contained">Preview</Button>
        </NavLink>
      </PreviewBar>
      <Grid container justifyContent="center" spacing={2}>
        <Grid container item>
          <Typography variant="h4">Our vacancies</Typography>
          <CustomDivider />
        </Grid>
        <Grid item sx={{ height: "800px" }}>
          {user?.ourVacancies?.length ? (
            <Grid>
              {user?.ourVacancies?.map((item) => (
                <JobVacancy key={item._id} item={item} />
              ))}
            </Grid>
          ) : (
            <Typography variant="h4">
              You haven't created vacancies yet
            </Typography>
          )}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default VacanciesCompany;
