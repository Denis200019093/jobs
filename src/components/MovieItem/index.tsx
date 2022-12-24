import React, { useState } from "react";
import { Grid, Rating, Typography } from "@mui/material";
// Icons
import PlayCircleFilledIcon from "@mui/icons-material/PlayCircleFilled";

import { IMovie } from "../../models/Movie";
import Poster from "../UIComponents/Poster";
import MultiLineText from "../UIComponents/MultiLineText";
import { Link } from "react-router-dom";

const MovieItem: React.FC<{ movie: IMovie }> = ({ movie }) => {
  const [openHover, setOpenHover] = useState<boolean>(false);

  return (
    <Grid
      item
      sx={{ position: "relative", bgcolor: "#000", p: 1, borderRadius: "5px" }}
    >
      <Grid
        onMouseEnter={() => setOpenHover(true)}
        onMouseLeave={() => setOpenHover(false)}
        item
        sx={{
          position: "relative",
          p: "0 0 150% 0",
        }}
      >
        <Poster posterURL={movie.poster} />
        <>
          {openHover ? (
            <Grid
              container
              justifyContent="center"
              alignItems="center"
              item
              sx={{
                position: "absolute",
                top: 0,
                width: "100%",
                height: "100%",
                bgcolor: "rgba(0,0,0,0.7)",
                cursor: "pointer",
              }}
            >
              <PlayCircleFilledIcon
                sx={{ fontSize: "100px", opacity: "0.9" }}
              />
            </Grid>
          ) : null}
        </>
      </Grid>

      <Grid
        container
        item
        sx={{ position: "absolute", top: "12px", left: "12px" }}
        direction="column"
        spacing={2}
      >
        <Grid item>
          <Typography variant="status">LostFilm</Typography>
        </Grid>
        <Grid item>
          <Typography variant="quality">{movie.qualities[0]}</Typography>
        </Grid>
      </Grid>
      <Grid container item spacing={2}>
        <Grid item>
          <Link to={`/movie/${movie.title}`}>
            <MultiLineText variant="h6" text={movie.title} quantityLines={1} />
          </Link>
        </Grid>
        <Grid container item justifyContent="center">
          <Typography variant="body2">
            {movie.genres.slice(0, 2).join(", ")}
          </Typography>
        </Grid>
        <Grid container item justifyContent="center">
          <Rating name="read-only" value={8.6} readOnly />
        </Grid>
        <Grid container item justifyContent="space-around">
          <Grid>
            <Typography>{movie.year}</Typography>
          </Grid>
          <Grid>
            <Typography>{movie.status}</Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default MovieItem;
