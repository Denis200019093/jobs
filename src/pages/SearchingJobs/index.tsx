import { Grid } from "@mui/material";
import React, { useEffect } from "react";
import { useParams, useLocation, useSearchParams } from "react-router-dom";
import JobVacancy from "../../components/JobVacancy";
import SearchBar from "../../components/SearchBar";
import { useSearchingVacanciesQuery } from "../../redux/features/vacancies.api";

const SearchingJobs: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const search_value = searchParams.get("search_query") || "";
  
  const { data: foundVacancies } = useSearchingVacanciesQuery(search_value);

  useEffect(() => {
    const params = {} as any;

    if (search_value) {
      console.log("Da");
      params.search_query = search_value;
    }

    setSearchParams(params);
  }, [search_value, setSearchParams]);

  return (
    <Grid container>
      {/* <Grid>
        <SearchBar />
      </Grid>
      <Grid container justifyContent='center'>
        <Grid item xs={10}>
          {foundVacancies?.map((item) => (
            <JobVacancy key={item._id} item={item}/>
          ))}
        </Grid>
      </Grid> */}
    </Grid>
  );
};

export default SearchingJobs;
