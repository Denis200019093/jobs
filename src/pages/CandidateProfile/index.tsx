import React from "react";
import {
  Button,
  Divider,
  Grid,
  Typography,
  Avatar,
  styled,
} from "@mui/material";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import MainLayout from "../../Layouts/MainLayout";
import CustomDivider from "../../components/UIComponents/CustomDivider";

const CandidateProfile: React.FC = () => {
  return (
    <>
      <Grid item sx={{ pt: 5, pb: 3, mb: 5 }}>
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
              variant="rounded"
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
            </Grid>
            <Grid container item xs="auto" justifyContent="start">
              <Button variant="contained" size="large">
                Preview
              </Button>
            </Grid>
          </Grid>
        </Grid>
        <CustomDivider />
      </Grid>

      <Grid container item spacing={3}>
        <Grid container item xs={12} md={3} spacing={2} direction="column">
          {/* Links MyProfile & SavedJobd */}
          <Grid item>
            <NavLink to="" end>
              {({ isActive }) => (
                <LinkInsideProfile
                  sx={{ border: isActive ? "2px solid orange" : "" }}
                  variant="body2"
                >
                  My Account
                </LinkInsideProfile>
              )}
            </NavLink>
          </Grid>
          <Grid item>
            <NavLink to="saved-jobs">
              {({ isActive }) => (
                <LinkInsideProfile
                  sx={{ border: isActive ? "2px solid orange" : "" }}
                  variant="body2"
                >
                  Saved jobs
                </LinkInsideProfile>
              )}
            </NavLink>
          </Grid>
          <Grid container item sx={{ mt: 4 }}>
            <Divider sx={{ width: "100%" }} />
          </Grid>
          <Grid container item>
            <Typography variant="body2" sx={{ color: "red" }}>
              Delete account
            </Typography>
          </Grid>
        </Grid>
        {/* <Grid container item spacing={3}> */}
        <Grid container item xs={12} md={9}>
          <Outlet />
        </Grid>
        {/* </Grid> */}
        {/* <Grid container item xs={12} md={3} spacing={2}></Grid> */}
      </Grid>
    </>
  );
};

export default CandidateProfile;

const LinkInsideProfile = styled(Typography)(() => ({
  width: "100%",
  border: "1px solid lightgray",
  // boxShadow: '1px 1px 5px #000',
  borderRadius: "10px",
  padding: "12px 20px",
}));

const Skill = styled(Grid)(() => ({
  backgroundColor: "rgba(25,25,25,0.1)",
  padding: "4px 8px",
  borderRadius: "5px",
}));
