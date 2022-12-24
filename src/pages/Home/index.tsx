import React from "react";
import { Grid } from "@mui/material";

import MoviesList from "../../components/MoviesList";
import NewMovies from "../../components/NewMovies";
import Announcements from "./../../components/Announcements/index";

import MainLayout from "../../components/Layouts/MainLayout";
import SearchBar from "../../components/SearchBar";

const Home: React.FC = () => {
  return (
    <MainLayout>
      <SearchBar />
    </MainLayout>
  );
};

export default Home;
