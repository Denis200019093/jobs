import React, { useEffect } from "react";
import { Grid, Typography } from "@mui/material";

import { useAppDispatch, useAppSelector } from "../../hooks/redux";

import FilterBar from "../FilterBar";
import SortBar from "../SortBar";
import { data } from "../../data";
import Title from "../UIComponents/MultiLineText";
import Poster from "../UIComponents/Poster";
import MovieItem from "../MovieItem";

const MoviesList: React.FC = () => {
  return (
    <Grid container item sx={{ pb: 100 }} direction="column" spacing={4}>
      <FilterBar />
      <SortBar />
      <Grid container item columns={{ xs: 4, sm: 9, md: 10 }} spacing={5}>
        {data.map((movie, index) => (
          <Grid key={index} item xs={2} sm={3} md={2}>
            <MovieItem  movie={movie} />
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};

export default MoviesList;
