import React, { useState, useEffect } from "react";
import { Grid, styled, TextField } from "@mui/material";

import LargeSlider from "./components/LargeSlider";
import NormalSlider from "./components/NormalSlider";
import SearchPanel from "../SearchPanel";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { fetchLatestRealeses } from '../../redux/reducers/movieSlice'

import "swiper/css";
import "swiper/css/effect-fade";


const NewMovies: React.FC = () => {
  const dispatch = useAppDispatch()
  const { latestReleases } = useAppSelector((state) => state.movie)

  const [controlledSwiper, setControlledSwiper] = useState(null);

  useEffect(() => {
    dispatch(fetchLatestRealeses())
  }, [dispatch])
  console.log(latestReleases);
  
  return (
    <BigSliderContainer container item sx={{ position: 'relative',  p: '0 0 0.5% 0' }}>
      <SearchPanel/>
      <Grid container item xs={12}>
        <LargeSlider setControlledSwiper={setControlledSwiper} latestReleases={latestReleases}/>
      </Grid>
      <Grid
        container
        item
        xs={6}
        sx={{
          position: "absolute",
          bottom: "35px",
          right: 0,
          width: "100%",
          zIndex: 5,
        }}
      >
        <NormalSlider controlledSwiper={controlledSwiper} latestReleases={latestReleases}/>
      </Grid>
    </BigSliderContainer>
  );
};

export default NewMovies;

const BigSliderContainer = styled(Grid)(({ theme }) => ({
  minHeight: '350px', 
  maxHeight: '700px',
  position: 'relative',
  [theme.breakpoints.only('xs')]: {
    minHeight: '300px',
  },
  [theme.breakpoints.up('sm')]: {
    minHeight: '400px',
  },
  [theme.breakpoints.up('md')]: {
    minHeight: '650px',
  },
}))