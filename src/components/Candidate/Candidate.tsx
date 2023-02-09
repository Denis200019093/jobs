import { Avatar, Grid, Rating, Typography } from "@mui/material";
import React from "react";
import { IUser } from "../../models/User";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";
import MultiLineText from "../Reusable/MultiLineText";
import CustomDivider from "../Reusable/CustomDivider";
interface IProps {
  item: IUser;
  isLoading?: boolean;
}

const Candidate: React.FC<IProps> = ({ item }) => {
  return (
    <Grid item xs={3}>
      <Grid
        container
        item
        sx={{ bgcolor: "#f8faff", p: 2, borderRadius: "10px" }}
      >
        <Grid container item flexWrap="nowrap">
          <Grid item xs sx={{ mr: 2 }}>
            <Avatar
              sx={{ width: 86, height: 86 }}
              src={`http://localhost:4444/${item.avatarURL}`}
            />
          </Grid>
          <Grid container item>
            <Grid container item>
              <Typography variant="h5">{item.fullName}</Typography>
            </Grid>
            <Grid container item>
              <Typography variant="body2">{item.profession}</Typography>
            </Grid>
            <Grid container item>
              <Rating value={4} readOnly />
              <Typography>(66)</Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid container item sx={{ mt: 2 }}>
          <MultiLineText
            variant="body2"
            quantityLines={3}
            text={item.description}
          />
        </Grid>
        <CustomDivider />
        <Grid container item alignItems="center" flexWrap="nowrap">
          <Grid container item alignItems="center">
            <LocationOnIcon />
            <Typography>{item.city}</Typography>
          </Grid>
          <Grid container item alignItems="center" justifyContent="end">
            <CurrencyExchangeIcon />
            <Typography>{item.jobSalary?.join(" - ")}</Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Candidate;
