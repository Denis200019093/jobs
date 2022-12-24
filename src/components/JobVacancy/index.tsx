import React from "react";
import {
  Avatar,
  Button,
  Divider,
  Grid,
  MenuItem,
  Select,
  TextField,
  Typography,
  styled,
} from "@mui/material";
import Search from "@mui/icons-material/Search";
import SearchBar from "../../components/SearchBar";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import QueryBuilderIcon from "@mui/icons-material/QueryBuilder";
import CustomDivider from "../../components/UIComponents/CustomDivider";
import { VacancyScheme } from "../../models/Vacancy";

const JobVacancy: React.FC<{ item?: VacancyScheme }> = (props) => {
  return (
    <VacancyBlock item>
      <Grid container item spacing={2}>
        <Grid container item justifyContent="space-between">
          <Grid container item xs={6}>
            <Grid item sx={{ mr: 1 }}>
              <Avatar
                sx={{
                  width: "60px",
                  height: "60px",
                  borderRadius: "5px",
                }}
                src="https://cdn.pixabay.com/photo/2017/03/19/20/19/ball-2157465__340.png"
              />
            </Grid>
            <Grid>
              <Typography variant="h6">Linkedin</Typography>
              <Typography variant="body2">New York, US</Typography>
            </Grid>
          </Grid>
          <Grid container item xs={6} justifyContent="end" spacing={1}>
            {props.item?.tags.map((item) => (
              <Grid item key={item}>
                <Typography
                  sx={{
                    bgcolor: "rgba(25,25,25,0.1)",
                    p: "5px 7px",
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
          <Typography variant="h5">{props.item?.jobTitle}</Typography>
        </Grid>
        <Grid container item spacing={2} flexWrap="nowrap">
          <Grid container item xs="auto" alignItems="center">
            <BusinessCenterIcon />
            <Typography variant="body2">Fulltime</Typography>
          </Grid>
          <Grid container item xs="auto" alignItems="center">
            <QueryBuilderIcon />
            <Typography variant="body2">3 mins ago</Typography>
          </Grid>
        </Grid>
        <Grid container item>
          <Typography variant="body2">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae
            architecto eveniet, dolor quo repellendus pariatur Lorem ipsum dolor
            sit amet, consectetur adipisicing elit. Recusandae architecto
            eveniet, dolor quo repellendus pariatur
          </Typography>
        </Grid>
        <Grid container item justifyContent="space-between">
          <Grid container item xs={6}>
            <Grid container alignItems="center">
              <Typography variant="h6" sx={{ color: "blue" }}>
                $500
              </Typography>
              <Typography variant="body2">/hour</Typography>
            </Grid>
          </Grid>
          <Grid container item xs={6} justifyContent="end">
            <Grid item>
              <Button size="small" variant="contained">
                Apply now
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </VacancyBlock>
  );
};

export default JobVacancy;

const VacancyBlock = styled(Grid)(({ theme }) => ({
  backgroundColor: "#f8faff",
  boxShadow: "1px 1px 5px lightgray",
  borderRadius: "5px",
  padding: "16px",
  marginBottom: "24px",
  transition: "0.3s",
  "&:hover": {
    backgroundColor: "transparent",
  },
}));
