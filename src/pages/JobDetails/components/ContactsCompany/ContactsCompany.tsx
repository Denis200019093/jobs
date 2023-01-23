import React from "react";
import { Grid, Avatar, Typography, List, ListItem } from "@mui/material";
import { ICompanyProfile } from "../../../../models/User";

const ContactsCompany: React.FC<{ companyDetails?: ICompanyProfile }> = ({
  companyDetails,
}) => {
  return (
    <Grid container item>
      {companyDetails ? (
        <Grid
          item
          sx={{
            borderRadius: "10px",
            p: 2,
            boxShadow: "0 4px 6px rgb(25 15 9 / 10%)",
          }}
        >
          <Grid container spacing={2}>
            <Grid item>
              <Avatar
                sx={{ width: "75px", height: "75px" }}
                src={`http://localhost:4444/${companyDetails?.companyLogo}`}
              />
            </Grid>
            <Grid item>
              <Typography variant="h6">
                {companyDetails?.companyName}
              </Typography>
              <Typography variant="body2">
                {companyDetails?.companyLocation}
              </Typography>
              <Typography variant="body2">02 Open Jobs</Typography>
            </Grid>
            <Grid item>
              <List>
                <ListItem>Address: {companyDetails?.companyAddress}</ListItem>
                <ListItem>Phone: {companyDetails?.companyNumber}</ListItem>
                <ListItem>Email: {companyDetails?.companyEmail}</ListItem>
              </List>
            </Grid>
          </Grid>
        </Grid>
      ) : (
        <Grid
          container
          item
          sx={{
            boxShadow: "0 4px 6px rgb(25 15 9 / 10%)",
            pt: 5,
            pb: 5,
            borderRadius: "8px",
          }}
          justifyContent="center"
        >
          <Typography variant="h5">Anonymous company</Typography>
        </Grid>
      )}
    </Grid>
  );
};

export default ContactsCompany;
