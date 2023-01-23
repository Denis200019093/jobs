import React from "react";
import { Button, Grid, Typography, styled } from "@mui/material";
import { NavLink } from "react-router-dom";

import { IVacancy } from "../../../models/Vacancy";
import MultiLineText from "../../atoms/MultiLineText";
import CustomAvatar from "../../atoms/CustomAvatar";

interface IProps {
  item: IVacancy;
  isLoading?: boolean;
}

const JobVacancy: React.FC<IProps> = ({ item, isLoading }) => {
  return (
    <VacancyBlock container item>
      {isLoading ? <LoadingBlock /> : null}
      <Grid container item spacing={2}>
        <Grid container item justifyContent="space-between">
          <Grid container item xs={6}>
            <Grid item sx={{ mr: 1 }}>
              <CustomAvatar
                src={item.avatarURL}
                position="block"
                allowEditing={false}
              />
            </Grid>
            <Grid>
              <Typography variant="h6">Linkedin</Typography>
              <Typography variant="body2">New York, US</Typography>
            </Grid>
          </Grid>
          <Grid container item xs={6} justifyContent="end" spacing={1}>
            {item?.jobTags?.map((item) => (
              <Grid item key={item}>
                <Typography
                  sx={{
                    fontSize: "14px",
                    bgcolor: "rgba(15,15,15,0.03)",
                    p: "5px",
                    borderRadius: "5px",
                  }}
                  variant="body2"
                >
                  {item}
                </Typography>
              </Grid>
            ))}
          </Grid>
        </Grid>
        <Grid container item>
          <NavLink to={`/job-details`}>
            <Typography variant="h5" sx={{ color: "#1976d2" }}>
              {item?.jobTitle}
            </Typography>
          </NavLink>
        </Grid>
        {/* <TypeAndDateJob typeJob={"Full time"} createdDate={"3 mins ago"} /> */}
        <Grid container item xs={10}>
          <MultiLineText
            text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae
            architecto eveniet, dolor quo repellendus pariatur Lorem ipsum dolor
            sit amet, consectetur adipisicing elit. Recusandae architecto
            eveniet, dolor quo repellendus pariatur"
            variant={"body2"}
            quantityLines={3}
          />
        </Grid>
        <Grid container item justifyContent="space-between">
          <Grid container item xs={6}>
            <Grid container alignItems="center">
              <Typography variant="h6" sx={{ color: "#1976d2" }}>
                $500
              </Typography>
              <Typography variant="body2">/hour</Typography>
            </Grid>
          </Grid>
          <Grid container item xs={6} justifyContent="end">
            <Grid item>
              <NavLink to={`/job-details/${item._id}`}>
                <Button size="small" variant="contained">
                  Apply now
                </Button>
              </NavLink>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </VacancyBlock>
  );
};

export default JobVacancy;

const VacancyBlock = styled(Grid)(({ theme }) => ({
  position: "relative",
  // boxShadow: "0px 2px 4px -1px rgba(0,0,0,0.27)",
  boxShadow: "0 8px 10px rgb(25 15 9 / 10%)",
  borderRadius: "5px",
  padding: "16px",
  marginBottom: "24px",
  transition: "0.3s",
  "&:hover": {
    backgroundColor: "transparent",
  },
}));

const LoadingBlock = styled(Grid)(({ theme }) => ({
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  borderRadius: "5px",
  backgroundColor: "rgba(0,0,0,0.08)",
  zIndex: 1,
}));
