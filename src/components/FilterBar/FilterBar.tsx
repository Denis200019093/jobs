import React, { useEffect } from "react";
import { Grid, Typography, FormLabel } from "@mui/material";
import { useSearchParams } from "react-router-dom";
import { Controller, useForm } from "react-hook-form";

import CustomDivider from "../atoms/CustomDivider";
import CustomSelect from "../atoms/CustomSelect";

interface FilterScheme {
  jobIndustries: string[];
  jobPositions: string[];
  jobLocations: string[];
  jobTypes: string[];
}

const jobIndustriesOptions = ["Web development", "Game development"];
const jobPositionOptions = ["Junior", "Middle", "Senior"];
const jobLocationOptions = ["On-site", "Remote", "Hybrid"];
const jobTypesOptions = ["Full time", "Part time", "Remote"];

const FilterBar = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const { control, reset, watch } = useForm<FilterScheme>({
    mode: "onChange",
  });
  
  const search_value = searchParams.get("search_query") || "";

  const watchIndustries = watch("jobIndustries");
  const watchPositions = watch("jobPositions");
  const watchLocations = watch("jobLocations");
  const watchTypes = watch("jobTypes");

  useEffect(() => {
    const params = {} as any;

    const filteredIndustries = watchIndustries
      ?.filter((item: string) => item !== "")
      .join("-and-");
    const filteredPositions = watchPositions
      ?.filter((item: string) => item !== "")
      .join("-and-");
    const filteredLocations = watchLocations
      ?.filter((item: string) => item !== "")
      .join("-and-");
    const filteredTypes = watchTypes
      ?.filter((item: string) => item !== "")
      .join("-and-");

    if (search_value) params.search_query = search_value;
    if (filteredIndustries?.length) params.industries = filteredIndustries;
    if (filteredPositions?.length) params.positions = filteredPositions;
    if (filteredLocations?.length) params.locations = filteredLocations;
    if (filteredTypes?.length) params.types = filteredTypes;

    setSearchParams(params);
  }, [
    watchPositions,
    watchLocations,
    watchIndustries,
    watchTypes,
    search_value,
    setSearchParams,
  ]);

  return (
    <Grid item xs={12} md={3}>
      <Grid container spacing={4}>
        <Grid container item justifyContent="space-between" alignItems="center">
          <Typography variant="h6">Advance filter</Typography>
          <Typography variant="body2" onClick={() => reset()}>
            Reset
          </Typography>
          <CustomDivider />
        </Grid>
        <Grid container item>
          <Grid container item spacing={4}>
            <Grid container item>
              <FormLabel component="legend">
                <Typography variant="h6">Industries</Typography>
              </FormLabel>
              <Controller
                render={({ field: { ...field } }) => (
                  <CustomSelect
                    options={jobIndustriesOptions}
                    multi
                    {...field}
                  />
                )}
                name={"jobIndustries"}
                defaultValue={[]}
                control={control}
              />
            </Grid>
            <Grid container item>
              <FormLabel component="legend">
                <Typography variant="h6">Position</Typography>
              </FormLabel>
              <Controller
                render={({ field: { ...field } }) => (
                  <CustomSelect options={jobPositionOptions} multi {...field} />
                )}
                name={"jobPositions"}
                defaultValue={[]}
                control={control}
              />
            </Grid>
            <Grid container item>
              <FormLabel component="legend">
                <Typography variant="h6">On-site/Remote</Typography>
              </FormLabel>
              <Controller
                render={({ field: { ...field } }) => (
                  <CustomSelect options={jobLocationOptions} multi {...field} />
                )}
                name={"jobLocations"}
                defaultValue={[]}
                control={control}
              />
            </Grid>
            <Grid container item>
              <FormLabel component="legend">
                <Typography variant="h6">Type job</Typography>
              </FormLabel>
              <Controller
                render={({ field: { ...field } }) => (
                  <CustomSelect options={jobTypesOptions} multi {...field} />
                )}
                name={"jobTypes"}
                defaultValue={[]}
                control={control}
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default FilterBar;
