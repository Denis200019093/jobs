import React, { useCallback, useEffect } from "react";
import {
  Grid,
  MenuItem,
  Typography,
  Checkbox,
  FormLabel,
  Button,
  Select,
  ListItemText,
  OutlinedInput,
} from "@mui/material";
import { useSearchParams } from "react-router-dom";
// Mine
import SearchBar from "../../components/SearchBar";
import CustomDivider from "../../components/UIComponents/CustomDivider";
import JobVacancy from "../../components/JobVacancy";
import { Controller, useForm } from "react-hook-form";
import {
  useFetchAllVacanciesQuery,
  useFilteringVacanciesQuery,
} from "../../redux/features/vacancies.api";

interface FilterScheme {
  tags: string[];
  positions: string[];
  placesToWork: string[];
}

const optionsTags = ["Front-end", "Back-end", "Full-stack", "DevOps"];
const optionsPositions = ["Junior", "Middle", "Senior"];
const optionsPlacesWork = ["On-site", "Remote", "Hybrid"];

const FilteringJobs: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const tags = searchParams.get("tags")?.split("-and-");
  const positions = searchParams.get("positions")?.split("-and-");
  const placesToWork = searchParams.get("placesToWork")?.split("-and-");
  const search_value = searchParams.get("search_query") || "";

  const { data: vacancies } = useFetchAllVacanciesQuery(5);
  const { data: filteredVacancies } = useFilteringVacanciesQuery(
    { search_value, tags, positions, placesToWork },
    {
      refetchOnMountOrArgChange: true,
    }
  );

  const {
    control,
    handleSubmit,
    reset,
    watch,
  } = useForm<FilterScheme>({
    mode: "onChange",
  });

  const watchTags = watch("tags");
  const watchPositions = watch("positions");
  const watchPlacesToWork = watch("placesToWork");

  useEffect(() => {
    const params = {} as any;
    console.log(watchTags);

    const filteredTags = watchTags.filter((item: string) => item !== "").join("-and-");
    const filteredPositions = watchPositions
      ?.filter((item: string) => item !== "")
      .join("-and-");
    const filteredPlacesToWork = watchPlacesToWork
      ?.filter((item: string) => item !== "")
      .join("-and-");

    if (filteredTags?.length) params.tags = filteredTags;
    if (filteredPositions?.length) params.positions = filteredPositions;
    if (filteredPlacesToWork?.length)
      params.placesToWork = filteredPlacesToWork;
    if (search_value) params.search_query = search_value;

    setSearchParams(params);
  }, [search_value, setSearchParams, watchPlacesToWork, watchPositions, watchTags]);

  const submitFilter = useCallback(
    (values: any) => {
      const { tags, positions, placesToWork } = values;

      const params = {} as any;

      if (tags.length) params.tags = tags.join("-and-");
      if (positions.length) params.positions = positions.join("-and-");
      if (placesToWork.length) params.placesToWork = placesToWork.join("-and-");

      setSearchParams(params);
    },
    [setSearchParams]
  );

  return (
    <Grid container spacing={6}>
      <Grid item>
        <SearchBar />
      </Grid>
      <Grid container item spacing={6}>
        <Grid item xs={12} md={3}>
          <Grid container spacing={4}>
            <Grid
              container
              item
              justifyContent="space-between"
              alignItems="center"
            >
              <Typography variant="h6">Advance filter</Typography>
              <Typography variant="body2" onClick={() => reset()}>
                Reset
              </Typography>
              <CustomDivider />
            </Grid>
            <Grid container item>
              <form
                onSubmit={handleSubmit(submitFilter)}
                style={{ width: "100%" }}
              >
                <Grid container item spacing={4}>
                  <Grid container item>
                    <FormLabel component="legend">
                      <Typography variant="h6">Tags</Typography>
                    </FormLabel>
                    <Controller
                      name="tags"
                      control={control}
                      defaultValue={tags || []}
                      render={({
                        field: { onChange, value, ...field },
                        fieldState: { error },
                      }) => (
                        <Select
                          labelId="tags"
                          // label="Tags"
                          value={value}
                          onChange={onChange}
                          MenuProps={{ disableScrollLock: true }}
                          // open={true}
                          multiple
                          fullWidth
                          defaultValue={[]}
                          // renderValue={(selected) =>
                          //   selected?.map((option) => option).join(", ") ||
                          //   "Select some tags"
                          // }
                          {...field}
                        >
                          {optionsTags.map((option) => (
                            // <MenuItem value={option.name} key={option.id}>
                            //   {option.name}
                            // </MenuItem>
                            <MenuItem value={option} key={option}>
                              <Checkbox checked={value.indexOf(option) >= 0} />
                              <ListItemText primary={option} />
                            </MenuItem>
                          ))}
                        </Select>
                      )}
                    />
                  </Grid>
                  <Grid container item>
                    <FormLabel component="legend">
                      <Typography variant="h6">Position</Typography>
                    </FormLabel>
                    <Controller
                      name="positions"
                      control={control}
                      defaultValue={positions || []}
                      render={({
                        field: { onChange, value, ...field },
                        fieldState: { error },
                      }) => (
                        <Select
                          labelId="positions"
                          // label="Tags"
                          value={value}
                          onChange={onChange}
                          // open={true}
                          multiple
                          fullWidth
                          defaultValue={[]}
                          sx={{}}
                          // renderValue={(selected) =>
                          //   selected?.map((option) => option).join(", ") ||
                          //   "Select some options"
                          // }
                          {...field}
                        >
                          {optionsPositions.map((option) => (
                            // <MenuItem value={option.name} key={option.id}>
                            //   {option.name}
                            // </MenuItem>
                            <MenuItem value={option} key={option}>
                              <Checkbox checked={value.indexOf(option) >= 0} />
                              <ListItemText primary={option} />
                            </MenuItem>
                          ))}
                        </Select>
                      )}
                    />
                  </Grid>

                  <Grid container item>
                    <FormLabel component="legend">
                      <Typography variant="h6">On-site/Remote</Typography>
                    </FormLabel>
                    <Controller
                      name="placesToWork"
                      control={control}
                      defaultValue={placesToWork || []}
                      render={({
                        field: { onChange, value, ...field },
                        fieldState: { error },
                      }) => (
                        <Select
                          labelId="placesToWork"
                          // label={<OutlinedInput sx={{  color: '#000'}} label="On-site/Remote" />}
                          value={value}
                          onChange={onChange}
                          placeholder="Red"
                          // open={true}
                          input={
                            <OutlinedInput
                              sx={{ color: "#000", span: { bgcolor: "red" } }}
                              label="On-site/Remote"
                            />
                          }
                          multiple
                          fullWidth
                          defaultValue={[]}
                          // renderValue={(selected) =>
                          //   selected?.map((option) => option).join(", ") ||
                          //   "Select some options"
                          // }
                          {...field}
                        >
                          {optionsPlacesWork.map((option) => (
                            // <MenuItem value={option.name} key={option.id}>
                            //   {option.name}
                            // </MenuItem>
                            <MenuItem value={option} key={option}>
                              <Checkbox checked={value.indexOf(option) >= 0} />
                              <ListItemText primary={option} />
                            </MenuItem>
                          ))}
                        </Select>
                      )}
                    />
                  </Grid>

                  <Grid container item>
                    <Button fullWidth variant="contained" type="submit">
                      Search
                    </Button>
                  </Grid>
                </Grid>
              </form>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} md={9}>
          <Grid container spacing={4}>
            <Grid
              container
              item
              justifyContent="space-between"
              alignItems="start"
            >
              {/* <Grid container item xs={6} alignItems="start"> */}
              <Typography variant="h6">Showing 41-60 of 900 jobs</Typography>
              {/* </Grid> */}
              <CustomDivider />
            </Grid>
            <Grid container item>
              {filteredVacancies?.length
                ? filteredVacancies?.map((item, index) => (
                    <JobVacancy key={index} item={item} />
                  ))
                : vacancies?.map((item, index) => (
                    <JobVacancy key={index} item={item} />
                  ))}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default FilteringJobs;