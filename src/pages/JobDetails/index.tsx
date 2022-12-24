import React from "react";
import {
  Button,
  Divider,
  Grid,
  Typography,
  List,
  ListItem,
  Avatar,
} from "@mui/material";
// Icons
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import RedditIcon from "@mui/icons-material/Reddit";
import InstagramIcon from "@mui/icons-material/Instagram";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import QueryBuilderIcon from "@mui/icons-material/QueryBuilder";

const JobDetails: React.FC = () => {
  return (
    <>
      <Grid
        item
        sx={{ pt: 5, borderBottom: "1px solid lightgray", pb: 3, mb: 5 }}
      >
        <Grid container spacing={4}>
          <Grid item xs={12}>
            <img
              src="https://assets.entrepreneur.com/content/3x2/2000/20150805204041-google-company-building-corporate.jpeg"
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
          </Grid>
          <Grid
            container
            item
            justifyContent="space-between"
            alignItems="center"
          >
            <Grid item>
              <Typography variant="h3">
                Senior Full Stack Engineer, Creator Success Full Time
              </Typography>
              <Grid container spacing={2}>
                <Grid container item xs="auto" alignItems="center">
                  <BusinessCenterIcon />
                  <Typography variant="body2">Fulltime</Typography>
                </Grid>
                <Grid container item xs="auto" alignItems="center">
                  <QueryBuilderIcon />
                  <Typography variant="body2">3 mins ago</Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item>
              <Button variant="contained" size="large">
                Apply now
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
                <Grid item>
                  <Typography variant="h5">
                    Welcome to AliStudio Team
                  </Typography>
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
                <Grid item>
                  <Typography variant="h5">
                    Essential Knowledge, Skills, and Experience
                  </Typography>
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
                <Grid item>
                  <Typography variant="h5">Preferred Experience</Typography>
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
                    <Button size="large" variant="contained">
                      Apply now
                    </Button>
                  </Grid>
                  <Grid item>
                    <Button size="large">Save job</Button>
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
            <Grid item>
              <Grid
                // container
                item
                sx={{
                  borderRadius: "10px",
                  p: 2,
                  border: "1px solid lightgray",
                }}
              >
                <Grid container spacing={2}>
                  <Grid item>
                    <Avatar
                      sx={{ width: "75px", height: "75px" }}
                      src="https://cdn.dribbble.com/userupload/3158902/file/original-7c71bfa677e61dea61bc2acd59158d32.jpg?resize=400x0"
                    />
                  </Grid>
                  <Grid item>
                    <Typography>Inforce Digital</Typography>
                    <Typography>Lviv, Ukraine</Typography>
                    <Typography>02 open jobs</Typography>
                  </Grid>
                  <Grid item>
                    <List>
                      <ListItem>
                        205 North Michigan Avenue, Suite 810 Chicago, 60601, USA
                      </ListItem>
                      <ListItem>Phone: (123) 456-7890</ListItem>
                      <ListItem>Email: contact@gmail.com</ListItem>
                    </List>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            {/* Similar jobs */}
            <Grid item>
              <Grid
                // container
                item
                sx={{
                  borderRadius: "10px",
                  p: 2,
                  border: "1px solid lightgray",
                }}
              >
                <Grid container spacing={4}>
                  <Grid container item>
                    <Typography variant="h5">Similar jobs</Typography>
                    <Divider sx={{ width: "100%", pt: 3 }} />
                  </Grid>
                  <Grid container item spacing={4}>
                    <Grid container item spacing={2} flexWrap="nowrap">
                      <Grid item xs="auto">
                        <Avatar
                          sx={{ width: "75px", height: "75px" }}
                          src="https://cdn.dribbble.com/userupload/3158902/file/original-7c71bfa677e61dea61bc2acd59158d32.jpg?resize=400x0"
                        />
                      </Grid>
                      <Grid item spacing={1}>
                        <Grid item>
                          <Typography variant="h6">
                            Front-end developer
                          </Typography>
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
                        <Grid
                          container
                          item
                          justifyContent="space-between"
                          alignItems="center"
                          flexWrap="nowrap"
                        >
                          <Grid container item xs="auto" alignItems="center">
                            <Typography variant="h6" sx={{ color: "blue" }}>
                              $250
                            </Typography>
                            <Typography variant="body2">/hour</Typography>
                          </Grid>
                          <Grid container item xs="auto">
                            <Typography variant="body2">
                              New York, US
                            </Typography>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                    <Grid container item spacing={2} flexWrap="nowrap">
                      <Grid item xs="auto">
                        <Avatar
                          sx={{ width: "75px", height: "75px" }}
                          src="https://cdn.dribbble.com/userupload/3158902/file/original-7c71bfa677e61dea61bc2acd59158d32.jpg?resize=400x0"
                        />
                      </Grid>
                      <Grid item spacing={1}>
                        <Grid item>
                          <Typography variant="h6">UI / UX Designer</Typography>
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
                        <Grid
                          container
                          item
                          justifyContent="space-between"
                          alignItems="center"
                          flexWrap="nowrap"
                        >
                          <Grid container item xs="auto" alignItems="center">
                            <Typography variant="h6" sx={{ color: "blue" }}>
                              $250
                            </Typography>
                            <Typography variant="body2">/hour</Typography>
                          </Grid>
                          <Grid container item xs="auto">
                            <Typography variant="body2">
                              New York, US
                            </Typography>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                    <Grid container item spacing={2} flexWrap="nowrap">
                      <Grid item xs="auto">
                        <Avatar
                          sx={{ width: "75px", height: "75px" }}
                          src="https://cdn.dribbble.com/userupload/3158902/file/original-7c71bfa677e61dea61bc2acd59158d32.jpg?resize=400x0"
                        />
                      </Grid>
                      <Grid item spacing={1}>
                        <Grid item>
                          <Typography variant="h6">UI / UX Designer</Typography>
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
                        <Grid
                          container
                          item
                          justifyContent="space-between"
                          alignItems="center"
                          flexWrap="nowrap"
                        >
                          <Grid container item xs="auto" alignItems="center">
                            <Typography variant="h6" sx={{ color: "blue" }}>
                              $250
                            </Typography>
                            <Typography variant="body2">/hour</Typography>
                          </Grid>
                          <Grid container item xs="auto">
                            <Typography variant="body2">
                              New York, US
                            </Typography>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                    <Grid container item spacing={2} flexWrap="nowrap">
                      <Grid item xs="auto">
                        <Avatar
                          sx={{ width: "75px", height: "75px" }}
                          src="https://cdn.dribbble.com/userupload/3158902/file/original-7c71bfa677e61dea61bc2acd59158d32.jpg?resize=400x0"
                        />
                      </Grid>
                      <Grid item spacing={1}>
                        <Grid item>
                          <Typography variant="h6">UI / UX Designer</Typography>
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
                        <Grid
                          container
                          item
                          justifyContent="space-between"
                          alignItems="center"
                          flexWrap="nowrap"
                        >
                          <Grid container item xs="auto" alignItems="center">
                            <Typography variant="h6" sx={{ color: "blue" }}>
                              $250
                            </Typography>
                            <Typography variant="body2">/hour</Typography>
                          </Grid>
                          <Grid container item xs="auto">
                            <Typography variant="body2">
                              New York, US
                            </Typography>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                    <Grid container item spacing={2} flexWrap="nowrap">
                      <Grid item xs="auto">
                        <Avatar
                          sx={{ width: "75px", height: "75px" }}
                          src="https://cdn.dribbble.com/userupload/3158902/file/original-7c71bfa677e61dea61bc2acd59158d32.jpg?resize=400x0"
                        />
                      </Grid>
                      <Grid item spacing={1}>
                        <Grid item>
                          <Typography variant="h6">UI / UX Designer</Typography>
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
                        <Grid
                          container
                          item
                          justifyContent="space-between"
                          alignItems="center"
                          flexWrap="nowrap"
                        >
                          <Grid container item xs="auto" alignItems="center">
                            <Typography variant="h6" sx={{ color: "blue" }}>
                              $250
                            </Typography>
                            <Typography variant="body2">/hour</Typography>
                          </Grid>
                          <Grid container item xs="auto">
                            <Typography variant="body2">
                              New York, US
                            </Typography>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                    <Grid container item spacing={2} flexWrap="nowrap">
                      <Grid item xs="auto">
                        <Avatar
                          sx={{ width: "75px", height: "75px" }}
                          src="https://cdn.dribbble.com/userupload/3158902/file/original-7c71bfa677e61dea61bc2acd59158d32.jpg?resize=400x0"
                        />
                      </Grid>
                      <Grid item spacing={1}>
                        <Grid item>
                          <Typography variant="h6">UI / UX Designer</Typography>
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
                        <Grid
                          container
                          item
                          justifyContent="space-between"
                          alignItems="center"
                          flexWrap="nowrap"
                        >
                          <Grid container item xs="auto" alignItems="center">
                            <Typography variant="h6" sx={{ color: "blue" }}>
                              $250
                            </Typography>
                            <Typography variant="body2">/hour</Typography>
                          </Grid>
                          <Grid container item xs="auto">
                            <Typography variant="body2">
                              New York, US
                            </Typography>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
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

export default JobDetails;
