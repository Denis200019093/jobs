import React from "react";
import { Button, Grid, Typography, FormLabel, Slider } from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import { pdfjs } from "react-pdf";

import {
  ExperienceJob,
  IndustriesJob,
  marksSalary,
  PositionsJob,
  TypesJob,
  EnglishLevels,
} from "../../../helpers/arrays";
import { IUserProfile } from "../../../models/User";
import { useAppDispatch, useAppSelector } from "../../../hooks/redux";
import { useUpdateUserInfoMutation } from "../../../redux/features/user.api";
import {
  isErrorWithMessage,
  isFetchBaseQueryError,
} from "../../../helpers/errorHandle";
import { openSnackbar } from "../../../redux/reducers/snackbarSlice";
import { handleGetMe } from "../../../redux/reducers/authSlice";
import CustomSelect from "../../../components/atoms/CustomSelect";
import CustomDivider from "../../../components/atoms/CustomDivider";
import Input from "../../../components/atoms/CustomInput";
import ShowUploadPdf from "../ShowUploadPdf";

import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const UserProfile: React.FC = () => {
  const dispatch = useAppDispatch();
  const { user } = useAppSelector((state) => state.auth);
  const { backgroundURL, avatarURL, pdf } = useAppSelector(
    (state) => state.images
  );

  const [updateUserInfo, { isLoading }] = useUpdateUserInfoMutation();

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<IUserProfile>({
    mode: "onChange",
    defaultValues: {
      fullName: user?.fullName || "",
      username: user?.username || "",
      profession: user?.profession || "",
      contactNumber: user?.contactNumber || "",
      yourWebsite: user?.yourWebsite || "",
      country: user?.country || "",
      city: user?.city || "",
      telegram: user?.telegram || "",
      jobSalary: user?.jobSalary || [100, 10000],
      jobIndustries: user?.jobIndustries || [],
      jobPositions: user?.jobPositions || [],
      englishLevel: user?.englishLevel || "",
      jobExperience: user?.jobExperience || "",
      jobTypes: user?.jobTypes || [],
    },
  });

  const onSubmit = async (values: IUserProfile) => {
    try {
      if (user) {
        const fields = {
          userId: user._id,
          updatedInfo: {
            avatarURL: avatarURL || user?.avatarURL,
            backgroundURL: backgroundURL || user?.backgroundURL,
            pdfFile: pdf || user?.pdfFile,
            ...values,
          },
        };

        await updateUserInfo(fields).unwrap();

        dispatch(handleGetMe());
        dispatch(
          openSnackbar({ text: "Update was successful", severity: "success" })
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
    <Grid container item xs={12} spacing={6}>
      <Grid container item>
        <Typography variant="h4">Profile</Typography>
        <CustomDivider />
        <Typography variant="body2">
          To save CV(pdf), avatar and background you need to press the button
          'Save all changes'
        </Typography>
      </Grid>
      <ShowUploadPdf />
      <Grid container item xs={12} spacing={3}>
        <Grid item xs={12}>
          <form style={{ width: "100%" }} onSubmit={handleSubmit(onSubmit)}>
            <Grid container item xs={12} spacing={2}>
              <Grid item xs={12} md={6}>
                <Typography variant="body2">Full Name</Typography>
                <Controller
                  name="fullName"
                  control={control}
                  render={({ field: { ...field } }) => (
                    <Input
                      placeholder="Elon Musk"
                      error={Boolean(errors.fullName?.message)}
                      helperText={errors.fullName?.message}
                      {...field}
                    />
                  )}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <Typography variant="body2">Username</Typography>
                <Controller
                  name="username"
                  control={control}
                  render={({ field: { ...field } }) => (
                    <Input
                      placeholder="elonmusk"
                      error={Boolean(errors.username?.message)}
                      helperText={errors.username?.message}
                      {...field}
                    />
                  )}
                />
              </Grid>
              <Grid item xs={12}>
                <Typography variant="body2">Your profession</Typography>
                <Controller
                  name="profession"
                  control={control}
                  render={({ field: { ...field } }) => (
                    <Input
                      placeholder="UI/UX Designer. Front-end Developer"
                      error={Boolean(errors.profession?.message)}
                      helperText={errors.profession?.message}
                      {...field}
                    />
                  )}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <Typography variant="body2">Contact number</Typography>
                <Controller
                  name="contactNumber"
                  control={control}
                  render={({ field: { ...field } }) => (
                    <Input
                      placeholder="+1 (234) 56 789"
                      error={Boolean(errors.contactNumber?.message)}
                      helperText={errors.contactNumber?.message}
                      {...field}
                    />
                  )}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <Typography variant="body2">Your website</Typography>
                <Controller
                  name="yourWebsite"
                  control={control}
                  render={({ field: { ...field } }) => (
                    <Input
                      placeholder="https://elonmusk.com"
                      error={Boolean(errors.yourWebsite?.message)}
                      helperText={errors.yourWebsite?.message}
                      {...field}
                    />
                  )}
                />
              </Grid>
              <Grid container item spacing={2}>
                <Grid item xs={12} md={4}>
                  <Typography variant="body2">Country</Typography>
                  <Controller
                    name="country"
                    control={control}
                    render={({ field: { ...field } }) => (
                      <Input
                        placeholder="https://elonmusk.com"
                        error={Boolean(errors.country?.message)}
                        helperText={errors.country?.message}
                        {...field}
                      />
                    )}
                  />
                </Grid>
                <Grid item xs={12} md={4}>
                  <Typography variant="body2">City</Typography>
                  <Controller
                    name="city"
                    control={control}
                    render={({ field: { ...field } }) => (
                      <Input
                        placeholder="New York US"
                        error={Boolean(errors.city?.message)}
                        helperText={errors.city?.message}
                        {...field}
                      />
                    )}
                  />
                </Grid>
                <Grid item xs={12} md={4}>
                  <Typography variant="body2">Telegram</Typography>
                  <Controller
                    name="telegram"
                    control={control}
                    render={({ field: { ...field } }) => (
                      <Input
                        placeholder="elonmusk555"
                        error={Boolean(errors.telegram?.message)}
                        helperText={errors.telegram?.message}
                        {...field}
                      />
                    )}
                  />
                </Grid>
              </Grid>
            </Grid>
            <Grid container item xs={12} spacing={2}>
              <Grid container item justifyContent="center">
                <Grid container item xs={11.5}>
                  <FormLabel component="legend">
                    <Typography variant="h6">Salary range$</Typography>
                  </FormLabel>
                  <Controller
                    name="jobSalary"
                    control={control}
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
              </Grid>
              <Grid container item spacing={2}>
                <Grid container item xs={12} md={6}>
                  <FormLabel component="legend">
                    <Typography variant="h6">English level</Typography>
                  </FormLabel>
                  <Controller
                    name={"englishLevel"}
                    control={control}
                    render={({ field: { ...field } }) => (
                      <CustomSelect options={EnglishLevels} {...field} />
                    )}
                  />
                </Grid>
                <Grid container item xs={12} md={6}>
                  <FormLabel component="legend">
                    <Typography variant="h6">Industry</Typography>
                  </FormLabel>
                  <Controller
                    name={"jobIndustries"}
                    control={control}
                    render={({ field: { ...field } }) => (
                      <CustomSelect options={IndustriesJob} multi {...field} />
                    )}
                  />
                </Grid>
                <Grid container item xs={4}>
                  <FormLabel component="legend">
                    <Typography variant="h6">Position</Typography>
                  </FormLabel>
                  <Controller
                    name={"jobPositions"}
                    control={control}
                    render={({ field: { ...field } }) => (
                      <CustomSelect options={PositionsJob} multi {...field} />
                    )}
                  />
                </Grid>
                <Grid container item xs={4}>
                  <FormLabel component="legend">
                    <Typography variant="h6">Type</Typography>
                  </FormLabel>
                  <Controller
                    name={"jobTypes"}
                    control={control}
                    render={({ field: { ref, ...field } }) => (
                      <CustomSelect options={TypesJob} multi {...field} />
                    )}
                  />
                </Grid>
                <Grid container item xs={4}>
                  <FormLabel component="legend">
                    <Typography variant="h6">Experience</Typography>
                  </FormLabel>
                  <Controller
                    name={"jobExperience"}
                    control={control}
                    render={({ field: { ...field } }) => (
                      <CustomSelect options={ExperienceJob} {...field} />
                    )}
                  />
                </Grid>
              </Grid>
            </Grid>
            <Grid container item sx={{ mt: 4 }} justifyContent="center">
              <Button
                sx={{ maxWidth: "200px" }}
                disabled={isLoading}
                size="medium"
                fullWidth
                variant="contained"
                type="submit"
              >
                Save all changes
              </Button>
            </Grid>
          </form>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default UserProfile;
