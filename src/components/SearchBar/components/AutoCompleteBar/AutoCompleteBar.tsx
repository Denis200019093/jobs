import React, { useState, useEffect } from "react";
import {
  Avatar,
  Grid,
  Typography,
  Autocomplete,
  TextField,
} from "@mui/material";
// Mine
import useDebounce from "../../../../hooks/useDebounce";
import { useAutocompleteVacanciesQuery } from "../../../../redux/features/vacancies.api";
import { NavLink } from "react-router-dom";

const AutoCompleteBar: React.FC<{ searchValue: string }> = (props) => {
  const debouncedValue = useDebounce(props.searchValue, 250);
  const { data: autocompleteVacancies } =
    useAutocompleteVacanciesQuery(debouncedValue);

  return (
    <>
      <Autocomplete
        id="country-select-demo"
        sx={{ width: 300 }}
        options={autocompleteVacancies || []}
        autoHighlight
        getOptionLabel={(option) => option.jobTitle}
        renderOption={(props, option) => (
          <Grid key={option._id} container item>
            <NavLink to={`/job-details/${option._id}`}>
              <Grid container spacing={1} flexWrap="nowrap">
                <Grid item>
                  <Avatar
                    variant="rounded"
                    src={`http://localhost:4444/${option.avatarURL}`}
                  />
                </Grid>
                <Grid container item alignItems="start">
                  <Grid container item>
                    <Typography variant="body1">{option.jobTitle}</Typography>
                  </Grid>
                  {/* <Grid container item>
                    <Grid item>
                      <Typography variant="body2">
                        {`${option.jobTypes.join(", ")}, ${
                          option.jobCity
                        }, ${option.jobLocation.join(", ")}`}
                      </Typography>
                    </Grid>
                  </Grid> */}
                </Grid>
              </Grid>
            </NavLink>
          </Grid>
        )}
        renderInput={(params) => (
          <TextField
            {...params}
            // label="Choose a country"
            placeholder="Your keywords..."
            inputProps={{
              ...params.inputProps,
              autoComplete: "new-password", // disable autocomplete and autofill
            }}
          />
        )}
      />
      {/* {debouncedValue?.length && autocompleteVacancies?.length ? (
        <Grid
          container
          item
          sx={{
            position: "absolute",
            top: "100%",
            mt: 1,
            bgcolor: "#fff",
            p: 1,
            boxShadow: "0 0 5px lightgray",
            borderRadius: "8px",
          }}
        >
          {autocompleteVacancies?.length
            ? autocompleteVacancies?.map((item) => (
                <Grid key={item._id} container item>
                  <NavLink to={`/job-details/${item._id}`}>
                    <Grid container spacing={1} flexWrap="nowrap">
                      <Grid item>
                        <Avatar
                          variant="rounded"
                          src={`http://localhost:4444/${item.avatarURL}`}
                        />
                      </Grid>
                      <Grid container item alignItems="start">
                        <Grid container item>
                          <Typography variant="body1">
                            {item.jobTitle}
                          </Typography>
                        </Grid>
                        <Grid container item>
                          <Grid item>
                            <Typography variant="body2">
                              {`${item.jobTypes.join(", ")}, ${
                                item.jobCity
                              }, ${item.jobLocation.join(", ")}`}
                            </Typography>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                  </NavLink>
                </Grid>
              ))
            : null}
        </Grid>
      ) : null} */}
    </>
  );
};

export default AutoCompleteBar;
