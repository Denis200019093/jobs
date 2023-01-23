import React from "react";
import { useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import {
  Button,
  Divider,
  Grid,
  Typography,
  List,
  ListItem,
} from "@mui/material";
// Icons
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import RedditIcon from "@mui/icons-material/Reddit";
import InstagramIcon from "@mui/icons-material/Instagram";
import SchoolIcon from "@mui/icons-material/School";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import LanguageIcon from "@mui/icons-material/Language";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";

import PreviewBar from "../../components/organisms/PreviewBar";
import { useFetchCandidateDetailsQuery } from "../../redux/features/user.api";
import CustomDivider from "../../components/atoms/CustomDivider";

const Profile: React.FC = () => {
  const { id } = useParams();

  const { data: candidateDetails } = useFetchCandidateDetailsQuery(id, {
    skip: id === undefined,
  });

  return (
    <Grid container>
      <Grid item sx={{ pt: 5 }}>
        <PreviewBar
          allowEditing={false}
          previewTitle={candidateDetails?.fullName || ""}
          miniDescription={candidateDetails?.profession}
          location={candidateDetails?.city}
        >
          <Button
            variant="contained"
            target="_blank"
            href={`http://localhost:4444/${candidateDetails?.pdfFile}`}
          >
            Watch CV
          </Button>
        </PreviewBar>
      </Grid>
      <Grid container item spacing={4}>
        <Grid container item xs={12} md={8}>
          <Grid container item>
            <ReactMarkdown children={candidateDetails?.description || ""} />
          </Grid>

          <Grid container item>
            <Grid
              container
              item
              sx={{ borderTop: "1px solid lightgray", pt: 5, mt: 5 }}
              alignItems="center"
            >
              <Grid container item xs={12} md={6} spacing={2}>
                <Grid item>
                  <Button size="medium" variant="contained">
                    Send message
                  </Button>
                </Grid>
                <Grid item>
                  <Button size="medium">Save candidate</Button>
                </Grid>
              </Grid>
              <Grid
                container
                item
                xs={12}
                md={6}
                justifyContent="end"
                alignItems="center"
                spacing={2}
              >
                <Grid item>
                  <Typography variant="body2">Share this</Typography>
                </Grid>
                <Grid item>
                  <FacebookIcon />
                </Grid>
                <Grid item>
                  <TwitterIcon />
                </Grid>
                <Grid item>
                  <RedditIcon />
                </Grid>
                <Grid item>
                  <InstagramIcon />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
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
              <Typography variant="h5">Overview</Typography>
            </Grid>
            <CustomDivider />
            <Grid container spacing={2}>
              {candidateDetails?.jobExperience ? (
                <Grid container item spacing={1}>
                  <Grid item>
                    <BusinessCenterIcon />
                  </Grid>
                  <Grid item>
                    <Typography variant="body2">Experience</Typography>
                    <Typography variant="h6">
                      {candidateDetails.jobExperience}
                    </Typography>
                  </Grid>
                </Grid>
              ) : null}
              {candidateDetails?.jobSalary?.length ? (
                <Grid container item spacing={1}>
                  <Grid item>
                    <AttachMoneyIcon />
                  </Grid>
                  <Grid item>
                    <Typography variant="body2">Expected salary</Typography>
                    <Typography variant="h6">
                      {candidateDetails.jobSalary.join(" - ")}
                    </Typography>
                  </Grid>
                </Grid>
              ) : null}
              {candidateDetails?.englishLevel ? (
                <Grid container item spacing={1}>
                  <Grid item>
                    <LanguageIcon />
                  </Grid>
                  <Grid item>
                    <Typography variant="body2">English level</Typography>
                    <Typography variant="h6">
                      {candidateDetails.englishLevel}
                    </Typography>
                  </Grid>
                </Grid>
              ) : null}
            </Grid>
            <CustomDivider />
            <Grid container spacing={2}>
              <List>
                {candidateDetails?.city ? (
                  <ListItem>{candidateDetails?.city}</ListItem>
                ) : null}
                {candidateDetails?.contactNumber ? (
                  <ListItem>Phone: {candidateDetails?.contactNumber}</ListItem>
                ) : null}
                {candidateDetails?.email ? (
                  <ListItem>Email: {candidateDetails?.email}</ListItem>
                ) : null}
              </List>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Profile;
