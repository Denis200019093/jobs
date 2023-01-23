import React, { useCallback, useMemo } from "react";
import { Grid } from "@mui/material";
import { useSearchParams } from "react-router-dom";

import { useGetUserQuery } from "../../redux/features/user.api";
import {
  useFilteringVacanciesQuery,
  useSearchingCandidatesQuery,
} from "../../redux/features/vacancies.api";
import FilterBar from "../../components/FilterBar";
import SearchBar from "../../components/SearchBar";
import ShowingBar from "../../components/ShowingBar";

const Result: React.FC = () => {
  const [searchParams] = useSearchParams();

  const { data: user } = useGetUserQuery();

  const search_value = searchParams.get("search_query") || "";
  const industries = searchParams.get("industries")?.split("-and-");
  const positions = searchParams.get("positions")?.split("-and-");
  const locations = searchParams.get("locations")?.split("-and-");
  const types = searchParams.get("types")?.split("-and-");

  const { data: foundVacancies, isFetching } = useFilteringVacanciesQuery(
    { search_value, industries, locations, positions, types },
    {
      skip: user?.typeUser === "Employer",
      refetchOnMountOrArgChange: true,
    }
  );

  const { data: foundCandidates } = useSearchingCandidatesQuery(search_value, {
    skip: user?.typeUser === "Employee",
    refetchOnMountOrArgChange: true,
  });

  const selectNecessaryArray = useMemo(() => {
    if ( user?.typeUser === "Employer" ) {
      return foundCandidates
    } else {
      return foundVacancies
    }
  }, [foundCandidates, foundVacancies, user?.typeUser]);

  return (
    <Grid container spacing={6}>
      <Grid container item>
        <SearchBar />
      </Grid>
      <Grid container item spacing={6}>
        {user?.typeUser === "Employer" ? null : <FilterBar />}
        <ShowingBar
          result={selectNecessaryArray}
          isFetching={isFetching}
        />
      </Grid>
    </Grid>
  );
};

export default Result;
