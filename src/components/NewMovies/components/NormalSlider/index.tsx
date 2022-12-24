import React, { useMemo } from "react";
import { Grid, Typography } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Controller } from "swiper";
import { data } from "../../../../data";
import Poster from "../../../UIComponents/Poster";
import { IMovie } from "../../../../models/Movie";

interface IProps {
  controlledSwiper: any;
  latestReleases: IMovie[]
}

const NormalSlider: React.FC<IProps> = (props) => {
  const thumbParams = useMemo(() => {
    return {
      modules: [Controller],
      slideToClickedSlide: true,
      slidesPerView: 4,
      centeredSlides: true,
      spaceBetween: 10,
      controller: { control: props.controlledSwiper },
      style: {
        width: "100%",
        height: "100%",
      },
    };
  }, [props.controlledSwiper]);

  return (
    <Swiper {...thumbParams} style={{ width: "100%" }}>
      {props.latestReleases.map((movie, index) => (
        <SwiperSlide key={movie._id}>
          {({ isActive }) => (
            <Grid>
              <Typography
                variant="h5"
                sx={{ color: isActive ? "#ffba28" : "" }}
              >
                {index + 1 < 10 ? "0" + (index + 1) : index + 1}
              </Typography>
              <Grid
                item
                sx={{
                  position: "relative",
                  p: "0 0 140% 0",
                  borderRadius: "5px",
                  mb: 1.5,
                  transition: "0.3s",
                  border: isActive
                    ? "3px solid #ffba28"
                    : "3px solid transparent",
                  transform: isActive ? "scale(1.02)" : "scale(1)",
                  // boxShadow: isActive ? '0 0 13px #662bb3' : 'none'
                }}
              >
                <Poster posterURL={movie.poster}/>
              </Grid>
            </Grid>
          )}
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default NormalSlider;
