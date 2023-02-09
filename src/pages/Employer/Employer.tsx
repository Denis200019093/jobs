import React from "react";
import { Grid, Button, styled } from "@mui/material";
import { NavLink, Outlet } from "react-router-dom";

import { employerProfileLinks } from "../../helpers/arrays";
import { useGetCompanyDetailsQuery } from "../../redux/features/company.api";
import { useGetMeQuery } from "../../redux/features/auth.api";
import PreviewBar from "../../components/Reusable/PreviewBar";
import AboutMe from "../../components/AboutMe";

const Employer: React.FC = () => {
  const { data: user } = useGetMeQuery();
  const { data: companyDetails } = useGetCompanyDetailsQuery(user?._id);
  console.log(companyDetails);

  return (
    <Grid container>
      <PreviewBar
        allowEditing={true}
        previewTitle={companyDetails?.companyName}
        location={companyDetails?.companyLocation}
      >
        <NavLink to={`/company/${companyDetails?._id}`}>
          <Button variant="contained">Preview</Button>
        </NavLink>
      </PreviewBar>
      <Grid container item spacing={5}>
        <Grid item xs={12} md={3}>
          <Grid container>
            {employerProfileLinks.map((item) => (
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
