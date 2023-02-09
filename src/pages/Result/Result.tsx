import React from "react";
import { Grid } from "@mui/material";
import { useSearchParams } from "react-router-dom";

import {
  useFilteringVacanciesQuery,
  useSearchingCandidatesQuery,
} from "../../redux/features/vacancies.api";
import { useGetMeQuery } from "../../redux/features/auth.api";
import FilterBar from "../../components/FilterBar";
import SearchBar from "../../components/SearchBar";
import ShowCandidatesBar from "../../components/ShowCandidatesBar";
import ShowVacanciesBar from "../../components/ShowVacanciesBar";

const Result: React.FC = () => {
  const [searchParams] = useSearchParams();

  const { data: user } = useGetMeQuery();

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

  return (
    <Grid container spacing={6}>
      <Grid container item>
        <SearchBar />
      </Grid>
      <Grid container item justifyContent="center">
        {user && user.typeUser === "Employer" ? (
          <ShowCandidatesBar candidates={foundCandidates} />
        ) : (
          <Grid container item spacing={6}>
            <FilterBar />
            <ShowVacanciesBar vacancies={foundVacancies} />
          </Grid>
        )}
      </Grid>
    </Grid>
  );
};

export default Result;
