import React from "react";
import { Grid, Typography } from "@mui/material";
import Slider from "../Slider";
import { data } from "../../data";
import { IMovie } from "../../models/Movie";
import Poster from "../UIComponents/Poster";
import { SwiperSlide } from "swiper/react";
import Title from "../UIComponents/MultiLineText";

const Announcements: React.FC = () => {
  return (
    <Grid>
      <Slider>
        <Grid>
          {data.map((movie: IMovie, index) => (
            <SwiperSlide key={index}>
              <Grid
                item
                sx={{
                  width: '100%',
                  position: "relative",
                  
                  p: "0 0 150% 0",
                }}
              >
                <Poster posterURL={movie.poster} />
                <Grid
                  container
                  item
                  sx={{ position: "absolute", top: "12px", left: "12px" }}
                  direction="column"
                  spacing={2}
                >
                  <Grid item>
                    <Typography variant="status">{movie.status}</Typography>
                  </Grid>
                  <Grid item>
                    <Typography variant="quality">13 oct 2022</Typography>
                  </Grid>
                </Grid>
                <Grid
                  item
                  sx={{
                    position: "absolute",
                    bottom: 0,
                    left: "12px",
                    pb: '12px',
                    width: '100%',
                    background:
                      "linear-gradient(180deg, rgba(10,10,10,0.3) 0%, rgba(10,10,10,0.9) 65%)",
                  }}
                >
                  <Grid>
                    <Title
                      text={movie.title}
                      variant={"h6"}
                      quantityLines={2}
                    />
                  </Grid>
                  <Grid>
                    <Typography variant="body2">{movie.type}</Typography>
                  </Grid>
                </Grid>
              </Grid>
            </SwiperSlide>
          ))}
        </Grid>
      </Slider>
    </Grid>
  );
};

export default Announcements;
