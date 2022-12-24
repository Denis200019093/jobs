import React, { useState } from "react";
import { Button, Grid, InputBase, styled, TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import SearchIcon from "@mui/icons-material/Search";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { handleSearchMovie } from "../../redux/reducers/movieSlice";

const SearchPanel: React.FC = () => {
  const dispatch = useAppDispatch();
  const { foundMovies } = useAppSelector((state) => state.movie);

  const [ isSearching, setSearching ] = useState<boolean>(false)
  
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<{ searchValue: string }>({
    mode: "onChange",
  });
  console.log(foundMovies);

  const onSubmitSearch = async (values: { searchValue: string }) => {
    console.log(values);

    dispatch(handleSearchMovie(values));
  };

  return (
    <Grid
      item
      sx={{
        position: "absolute",
        top: "15px",
        left: "calc(50% - 300px)",
        zIndex: 5,
        // input: {
        //   width: "600px",
        //   bgcolor: "rgba(255,255,255,0.2)",
        //   borderRadius: "30px",
        // },
      }}
    >
      <form
        style={{ position: "relative" }}
        onSubmit={handleSubmit(onSubmitSearch)}
      >
        <InputBase
          {...register("searchValue", { required: "Incorrect email address" })}
          fullWidth
          placeholder="Search..."
          sx={{
            input: {
              height: "55px",
              minWidth: "600px",
              bgcolor: "rgba(255,255,255,0.15)",
              borderRadius: "25px",
              color: "rgba(255,255,255,0.9)",
              p: "0 0 0 18px",
              boxShadow: '0 1px 2px #000',
              transition: '0.3s',
              '&:hover': {
                bgcolor: "rgba(255,255,255,0.25)",
              }
            },
            // border: 'none',
          }}
        />
        <Grid
          sx={{
            position: "absolute",
            top: '10%',
            right: '5px',
            bgcolor: "orange",
            p: '7px 10px',
            borderRadius: "50%",
          }}
        >
          <SearchIcon />
        </Grid>
      </form>
    </Grid>
  );
};

export default SearchPanel;
