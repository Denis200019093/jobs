import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import {
  AppBar,
  IconButton,
  Typography,
  Menu,
  Avatar,
  Button,
  Grid,
  Tooltip,
  MenuItem,
} from "@mui/material";

import { employeeLinks, employerLinks, guestLinks } from "../../helpers/arrays";
import { useGetMeQuery } from "../../redux/features/auth.api";
import useScrollDirection from "../../hooks/useScrollDirection";

interface ILink {
  path: string;
  label: string;
}

const Header: React.FC = () => {
  const [navLinks, setNavLinks] = useState<ILink[]>([]);

  const { data: user } = useGetMeQuery();

  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      setNavLinks(guestLinks);
    }

    if (user?.typeUser === "Employer") {
      setNavLinks(employerLinks);
    }

    if (user?.typeUser === "Employee") {
      setNavLinks(employeeLinks);
    }
  }, [user]);

  const scrollDirection = useScrollDirection();

  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleLogout = () => {
    try {
      navigate("/login");
      window.localStorage.removeItem("token");
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <AppBar
      sx={{
        bgcolor: "#fff",
        pt: 2.5,
        pb: 2,
        transition: "0.3s",
        boxShadow: "0 4px 6px rgb(25 15 9 / 10%)",
        transform: `translateY(${scrollDirection === "down" ? "-100%" : "0"})`,
      }}
      position="sticky"
    >
      <Grid container justifyContent="center">
        <Grid
          container
          item
          xs={10.5}
          justifyContent="space-between"
          alignItems="center"
        >
          <Grid item>
            <Typography variant="h6" noWrap>
              LOGO
            </Typography>
          </Grid>

          <Grid item>
            <Grid container spacing={4}>
              {navLinks.map((page) => (
                <Grid item key={page.path}>
                  <NavLink to={page.path}>
                    <Typography variant="body2" textAlign="center">
                      {page.label}
                    </Typography>
                  </NavLink>
                </Grid>
              ))}
            </Grid>
          </Grid>

          <Grid item sx={{ flexGrow: 0 }}>
            <Grid>
              {user ? (
                <Tooltip title="Open settings">
                  <Grid container onClick={handleOpenUserMenu}>
                    <IconButton sx={{ p: 0 }}>
                      <Avatar
                        sx={{ width: "50px", height: "50px" }}
                        alt={user?.fullName}
                        src={`http://localhost:4444/${user?.avatarURL}`}
                      />
                    </IconButton>
                  </Grid>
                </Tooltip>
              ) : (
                <Grid container spacing={2}>
                  <Grid item>
                    <NavLink to="register">
                      <Button
                        sx={{
                          height: "50px",
                          maxWidth: "100px",
                          borderRadius: "10px",
                        }}
                        variant="text"
                        size="small"
                      >
                        Register
                      </Button>
                    </NavLink>
                  </Grid>
                  <Grid item>
                    <NavLink to="login">
                      <Button
                        sx={{
                          height: "50px",
                          maxWidth: "100px",
                          borderRadius: "10px",
                        }}
                        variant="contained"
                        size="small"
                      >
                        Sign in
                      </Button>
                    </NavLink>
                  </Grid>
                </Grid>
              )}
            </Grid>

            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {/* {settings.map((setting) => ( */}
              <MenuItem onClick={handleCloseUserMenu}>
                <Typography onClick={handleLogout} textAlign="center">
                  Logout
                </Typography>
              </MenuItem>
              {/* ))} */}
            </Menu>
          </Grid>
        </Grid>
      </Grid>
    </AppBar>
  );
};

export default Header;
