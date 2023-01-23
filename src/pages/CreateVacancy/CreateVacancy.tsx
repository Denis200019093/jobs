import React, { useCallback, useMemo, useState, ChangeEvent } from "react";
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
// Mine
import Input from "../../components/atoms/CustomInput";
import CustomSelect from "../../components/atoms/CustomSelect";
import { useUploadFileMutation } from "../../redux/features/fileUpload.api";
import CustomAvatar from "../../components/atoms/CustomAvatar";
import Background from "../../components/atoms/Background";
import { useCreateVacancyMutation } from "../../redux/features/vacancies.api";
import { IEmploymentInfo, IVacancy } from "../../models/Vacancy";
import {
  IndustriesJob,
  PositionsJob,
  LocationsJob,
  TypesJob,
  ExperienceJob,
  CitiesJob,
  marksSalary,
} from "./options";
// Style
import "easymde/dist/easymde.min.css";
import {
  isErrorWithMessage,
  isFetchBaseQueryError,
} from "../../helpers/errorHandle";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { openSnackbar } from "../../redux/reducers/snackbarSlice";
import CustomDivider from "../../components/atoms/CustomDivider";

const CreateVacancy: React.FC = () => {
  const [value, setValue] = useState("");

  const [createVacancy, { isLoading }] = useCreateVacancyMutation();

  const dispatch = useAppDispatch();

  const { avatarURL, backgroundURL } = useAppSelector((state) => state.images);
  const { user } = useAppSelector((state) => state.auth);

  const handlerTextVacancy = useCallback((value: string) => {
    setValue(value);
  }, []);

  const {
    control,
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<IVacancy>({
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
        // uniqueId: 1,
        // autosave: {
        //   enabled: true,
        //   delay: 1000,
        // },
      } as Options),
    []
  );

  // const onSubmit = async (values: ISignInData) => {
  //   try {
  //     const data = await login(values).unwrap();
  //     console.log(data);

  //     if (data && "token" in data) {
  //       dispatch(
  //         openSnackbar({ text: "Sign in successful", severity: "success" })
  //       );
  //       window.localStorage.setItem("token", data.token);
  //     }
  //   } catch (err) {
  //     if (isFetchBaseQueryError(err)) {
  //       const errMsg = "error" in err ? err.error : JSON.stringify(err.data);
  //       dispatch(openSnackbar({ text: errMsg, severity: "error" }));
  //     } else if (isErrorWithMessage(err)) {
  //       dispatch(openSnackbar({ text: err.message, severity: "error" }));
  //     }
  //   }
  // };

  const submitCreateVacancy = async (values: IVacancy) => {
    try {
      if (user) {
        const fields = {
          ...values,
          avatarURL,
          backgroundURL,
          jobDescription: value,
          jobAuthor: user._id,
        };

        await createVacancy(fields).unwrap();
      } else {
        dispatch(
          openSnackbar({ text: "You can`t create vacancy", severity: "error" })
        );
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
            <CustomAvatar position="absolute" allowEditing={true} />
            <Background allowEditing={true} />
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
            <Controller
              name="jobTags"
              control={control}
              render={({ field: { ref, ...field } }) => (
                <Input
                  placeholder="Tags (react, js, javascript)"
                  error={Boolean(errors.jobTags?.message)}
                  variant="standard"
                  {...field}
                />
              )}
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
                  {/* <Grid container item xs={12} md={4}>
                    <FormLabel component="legend">
                      <Typography variant="h6">Location</Typography>
                    </FormLabel>
                    <Controller
                      render={({ field }) => (
                        <CustomSelect options={LocationsJob} multi {...field} />
                      )}
                      name={"jobLocation"}
                      defaultValue={[]}
                      control={control}
                    />
                  </Grid> */}
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
                  {/* <Grid container item xs={12} md={4}>
                    <FormLabel component="legend">
                      <Typography variant="h6">City</Typography>
                    </FormLabel>
                    <Controller
                      render={({ field: { ref, ...field } }) => (
                        <CustomSelect options={CitiesJob} {...field} />
                      )}
                      name={"jobCity"}
                      defaultValue={""}
                      control={control}
                    />
                  </Grid> */}
                  <Grid container item xs={12} md={12}>
                    <FormLabel component="legend">
                      <Typography variant="h6">Salary range</Typography>
                    </FormLabel>
                    <Controller
                      name="jobSalary"
                      control={control}
                      defaultValue={[500, 2500]}
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
                    <Typography variant="h5">
                      About us/Requirements etc...
                    </Typography>
                    <CustomDivider />
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
                      Submit creating
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
