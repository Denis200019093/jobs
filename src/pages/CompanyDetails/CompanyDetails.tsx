import React from "react";
import { Grid, Button, Typography, List, ListItem } from "@mui/material";

import LanguageIcon from "@mui/icons-material/Language";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";

import PreviewBar from "../../components/Reusable/PreviewBar";
import ReactMarkdown from "react-markdown";
import CustomDivider from "../../components/Reusable/CustomDivider";
import { useGetCompanyDetailsQuery } from "../../redux/features/company.api";
import { useParams } from "react-router-dom";

const CompanyDetails: React.FC = () => {
  const { ownerId } = useParams();

  const { data: companyDetails } = useGetCompanyDetailsQuery(ownerId);

  return (
    <Grid container>
      <Grid item sx={{ pt: 5 }}>
        <PreviewBar
          allowEditing={false}
          previewTitle={"Inforce Digital"}
          miniDescription={"Out mission to be better"}
          location={"Ukraine, Lviv city"}
        >
          <Button
            variant="contained"
            // target="_blank"
            // href={`http://localhost:4444/${candidateDetails?.pdfFile}`}
          >
            Contact us
          </Button>
        </PreviewBar>
      </Grid>
      <Grid container>
        <Grid item xs={12} md={8}>
          <ReactMarkdown children={"Wolctove to blabla"} />
        </Grid>
        <Grid item xs={12} md={4}>
          <Grid
            item
            sx={{
              borderRadius: "10px",
              p: 2,
              boxShadow: "0 4px 6px rgb(25 15 9 / 10%)",
            }}
          >
            <Grid container>
              <Typography variant="h5">
                {companyDetails?.companyName}
              </Typography>
            </Grid>
            <Grid container spacing={2}>
              <List>
                {companyDetails?.companyAddress && (
                  <ListItem>{companyDetails?.companyAddress}</ListItem>
                )}
                {companyDetails?.companyNumber && (
                  <ListItem>Phone: {companyDetails?.companyNumber}</ListItem>
                )}
                {companyDetails?.companyEmail && (
                  <ListItem>Email: {companyDetails?.companyEmail}</ListItem>
                )}
              </List>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default CompanyDetails;
