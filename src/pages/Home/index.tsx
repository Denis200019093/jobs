import { Grid } from "@mui/material";
import React from "react";
import { useSearchParams } from "react-router-dom";
import FilterBar from "../../components/FilterBar";

import SearchBar from "../../components/SearchBar";
import ShowingBar from "../../components/ShowingBar";
import { useGetUserQuery } from "../../redux/features/user.api";
import { useFilteringVacanciesQuery } from "../../redux/features/vacancies.api";

const Home: React.FC = () => {
  const [searchParams] = useSearchParams();

  const { data: user } = useGetUserQuery();

  const search_value = searchParams.get("search_query") || "";
  const industries = searchParams.get("industries")?.split("-and-");
  const positions = searchParams.get("positions")?.split("-and-");
  const locations = searchParams.get("locations")?.split("-and-");
  const types = searchParams.get("types")?.split("-and-");

  const { data: filteredVacancies, isFetching } = useFilteringVacanciesQuery(
    { search_value, industries, locations, positions, types },
    {
      refetchOnMountOrArgChange: true,
    }
  );

  return (
    <Grid container spacing={6}>
      <Grid container item>
        <SearchBar />
      </Grid>
    </Grid>
  );
};

export default Home;
