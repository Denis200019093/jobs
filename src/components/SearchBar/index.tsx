import React, { useCallback, useState } from "react";
import {
  Grid,
  TextField,
  Typography,
  Button,
  InputBase,
  MenuItem,
} from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import { useNavigate, useSearchParams } from "react-router-dom";
// Icons
import LocationOnIcon from "@mui/icons-material/LocationOn";
import SearchIcon from "@mui/icons-material/Search";
// Mine
import { useSearchingVacanciesQuery } from "../../redux/features/vacancies.api";

const optionsCities = ["Lviv", "Kiev", "Kherson"];

const SearchBar: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const search_value = searchParams.get("search_query") || "";

  const { handleSubmit, register } = useForm<{
    search_value: string;
  }>({
    mode: "onChange",
  });

  const navigate = useNavigate();

  const submitSearch = useCallback(
    (values: { search_value: string }) => {
      navigate(`/filter?search_query=${values.search_value}`);
    },
    [navigate]
  );

  return (
    <Grid
      container
      item
      sx={{
        bgcolor: "#f8faff",
        p: "16px 16px 82px 16px",
        mt: 6,
        borderRadius: "10px",
      }}
      justifyContent="center"
    >
      <Grid container justifyContent="center" spacing={3}>
        <Grid container item xs={11.5} sm={10} md={6}>
          <Typography variant="h1" align="center">
            There Are 102,256 Postings Here For you!
          </Typography>
        </Grid>
        <Grid container item justifyContent="center">
          <Typography variant="h6">
            Find Jobs, Employment & Career Opportunities
          </Typography>
        </Grid>
        <Grid item xs={10}>
          <form
            onSubmit={handleSubmit(submitSearch)}
            style={{
              width: "100%",
              border: "1px solid lightgray",
              borderRadius: "10px",
              padding: "8px",
            }}
          >
            <Grid container item alignItems="center" spacing={1}>
              <Grid item xs={7.5}>
                <InputBase
                  {...register("search_value")}
                  defaultValue={search_value}
                  sx={{ pr: 3, pl: 2.5, flex: 1 }}
                  fullWidth
                  placeholder="Your keywords..."
                  inputProps={{ "aria-label": "search" }}
                />
              </Grid>
              {/* <Grid item xs={3} sx={{ position: "relative" }}>
                <LocationOnIcon
                  sx={{ position: "absolute", left: "-5px", top: "37%" }}
                />
                <Controller
                  name="location"
                  control={control}
                  defaultValue={""}
                  render={({
                    field: { onChange, value, ...field },
                    fieldState: { error },
                  }) => (
                    <TextField
                      fullWidth
                      select
                      onChange={onChange}
                      value={value}
                      size="small"
                      defaultValue=""
                      placeholder="Location"
                      label={<Typography variant="body2">Location</Typography>}
                      sx={{
                        " .MuiOutlinedInput-notchedOutline": {
                          border: "none",
                        },
                      }}
                    >
                      {optionsCities.map((item) => (
                        <MenuItem key={item} value={item}>
                          {item}
                        </MenuItem>
                      ))}
                    </TextField>
                  )}
                />
              </Grid> */}
              <Grid item xs={1.5}>
                <Button
                  startIcon={<SearchIcon />}
                  fullWidth
                  sx={{ borderRadius: "10px" }}
                  variant="contained"
                  type="submit"
                  // size="small"
                >
                  Search
                </Button>
              </Grid>
            </Grid>
          </form>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default SearchBar;
