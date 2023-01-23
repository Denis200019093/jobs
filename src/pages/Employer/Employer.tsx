import React from "react";
import { Grid, Button, styled } from "@mui/material";
import { NavLink, Outlet } from "react-router-dom";

import { useGetUserQuery } from "../../redux/features/user.api";
import PreviewBar from "../../components/organisms/PreviewBar";

const employeeLinks = [
  { path: "profile", label: "Profile", end: true },
  { path: "about-me", label: "About me", end: false },
  { path: "saved-jobs", label: "Saved jobs", end: false },
];

const Employer: React.FC = () => {
  const { data: user } = useGetUserQuery();

  return (
    <Grid container>
      <PreviewBar
        allowEditing={true}
        previewTitle={user ? user.fullName : ""}
        miniDescription={user ? user.profession : ""}
        location={user?.city || ""}
      >
        <NavLink to={`/candidate/${user?._id}`}>
          <Button variant="contained">Preview</Button>
        </NavLink>
      </PreviewBar>
      <Grid container item spacing={5}>
        <Grid item xs={12} md={3}>
          <Grid container>
            {employeeLinks.map((item) => (
              <NavLinkProfile
                key={item.path}
                draggable={false}
                to={item.path}
                style={({ isActive }) => ({
                  boxShadow: isActive ? "0 4px 6px rgb(25 15 9 / 10%)" : "none",
                  transform: `translateY(${isActive ? "-5px" : "0"})`,
                  color: isActive ? "#000" : "gray",
                })}
              >
                {item.label}
              </NavLinkProfile>
            ))}
          </Grid>
        </Grid>
        <Grid container item xs={12} md={9}>
          <Outlet />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Employer;

const NavLinkProfile = styled(NavLink)({
  width: "100%",
  backgroundColor: "rgba(200,200,200,0.15)",
  transition: "0.3s",
  marginBottom: "10px",
  borderRadius: "8px",
  padding: "12px",
  color: "gray",
  fontSize: "20px",
});
