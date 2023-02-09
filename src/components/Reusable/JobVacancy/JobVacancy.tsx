import React, { useState } from "react";
import { Button, Grid, Typography, styled } from "@mui/material";
import { NavLink } from "react-router-dom";

import { IVacancy } from "../../../models/Vacancy";
import MultiLineText from "../MultiLineText";
import CustomAvatar from "../CustomAvatar";
import useHover from "../../../hooks/useHover";

interface IProps {
  item: IVacancy;
  isLoading?: boolean;
}

const JobVacancy: React.FC<IProps> = ({ item, isLoading }) => {
  const [hoverRef, isHovered] = useHover<HTMLDivElement>();

  return (
    <VacancyBlock
      ref={hoverRef}
      container
      item
      sx={{ transform: `translateY(${isHovered ? "-4px" : "0"})` }}
    >
      {isLoading ? <LoadingBlock /> : null}
      <Grid container item spacing={2}>
        <Grid container item justifyContent="space-between">
          <Grid container item xs={6}>
            <Grid item sx={{ mr: 1 }}>
              <CustomAvatar src={item.avatarURL} allowEditing={false} />
            </Grid>
            <Grid>
              <NavLink to={`/company/${item.jobAuthor}`}>
                <Typography variant="h6">{item.companyName}</Typography>
              </NavLink>
              <Typography variant="body2">{item.companyLocation}</Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid container item>
          <NavLink to={`/job-details/${item._id}`}>
            <Typography variant="h5" sx={{ color: isHovered ? "#1976d2" : "" }}>
              {item?.jobTitle}
            </Typography>
          </NavLink>
        </Grid>
        <Grid container item>
          <Grid item>
            <Typography variant="body2">
              {[
                ...item.jobTypes,
                item.jobExperience,
                item.jobSalary?.join("$ - ") + "$",
              ].join(" / ")}
            </Typography>
          </Grid>
        </Grid>{" "}
        <Grid container item xs={11.5}>
          <MultiLineText
            text={item.jobDescription}
            variant={"body2"}
            quantityLines={3}
          />
        </Grid>
        <Grid container item justifyContent="space-between">
          <Grid container item xs={6}>
            <Grid container alignItems="center">
              <Typography variant="body2">
                {item.createdAt?.slice(0, 10)}
              </Typography>
            </Grid>
          </Grid>
          <Grid container item xs={6} justifyContent="end">
            <Grid item>
              <NavLink to={`/job-details/${item._id}`}>
                <Button
                  size="small"
                  sx={{
                    color: isHovered ? "#FFF" : "#3c65f5",
                    bgcolor: isHovered ? "#1976d2" : "#e0e6f7",
                    boxShadow: 0,
                  }}
                  variant="contained"
                >
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
