import React from "react";
import { Grid, Button } from "@mui/material";
import MySelect from "../UIComponents/MySelect";
import { Controller, useForm } from "react-hook-form";
import { SortValues } from "../../models/Filter";
import RangeSlider from "../UIComponents/RangeSlider";
import FormatAlignLeftIcon from "@mui/icons-material/FormatAlignLeft";
import FormatAlignCenterIcon from "@mui/icons-material/FormatAlignCenter";
import FormatAlignRightIcon from "@mui/icons-material/FormatAlignRight";
import FormatAlignJustifyIcon from "@mui/icons-material/FormatAlignJustify";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
export const sortBy = [
  { value: "Action", label: "Action" },
  { value: "Horror", label: "Horror" },
  { value: "Romance", label: "Romance" },
  { value: "Fantasy", label: "Fantasy" },
  { value: "Crime", label: "Crime" },
  { value: "Comedy", label: "Comedy" },
];

export const itemPerPage = [
  { value: "10", label: "10" },
  { value: "15", label: "15" },
  { value: "25", label: "25" },
];

const SortBar = () => {
  const [alignment, setAlignment] = React.useState<string | null>("left");

  const handleAlignment = (
    event: React.MouseEvent<HTMLElement>,
    newAlignment: string | null
  ) => {
    setAlignment(newAlignment);
  };

  const {
    handleSubmit,
    control,
    reset,
    formState: { isSubmitting },
  } = useForm<SortValues>({
    mode: "onChange",
  });

  return (
    <Grid item>
      <form>
        <Grid container justifyContent="center">
          <Grid container item spacing={2} alignItems='center'>
            <Grid item xs={6} md={6}>
              <ToggleButtonGroup
                value={alignment}
                exclusive
                onChange={handleAlignment}
                aria-label="text alignment"
              >
                <ToggleButton value="left" aria-label="left aligned">
                  <FormatAlignLeftIcon />
                </ToggleButton>
                <ToggleButton value="center" aria-label="centered">
                  <FormatAlignCenterIcon />
                </ToggleButton>
                <ToggleButton value="right" aria-label="right aligned">
                  <FormatAlignRightIcon />
                </ToggleButton>
              </ToggleButtonGroup>
            </Grid>
            <Grid item xs={6} md={4}>
              <Controller
                control={control}
                name="sortBy"
                render={({ field: { onChange, value } }) => (
                  <Grid>
                    <MySelect
                      onChange={onChange}
                      value={value}
                      placeholder={"Sort By"}
                      defaultValue={""}
                      options={sortBy}
                      isMulti={false}
                    />
                  </Grid>
                )}
              />
            </Grid>
            <Grid item xs={6} md={2}>
              <Controller
                control={control}
                name="itemsPerPage"
                render={({ field: { onChange, value } }) => (
                  <Grid>
                    <MySelect
                      onChange={onChange}
                      value={value}
                      placeholder={"On page"}
                      defaultValue={""}
                      options={itemPerPage}
                      isMulti={false}
                    />
                  </Grid>
                )}
              />
            </Grid>
          </Grid>
        </Grid>
      </form>
    </Grid>
  );
};

export default SortBar;
