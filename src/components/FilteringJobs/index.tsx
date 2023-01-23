import React from "react";
import { Grid } from "@mui/material";
import { useSearchParams } from "react-router-dom";

import { useFilteringVacanciesQuery } from "../../redux/features/vacancies.api";
import SearchBar from "../../components/SearchBar";
import FilterBar from "../../components/FilterBar";
import ShowingBar from "../../components/ShowingBar";

const FilteringJobs: React.FC = () => {
  const [searchParams] = useSearchParams();

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
      <Grid container item spacing={6}>
        <FilterBar />
        {/* <ShowingBar
          filteredVacancies={filteredVacancies || []}
          isFetching={isFetching}
        /> */}
      </Grid>
    </Grid>
  );
};

export default FilteringJobs;
