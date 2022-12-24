import React, { useMemo } from "react";
import { Link } from "react-router-dom";
import {
  Grid,
  Button,
  Typography,
  Rating,
  styled,
  Divider,
} from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Controller, EffectFade } from "swiper";
// Icons
import YouTubeIcon from "@mui/icons-material/YouTube";
import StarIcon from "@mui/icons-material/Star";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import BookmarksOutlinedIcon from '@mui/icons-material/BookmarksOutlined';
import BookmarksIcon from "@mui/icons-material/Bookmarks";
import { data } from "../../../../data";
import Background from "../../../UIComponents/Background";
import NormalSlider from "../NormalSlider";
import MultiLineText from "../../../UIComponents/MultiLineText";
import { IMovie } from "../../../../models/Movie";

interface IProps {
  setControlledSwiper: (props: any) => void;
  latestReleases: IMovie[]
}

const LargeSlider: React.FC<IProps> = ({ setControlledSwiper, latestReleases }) => {
  const params = useMemo(() => {
    return {
      modules: [Controller, EffectFade],
      preloadImages: false,
      allowTouchMove: false,
      lazy: true,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      loop: false,
      onSwiper: setControlledSwiper,
    };
  }, [setControlledSwiper]);
  console.log(latestReleases);
  
  return (
    // <Grid item xs={12} sx={{ zIndex: 5 }}>
    <Swiper {...params} effect={"fade"} style={{ width: "100%" }}>
      {latestReleases?.map((movie, index) => (
        <SwiperSlide key={movie._id}>
          <Grid
            item
            sx={{
              position: "relative",
              top: 0,
              width: "100%",
              height: "100%",
              background:
                "linear-gradient(180deg, rgba(10,10,10,0.3) 0%, rgba(10,10,10,0.9) 65%)",
            }}
          />
          <Background background={movie.background} />
          <Grid
            container
            item
            xs={5}
            sx={{ position: "absolute", bottom: "35px", left: "35px" }}
            spacing={1.2}
          >
            <Grid container item alignItems="center" flexWrap="nowrap">
              <Grid item alignItems="center">
                <Typography
                  sx={{
                    fontWeight: 100,
                    mr: 2,
                    fontSize: "74px",
                    color: "lightgray",
                  }}
                >
                  {index + 1 < 10 ? "0" + (index + 1) : index + 1}
                </Typography>
              </Grid>
              <Grid item>
                <MultiLineText text={movie.title} variant="h2" />
              </Grid>
            </Grid>
            <Grid container item alignItems="center">
              <Grid item alignItems="center">
                <Rating
                  name="text-feedback"
                  sx={{ mr: 2 }}
                  value={3.8}
                  readOnly
                  precision={0.5}
                  emptyIcon={
                    <StarIcon
                      style={{ color: "lightgray", opacity: 0.55 }}
                      fontSize="inherit"
                    />
                  }
                />
              </Grid>
              <Grid>
                <Typography variant="h3">8</Typography>
              </Grid>
              <Grid>
                <Typography variant="h6">/10</Typography>
              </Grid>
            </Grid>
            <Grid container item alignItems="center">
              <Grid>
                <Typography variant="h5" sx={{ mr: 1 }}>
                  {movie.year}
                </Typography>
              </Grid>
              <Grid>
                <Typography variant="h6" sx={{ color: "orange" }}>
                  {movie.type}
                </Typography>
              </Grid>
            </Grid>
            <Grid container item>
              {movie.qualities?.map((item) => (
                <Typography variant="quality">{item}</Typography>
              ))}
            </Grid>
            <Grid container item>
              <MultiLineText
                variant="body1"
                text={movie.description}
                quantityLines={3}
              />
            </Grid>
            <Grid container item>
              <Grid container alignItems="center">
                {/* {movie.actors.map((item) => (
                  <Typography variant="actors">{item}</Typography>
                ))} */}
              </Grid>
            </Grid>
            <Grid container item>
              <Grid>
                <Link to={{ pathname: `/movie/${movie._id}` }}>
                  <Button variant="watch">
                    <PlayCircleOutlineIcon sx={{ color: "gray" }} />
                    <Divider orientation="vertical" sx={{ ml: 1, mr: 1 }} />
                    <Typography variant="h6">Watch</Typography>
                  </Button>
                </Link>
              </Grid>
              <Grid>
                <Link
                  to={{
                    pathname: `/watch/${movie.title}`,
                    hash: "#trailer",
                  }}
                >
                  <Button variant="text" sx={{ mr: 2, ml: 2 }}>
                    <Typography variant="h6">Trailer</Typography>

                    <YouTubeIcon sx={{ color: "red", ml: 1 }} />
                  </Button>
                </Link>
              </Grid>
              <Grid>
                <Button variant="text">
                  <Typography variant="h6">Save to</Typography>

                  <BookmarksOutlinedIcon sx={{ color: "green", ml: 1 }} />
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </SwiperSlide>
      ))}
    </Swiper>
    // </Grid>
  );
};

export default LargeSlider;