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

const FilterBar: React.FC = () => {
  const {
    control,
    handleSubmit,
    reset,
    watch,
  } = useForm<FilterScheme>({
    mode: "onChange",
  });
  return (
    <Grid container spacing={4}>
      <Grid container item justifyContent="space-between" alignItems="center">
        <Typography variant="h6">Advance filter</Typography>
        <Typography variant="body2" onClick={() => reset()}>
          Reset
        </Typography>
        <CustomDivider />
      </Grid>
      <Grid container item>
        <form style={{ width: "100%" }}>
        {/* <form onSubmit={handleSubmit(submitFilter)} style={{ width: "100%" }}> */}
          <Grid container item spacing={4}>
            <Grid container item>
              <FormLabel component="legend">
                <Typography variant="h6">Tags</Typography>
              </FormLabel>
              <Controller
                name="tags"
                control={control}
                defaultValue={[]}
                // defaultValue={tags || []}
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
                    renderValue={(selected) =>
                      selected?.map((option) => option).join(", ") ||
                      "Select some tags"
                    }
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
                defaultValue={[]}
                // defaultValue={positions || []}
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
                    renderValue={(selected) =>
                      selected?.map((option) => option).join(", ") ||
                      "Select some options"
                    }
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
                defaultValue={[]}
                // defaultValue={placesToWork || []}
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
                    renderValue={(selected) =>
                      selected?.map((option) => option).join(", ") ||
                      "Select some options"
                    }
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
  );
};

export default FilterBar;
