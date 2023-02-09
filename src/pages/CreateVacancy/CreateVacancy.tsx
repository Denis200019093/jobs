import React, { useCallback, useMemo, useState } from "react";
import {
  Grid,
  Button,
  InputBase,
  FormLabel,
  Typography,
  Slider,
} from "@mui/material";
import SimpleEditor from "react-simplemde-editor";
import { Options } from "easymde";
import { Controller, useForm } from "react-hook-form";

import {
  isErrorWithMessage,
  isFetchBaseQueryError,
} from "../../helpers/errorHandle";
import {
  ExperienceJob,
  IndustriesJob,
  marksSalary,
  PositionsJob,
  TypesJob,
} from "../../helpers/arrays";
import { useCreateVacancyMutation } from "../../redux/features/vacancies.api";
import { IVacancy } from "../../models/Vacancy";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { useGetCompanyDetailsQuery } from "../../redux/features/company.api";
import { useGetMeQuery } from "../../redux/features/auth.api";
import { openSnackbar } from "../../redux/reducers/snackbarSlice";
import CustomSelect from "../../components/Reusable/CustomSelect";
import CustomDivider from "../../components/Reusable/CustomDivider";
import PreviewBar from "../../components/Reusable/PreviewBar";

import "easymde/dist/easymde.min.css";

const CreateVacancy: React.FC = () => {
  const [value, setValue] = useState("");

  const [createVacancy, { isLoading }] = useCreateVacancyMutation();
  const { data: user } = useGetMeQuery();
  const { data: companyDetails } = useGetCompanyDetailsQuery(user?._id);

  const dispatch = useAppDispatch();

  const { avatarURL, backgroundURL } = useAppSelector((state) => state.images);

  const handlerTextVacancy = useCallback((value: string) => {
    setValue(value);
  }, []);

  const { control, handleSubmit, register } = useForm<IVacancy>({
    mode: "onChange",
  });

  const options = useMemo(
    () =>
      ({
        spellChecker: false,
        maxHeight: "400px",
        autoFocus: true,
        placeholder: "Enter your text...",
        status: false,
      } as Options),
    []
  );

  const submitCreateVacancy = async (values: IVacancy) => {
    try {
      if (user) {
        const fields: IVacancy = {
          ...values,
          avatarURL,
          backgroundURL,
          jobDescription: value,
          jobAuthor: user._id,
          companyName: companyDetails?.companyName || "",
          companyLocation: companyDetails?.companyLocation || "",
        };

        await createVacancy(fields).unwrap();
      }
    } catch (err) {
      if (isFetchBaseQueryError(err)) {
        const errMsg = "error" in err ? err.error : JSON.stringify(err.data);
        dispatch(openSnackbar({ text: errMsg, severity: "error" }));
      } else if (isErrorWithMessage(err)) {
        dispatch(openSnackbar({ text: err.message, severity: "error" }));
      }
    }
  };

  return (
    <Grid container justifyContent="center">
      <Grid
        container
        item
        sx={{
          p: 3,
          mt: 4,
          mb: 4,
          borderRadius: "10px",
        }}
      >
        <Grid container spacing={4}>
          <Grid container item sx={{ position: "relative", pb: 3 }}>
            <PreviewBar allowEditing={true} />
          </Grid>
          <Grid container item>
            <InputBase
              sx={{
                flex: 1,
                width: "100%",
                fontSize: "35px",
                fontWeight: 700,
                paddingLeft: "20px",
                paddingTop: "7px",
                paddingBottom: "7px",
                boxShadow: "0px 2px 18px -15px rgba(0,0,0,0.46)",
              }}
              fullWidth
              placeholder="Front-end developer..."
              inputProps={{ "aria-label": "search" }}
              {...register("jobTitle")}
            />
          </Grid>
          <Grid container item>
            <form
              style={{ width: "100%" }}
              onSubmit={handleSubmit(submitCreateVacancy)}
            >
              <Grid container spacing={6}>
                <Grid container item spacing={2}>
                  <Grid container item>
                    <Typography variant="h5">Employment info</Typography>
                    <CustomDivider />
                  </Grid>
                  <Grid container item xs={12} md={3}>
                    <FormLabel component="legend">
                      <Typography variant="h6">Industry</Typography>
                    </FormLabel>
                    <Controller
                      render={({ field: { ...field } }) => (
                        <CustomSelect
                          options={IndustriesJob}
                          multi
                          {...field}
                        />
                      )}
                      name={"jobIndustries"}
                      defaultValue={[]}
                      control={control}
                    />
                  </Grid>
                  <Grid container item xs={12} md={3}>
                    <FormLabel component="legend">
                      <Typography variant="h6">Position</Typography>
                    </FormLabel>
                    <Controller
                      render={({ field: { ...field } }) => (
                        <CustomSelect options={PositionsJob} multi {...field} />
                      )}
                      name={"jobPositions"}
                      defaultValue={[]}
                      control={control}
                    />
                  </Grid>
                  <Grid container item xs={12} md={3}>
                    <FormLabel component="legend">
                      <Typography variant="h6">Type</Typography>
                    </FormLabel>
                    <Controller
                      render={({ field: { ref, ...field } }) => (
                        <CustomSelect options={TypesJob} multi {...field} />
                      )}
                      name={"jobTypes"}
                      defaultValue={[]}
                      control={control}
                    />
                  </Grid>
                  <Grid container item xs={12} md={3}>
                    <FormLabel component="legend">
                      <Typography variant="h6">Experience</Typography>
                    </FormLabel>
                    <Controller
                      render={({ field: { ref, ...field } }) => (
                        <CustomSelect options={ExperienceJob} {...field} />
                      )}
                      name={"jobExperience"}
                      defaultValue={""}
                      control={control}
                    />
                  </Grid>
                  <Grid container item xs={12} md={12}>
                    <FormLabel component="legend">
                      <Typography variant="h6">Salary range</Typography>
                    </FormLabel>
                    <Controller
                      name="jobSalary"
                      control={control}
                      defaultValue={[100, 10000]}
                      render={({ field: { value, onChange } }) => (
                        <Slider
                          getAriaLabel={() => "Minimum distance"}
                          valueLabelDisplay="auto"
                          value={value}
                          onChange={onChange}
                          step={50}
                          min={100}
                          max={10000}
                          marks={marksSalary}
                          disableSwap
                        />
                      )}
                    />
                  </Grid>
                  <Grid container item>
                    <SimpleEditor
                      style={{ width: "100%" }}
                      value={value}
                      onChange={handlerTextVacancy}
                      options={options}
                    />
                  </Grid>
                  <Grid container item>
                    <Button
                      disabled={isLoading}
                      type="submit"
                      variant="contained"
                    >
                      Post vacancy
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            </form>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default CreateVacancy;
