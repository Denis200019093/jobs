import React, { useCallback } from "react";
import { Grid, Typography, Button, InputBase, Slide } from "@mui/material";
import { useForm } from "react-hook-form";
import { useNavigate, useSearchParams } from "react-router-dom";

import SearchIcon from "@mui/icons-material/Search";

import { useAutocompleteVacanciesQuery } from "../../redux/features/vacancies.api";
import useDebounce from "../../hooks/useDebounce";
import { useGetUserQuery } from "../../redux/features/user.api";

const SearchBar: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const { data: user } = useGetUserQuery();

  const search_value = searchParams.get("search_query") || "";

  const { handleSubmit, register, watch } = useForm<{ search_value: string }>({
    mode: "onChange",
  });

  const navigate = useNavigate();

  const searchValue = watch("search_value");
  const debouncedValue = useDebounce(searchValue, 250);

  const { data: autocompleteVacancies } = useAutocompleteVacanciesQuery(
    debouncedValue,
    {
      skip: debouncedValue?.length < 1,
    }
  );

  const submitSearch = (values: any) =>
    navigate(`/result?search_query=${values.search_value}`);

  return (
    <Grid
      container
      item
      sx={{
        bgcolor: "#f8faff",
        p: "72px 16px 72px 16px",
        mt: 6,
        borderRadius: "10px",
        overflow: "hidden",
      }}
      justifyContent="center"
    >
      <Grid container justifyContent="center">
        <Grid item xs={10}>
          <form
            onSubmit={handleSubmit(submitSearch)}
            style={{
              position: "relative",
              width: "100%",
              borderRadius: "10px",
            }}
          >
            <Slide
              direction="up"
              timeout={500}
              in={true}
              mountOnEnter
              unmountOnExit
            >
              <Grid
                container
                item
                sx={{ position: "relative", p: 1 }}
                alignItems="center"
                spacing={1}
              >
                <Grid item xs={12}>
                  <InputBase
                    defaultValue={search_value}
                    fullWidth
                    placeholder="Your keywords..."
                    sx={{
                      input: {
                        bgcolor: "transparent",
                        boxShadow: "0 18px 40px rgb(25 15 9 / 10%)",
                        borderRadius: "8px",
                        p: "24px 150px 24px 16px",
                      },
                    }}
                    inputProps={{
                      autoComplete: "new-password", // disable autocomplete and autofill
                    }}
                    {...register("search_value")}
                  />
                </Grid>
                <Grid item sx={{ position: "absolute", right: "15px" }}>
                  <Button
                    startIcon={<SearchIcon />}
                    fullWidth
                    sx={{ borderRadius: "10px" }}
                    variant="contained"
                    type="submit"
                  >
                    {user?.typeUser === "Employer"
                      ? "Find candidates"
                      : "Find jobs"}
                  </Button>
                </Grid>
              </Grid>
            </Slide>
          </form>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default SearchBar;
