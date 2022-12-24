import React from "react";
import {
  Button,
  Divider,
  Grid,
  Typography,
  List,
  ListItem,
  Avatar,
  Rating,
} from "@mui/material";
// Icons
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import RedditIcon from "@mui/icons-material/Reddit";
import InstagramIcon from "@mui/icons-material/Instagram";
import LanguageIcon from "@mui/icons-material/Language";
import SchoolIcon from "@mui/icons-material/School";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";

const CandidateDetails: React.FC = () => {
  return (
    <>
      <Grid
        item
        sx={{ pt: 5, borderBottom: "1px solid lightgray", pb: 3, mb: 5 }}
      >
        <Grid container spacing={4}>
          <Grid item xs={12} sx={{ position: "relative", pb: 3 }}>
            <img
              src="https://www.objectiv.tv/wp-content/uploads/2020/10/SpaceX.jpg"
              alt="Google"
              style={{
                height: "400px",
                width: "100%",
                objectFit: "cover",
                borderRadius: "10px",
                // objectPosition: 'left',
                // position: 'absolute',
                // borderRadius: '5px',
                // top: 0,
                // left: 0
              }}
            />
            <Avatar
              src="https://i.seadn.io/gae/FM_SKlNKYIrnMkf53jeRPpg3xB2XkXDaw7t7ALVxzQoHNeofGxb1IV44kIUrJY_Fz-1xFeVquoWmYiAr5Yr-2Jo5PAFL5dx4fM2-wC8?auto=format&w=1000"
              sx={{
                position: "absolute",
                bottom: 0,
                left: "110px",
                width: 106,
                height: 106,
              }}
            />
          </Grid>
          <Grid
            container
            item
            justifyContent="space-between"
            alignItems="start"
          >
            <Grid container item xs="auto" spacing={3} direction="column">
              <Grid item>
                <Grid container item alignItems="center">
                  <Typography variant="h3">Elon Musk</Typography>
                </Grid>
                <Grid>
                  <Typography variant="body2">New York, USA</Typography>
                </Grid>
                <Grid item>
                  <Typography variant="body2">
                    CEO: Tesla, SpaceX, Game developer
                  </Typography>
                </Grid>
              </Grid>
              <Grid container item>
                <Rating name="read-only" value={4} readOnly />
                <Typography>(488)</Typography>
              </Grid>
            </Grid>
            <Grid container item xs="auto" justifyContent="start">
              <Button variant="contained" size="large">
                Download CV
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid container item spacing={4}>
        <Grid item xs={12} md={8}>
          <Grid container spacing={4}>
            {/* Employment Information */}
            <Grid container item>
              <Grid
                container
                item
                sx={{
                  border: "1px solid lightgray",
                  p: 3,
                  borderRadius: "10px",
                }}
              >
                <Grid container spacing={4}>
                  <Grid container item>
                    <Typography variant="h5">Employment Information</Typography>
                    <Divider sx={{ width: "100%", pt: 3 }} />
                  </Grid>
                  <Grid container item>
                    <Grid container item xs={6} alignItems="center">
                      <Grid item xs={4}>
                        <Typography variant="body2">Industry</Typography>
                      </Grid>
                      <Grid item xs={8}>
                        <Typography>
                          Mechanical / Auto / Automotive, Civil / Construction
                        </Typography>
                      </Grid>
                    </Grid>
                    <Grid container item xs={6} alignItems="center">
                      <Grid item xs={4}>
                        <Typography variant="body2">Job level</Typography>
                      </Grid>
                      <Grid item xs={8}>
                        <Typography>{"Experienced (Non - Manager)"}</Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid container item>
                    <Grid container item xs={6} alignItems="center">
                      <Grid item xs={4}>
                        <Typography variant="body2">Salary</Typography>
                      </Grid>
                      <Grid item xs={8}>
                        <Typography>$800 - $1000</Typography>
                      </Grid>
                    </Grid>
                    <Grid container item xs={6} alignItems="center">
                      <Grid item xs={4}>
                        <Typography variant="body2">Experience</Typography>
                      </Grid>
                      <Grid item xs={8}>
                        <Typography>1 - 2 years</Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid container item>
                    <Grid container item xs={6} alignItems="center">
                      <Grid item xs={4}>
                        <Typography variant="body2">Job type</Typography>
                      </Grid>
                      <Grid item xs={8}>
                        <Typography>Permanent</Typography>
                      </Grid>
                    </Grid>
                    <Grid container item xs={6} alignItems="center">
                      <Grid item xs={4}>
                        <Typography variant="body2">Deadline</Typography>
                      </Grid>
                      <Grid item xs={8}>
                        <Typography>10/08/2022</Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid container item>
                    <Grid container item xs={6} alignItems="center">
                      <Grid item xs={4}>
                        <Typography variant="body2">Updated</Typography>
                      </Grid>
                      <Grid item xs={8}>
                        <Typography>10/07/2022</Typography>
                      </Grid>
                    </Grid>
                    <Grid container item xs={6} alignItems="center">
                      <Grid item xs={4}>
                        <Typography variant="body2">Location</Typography>
                      </Grid>
                      <Grid item xs={8}>
                        <Typography>Dallas, Texas Remote Friendly</Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            {/* Text, requrients etc... */}
            <Grid container item>
              <Grid container item spacing={2}>
                <Grid container item>
                  <Typography variant="h5">About me</Typography>
                </Grid>
                <Grid item>
                  <Typography variant="body1">
                    The AliStudio Design team has a vision to establish a
                    trusted platform that enables productive and healthy
                    enterprises in a world of digital and remote everything,
                    constantly changing work patterns and norms, and the need
                    for organizational resiliency.
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography>
                    The ideal candidate will have strong creative skills and a
                    portfolio of work which demonstrates their passion for
                    illustrative design and typography. This candidate will have
                    experiences in working with numerous different design
                    platforms such as digital and print forms.
                  </Typography>
                </Grid>
                <Grid container item>
                  <Typography variant="h5">Skills</Typography>
                </Grid>
                <Grid item>
                  <List>
                    <ListItem>
                      A portfolio demonstrating well thought through and
                      polished end to end customer journeys
                    </ListItem>
                    <ListItem>
                      5+ years of industry experience in interactive design and
                      / or visual design
                    </ListItem>
                    <ListItem>Excellent interpersonal skills</ListItem>
                    <ListItem>
                      Aware of trends inmobile, communications, and
                      collaboration
                    </ListItem>
                    <ListItem>
                      Ability to create highly polished design prototypes,
                      mockups, and other communication artifacts
                    </ListItem>
                    <ListItem>
                      The ability to scope and estimate efforts accurately and
                      prioritize tasks and goals independently
                    </ListItem>
                    <ListItem>
                      History of impacting shipping products with your work
                    </ListItem>
                    <ListItem>
                      A Bachelor's Degree in Design (or related field) or
                      equivalent professional experience
                    </ListItem>
                    <ListItem>
                      Proficiency in a variety of design tools such as Figma,
                      Photoshop, Illustrator, and Sketch
                    </ListItem>
                  </List>
                </Grid>
                <Grid container item>
                  <Typography variant="h5">Experience</Typography>
                </Grid>
                <Grid item>
                  <List>
                    <ListItem>
                      Designing user experiences for enterprise software /
                      services
                    </ListItem>
                    <ListItem>
                      Creating and applying established design principles and
                      interaction patterns
                    </ListItem>
                    <ListItem>
                      Aligning or influencing design thinking with teams working
                      in other geographies
                    </ListItem>
                  </List>
                </Grid>
                <Grid container item>
                  <Typography variant="h5">Education</Typography>
                </Grid>
                <Grid item>
                  <List>
                    <ListItem>
                      Designing user experiences for enterprise software /
                      services
                    </ListItem>
                    <ListItem>
                      Creating and applying established design principles and
                      interaction patterns
                    </ListItem>
                    <ListItem>
                      Aligning or influencing design thinking with teams working
                      in other geographies
                    </ListItem>
                  </List>
                </Grid>
              </Grid>
            </Grid>
            {/* Apply now block */}
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
        </Grid>
        <Grid item xs={12} md={4}>
          <Grid container spacing={4}>
            {/* Company details */}
            <Grid container item>
              <Grid
                container
                item
                sx={{
                  border: "1px solid lightgray",
                  p: 3,
                  borderRadius: "10px",
                }}
              >
                <Grid container spacing={3}>
                  {/* Overview */}
                  <Grid container item spacing={2}>
                    <Grid container item>
                      <Typography variant="h5">Overview</Typography>
                    </Grid>
                    <Grid container item>
                      <Divider sx={{ width: "100%" }} />
                    </Grid>
                    <Grid container item spacing={1}>
                      <Grid item>
                        <BusinessCenterIcon />
                      </Grid>
                      <Grid item>
                        <Grid>
                          <Typography variant="body2">Experience</Typography>
                        </Grid>
                        <Grid>
                          <Typography variant="h6">12 years</Typography>
                        </Grid>
                      </Grid>
                    </Grid>
                    <Grid container item spacing={1}>
                      <Grid item>
                        <AttachMoneyIcon />
                      </Grid>
                      <Grid item>
                        <Grid>
                          <Typography variant="body2">
                            Expected Salary
                          </Typography>
                        </Grid>
                        <Grid>
                          <Typography variant="h6">$50k - $75k</Typography>
                        </Grid>
                      </Grid>
                    </Grid>
                    <Grid container item spacing={1}>
                      <Grid item>
                        <LanguageIcon />
                      </Grid>
                      <Grid item>
                        <Grid>
                          <Typography variant="body2">Language</Typography>
                        </Grid>
                        <Grid>
                          <Typography variant="h6">English, German</Typography>
                        </Grid>
                      </Grid>
                    </Grid>
                    <Grid container item spacing={1}>
                      <Grid item>
                        <SchoolIcon />
                      </Grid>
                      <Grid item>
                        <Grid>
                          <Typography variant="body2">
                            Education Level
                          </Typography>
                        </Grid>
                        <Grid>
                          <Typography variant="h6">Master Degree</Typography>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid container item>
                    <Divider sx={{ width: "100%" }} />
                  </Grid>
                  {/* Address, phone, email candidate */}
                  <Grid item>
                    <List>
                      <ListItem>
                        205 North Michigan Avenue, Suite 810 Chicago, 60601, USA
                      </ListItem>
                      <ListItem>Phone: (123) 456-7890</ListItem>
                      <ListItem>Email: contact@Evara.com</ListItem>
                    </List>
                  </Grid>
                  {/* Send button */}
                  <Grid container item>
                    <Button size="large" fullWidth variant="contained">
                      Send message
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default CandidateDetails;
