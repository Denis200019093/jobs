import React, { useCallback } from "react";
import { Button, Grid, Typography } from "@mui/material";
import { Controller, useForm } from "react-hook-form";

import {
  useGetCompanyDetailsQuery,
  useUpdateCompanyInfoMutation,
} from "../../../redux/features/company.api";
import { useUpdateUserInfoMutation } from "../../../redux/features/user.api";
import { EmployerProfile } from "../../../models/Company";
import { useAppSelector } from "../../../hooks/redux";
import { useGetMeQuery } from "../../../redux/features/auth.api";
import CustomDivider from "../../../components/Reusable/CustomDivider";
import Input from "../../../components/Reusable/CustomInput";

const CompanyProfile: React.FC = () => {
  const [updateUserInfo, { isLoading }] = useUpdateUserInfoMutation();
  const [updateCompanyInfo] = useUpdateCompanyInfoMutation();

  const { data: user } = useGetMeQuery();
  const { data: companyDetails } = useGetCompanyDetailsQuery(user?._id);

  const { backgroundURL, avatarURL } = useAppSelector((state) => state.images);

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<EmployerProfile>({
    mode: "onBlur",
  });

  const submitProfileEmployer = useCallback(
    async ({
      fullName,
      email,
      contactNumber,
      ...otherFields
    }: EmployerProfile) => {
      try {
        if (user) {
          console.log(otherFields);
          const companyFields = {
            companyId: companyDetails?._id,
            updatedInfo: {
              companyLogo: avatarURL || companyDetails?.companyLogo,
              companyBackground:
                backgroundURL || companyDetails?.companyBackground,
              ...otherFields,
            },
          };

          const employerFields = {
            userId: user?._id,
            updatedInfo: {
              fullName,
              email,
              contactNumber,
            },
          };

          await updateCompanyInfo(companyFields);
          await updateUserInfo(employerFields);
        }
      } catch (error) {}
    },
    [
      avatarURL,
      backgroundURL,
      companyDetails?._id,
      companyDetails?.companyBackground,
      companyDetails?.companyLogo,
      updateCompanyInfo,
      updateUserInfo,
      user,
    ]
  );

  return (
    <Grid container item spacing={3} justifyContent="center">
      <Grid item xs={12}>
        <form
          style={{ width: "100%" }}
          onSubmit={handleSubmit(submitProfileEmployer)}
        >
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <Grid container item>
                <Grid item xs>
                  <Typography variant="h4">Company info</Typography>
                </Grid>
                <CustomDivider />
              </Grid>
              <Grid item>
                <Typography variant="body2">Company name</Typography>
                <Controller
                  name="companyName"
                  control={control}
                  defaultValue={companyDetails?.companyName}
                  render={({ field: { ...field } }) => (
                    <Input
                      placeholder="SpaceX"
                      error={Boolean(errors.companyName?.message)}
                      helperText={errors.companyName?.message}
                      {...field}
                    />
                  )}
                />
              </Grid>
              <Grid item>
                <Typography variant="body2">Location</Typography>
                <Controller
                  name="companyLocation"
                  control={control}
                  defaultValue={companyDetails?.companyLocation}
                  render={({ field: { ...field } }) => (
                    <Input
                      placeholder="New York US"
                      error={Boolean(errors.companyLocation?.message)}
                      helperText={errors.companyName?.message}
                      {...field}
                    />
                  )}
                />
              </Grid>
              <Grid item>
                <Typography variant="body2">Member since</Typography>
                <Controller
                  name="memberSince"
                  control={control}
                  defaultValue={companyDetails?.memberSince}
                  render={({ field: { ...field } }) => (
                    <Input
                      placeholder="June 2015"
                      error={Boolean(errors.memberSince?.message)}
                      helperText={errors.memberSince?.message}
                      {...field}
                    />
                  )}
                />
              </Grid>
              <Grid item>
                <Typography variant="body2">Address</Typography>
                <Controller
                  name="companyAddress"
                  control={control}
                  defaultValue={companyDetails?.companyAddress}
                  render={({ field: { ...field } }) => (
                    <Input
                      placeholder="June 2015"
                      error={Boolean(errors.companyAddress?.message)}
                      helperText={errors.companyAddress?.message}
                      {...field}
                    />
                  )}
                />
              </Grid>
            </Grid>
            <Grid item xs={12} md={6}>
              <Grid container item>
                <Grid item xs>
                  <Typography variant="h4">You as a recruiter</Typography>
                </Grid>
                <CustomDivider />
              </Grid>
              <Grid item>
                <Typography variant="body2">Full name</Typography>
                <Controller
                  name="fullName"
                  control={control}
                  defaultValue={user?.fullName}
                  render={({ field: { ...field } }) => (
                    <Input
                      placeholder="Alina Alinovich"
                      error={Boolean(errors.fullName?.message)}
                      helperText={errors.fullName?.message}
                      {...field}
                    />
                  )}
                />
              </Grid>
              <Grid item>
                <Typography variant="body2">Contact number</Typography>
                <Controller
                  name="contactNumber"
                  control={control}
                  defaultValue={user?.contactNumber}
                  render={({ field: { ...field } }) => (
                    <Input
                      placeholder="Lviv, Dudaeva 22"
                      error={Boolean(errors.contactNumber?.message)}
                      helperText={errors.contactNumber?.message}
                      {...field}
                    />
                  )}
                />
              </Grid>
              <Grid item>
                <Typography variant="body2">Email</Typography>
                <Controller
                  name="email"
                  control={control}
                  defaultValue={user?.email}
                  render={({ field: { ...field } }) => (
                    <Input
                      placeholder="company@gmail.com"
                      disabled
                      error={Boolean(errors.email?.message)}
                      helperText={errors.email?.message}
                      {...field}
                    />
                  )}
                />
              </Grid>
            </Grid>

            <Grid item>
              <Button
                disabled={isLoading}
                size="medium"
                fullWidth
                variant="contained"
                type="submit"
              >
                Save all changes
              </Button>
            </Grid>
          </Grid>
        </form>
      </Grid>
    </Grid>
  );
};

export default CompanyProfile;
