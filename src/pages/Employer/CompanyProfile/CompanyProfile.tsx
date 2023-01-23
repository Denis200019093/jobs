import React, { useCallback } from "react";
import { Button, Grid, Typography } from "@mui/material";
import { Controller, useForm } from "react-hook-form";
// Mine
import { ICompanyProfile } from "../../../models/User";
import { useAppSelector } from "../../../hooks/redux";
import { useUpdateUserInfoMutation } from "../../../redux/features/user.api";
import CustomDivider from "../../../components/atoms/CustomDivider";
import Input from "../../../components/atoms/CustomInput";
import PreviewBar from "../../../components/organisms/PreviewBar";
import { NavLink } from "react-router-dom";

const CompanyProfile: React.FC = () => {
  const [updateUserInfo, { isLoading }] = useUpdateUserInfoMutation();

  const { user } = useAppSelector((state) => state.auth);
  const { backgroundURL, avatarURL } = useAppSelector((state) => state.images);

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<ICompanyProfile>({
    mode: "onChange",
  });
  console.log(avatarURL);
  console.log(backgroundURL);

  const onSubmit = useCallback(
    async (values: ICompanyProfile) => {
      try {
        if (user) {
          const fields = {
            userId: user._id,
            updatedInfo: {
              companyLogo: avatarURL,
              companyBackground: backgroundURL,
              ...values,
            },
          };

          await updateUserInfo(fields);
        }
      } catch (error) {}
    },
    [avatarURL, backgroundURL, updateUserInfo, user]
  );

  return (
    <Grid container item spacing={3} justifyContent="center">
      <Grid container item sx={{ mb: 4 }} justifyContent="space-between">
        <Grid item xs>
          <Typography variant="h4">Profile of your company</Typography>
        </Grid>
        <CustomDivider />
      </Grid>
      <Grid item xs={12}>
        <form style={{ width: "100%" }} onSubmit={handleSubmit(onSubmit)}>
          <Grid container direction="column" spacing={2}>
            <Grid item>
              <Typography variant="body2">Company name</Typography>
              <Controller
                name="companyName"
                control={control}
                defaultValue={user ? user.company?.companyName : ""}
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
                defaultValue={user ? user.company?.companyLocation : ""}
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
                defaultValue={user ? user.company?.memberSince : ""}
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
                defaultValue={user ? user.company?.companyAddress : ""}
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
            <Grid item>
              <Typography variant="body2">Contact number</Typography>
              <Controller
                name="companyNumber"
                control={control}
                defaultValue={user ? user.company?.companyNumber : ""}
                render={({ field: { ...field } }) => (
                  <Input
                    placeholder="Lviv, Dudaeva 22"
                    error={Boolean(errors.companyNumber?.message)}
                    helperText={errors.companyNumber?.message}
                    {...field}
                  />
                )}
              />
            </Grid>
            <Grid item>
              <Typography variant="body2">Email</Typography>
              <Controller
                name="companyEmail"
                control={control}
                defaultValue={user ? user.company?.companyEmail : ""}
                render={({ field: { ...field } }) => (
                  <Input
                    placeholder="company@gmail.com"
                    error={Boolean(errors.companyEmail?.message)}
                    helperText={errors.companyEmail?.message}
                    {...field}
                  />
                )}
              />
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
