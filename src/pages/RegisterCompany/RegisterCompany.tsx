import React, { useMemo, useState, useCallback } from "react";
import { Button, Grid } from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import { Options } from "easymde";
import SimpleEditor from "react-simplemde-editor";

import {
  isErrorWithMessage,
  isFetchBaseQueryError,
} from "../../helpers/errorHandle";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { ICompanyProfile } from "../../models/Company";
import { openSnackbar } from "../../redux/reducers/snackbarSlice";
import { useRegisterCompanyMutation } from "../../redux/features/company.api";
import CustomInput from "../../components/Reusable/CustomInput";
import PreviewBar from "../../components/Reusable/PreviewBar";

const RegisterCompany: React.FC = () => {
  const [aboutCompanyValue, setAboutValue] = useState<string>("");

  const dispatch = useAppDispatch();

  const { user } = useAppSelector((state) => state.auth);
  const { backgroundURL, avatarURL } = useAppSelector((state) => state.images);

  const [registerCompany] = useRegisterCompanyMutation();

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<ICompanyProfile>({
    mode: "onChange",
    defaultValues: {
      companyName: "",
      companyLocation: "",
      memberSince: "",
      companyAddress: "",
      companyNumber: "",
      companyEmail: "",
    },
  });

  const handlerTextAboutCompany = useCallback((value: string) => {
    setAboutValue(value);
  }, []);

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

  const submitRegisterCompany = async (values: ICompanyProfile) => {
    try {
      if (user?.typeUser === "Employer") {
        const dataCompany = {
          ...values,
          companyLogo: avatarURL,
          companyBackground: backgroundURL,
          owner: user._id,
        };

        await registerCompany(dataCompany).unwrap();
      } else {
        dispatch(
          openSnackbar({
            text: "You can`t register company",
            severity: "error",
          })
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
    <Grid>
      <PreviewBar allowEditing={true} />
      <Grid>
        <form onSubmit={handleSubmit(submitRegisterCompany)}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <Controller
                name="companyName"
                control={control}
                render={({ field: { ...field } }) => (
                  <CustomInput
                    placeholder="SpaceX"
                    error={Boolean(errors.companyName?.message)}
                    helperText={errors.companyName?.message}
                    {...field}
                  />
                )}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Controller
                name="companyLocation"
                control={control}
                render={({ field: { ...field } }) => (
                  <CustomInput
                    placeholder="USA"
                    error={Boolean(errors.companyLocation?.message)}
                    helperText={errors.companyLocation?.message}
                    {...field}
                  />
                )}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Controller
                name="memberSince"
                control={control}
                render={({ field: { ...field } }) => (
                  <CustomInput
                    placeholder="Sep 2000"
                    error={Boolean(errors.memberSince?.message)}
                    helperText={errors.memberSince?.message}
                    {...field}
                  />
                )}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Controller
                name="companyAddress"
                control={control}
                render={({ field: { ...field } }) => (
                  <CustomInput
                    placeholder="Washington. Street Dudaeva 25"
                    error={Boolean(errors.companyAddress?.message)}
                    helperText={errors.companyAddress?.message}
                    {...field}
                  />
                )}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Controller
                name="companyNumber"
                control={control}
                render={({ field: { ...field } }) => (
                  <CustomInput
                    placeholder="+3 809 32 993 23"
                    error={Boolean(errors.companyNumber?.message)}
                    helperText={errors.companyNumber?.message}
                    {...field}
                  />
                )}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Controller
                name="companyEmail"
                control={control}
                render={({ field: { ...field } }) => (
                  <CustomInput
                    placeholder="SpaceX@gmail.com"
                    error={Boolean(errors.companyEmail?.message)}
                    helperText={errors.companyEmail?.message}
                    {...field}
                  />
                )}
              />
            </Grid>
            <Grid item xs={12}>
              <SimpleEditor
                style={{ width: "100%" }}
                value={aboutCompanyValue}
                onChange={handlerTextAboutCompany}
                options={options}
              />
            </Grid>
            <Grid container item xs={12} justifyContent="center">
              <Button type="submit" variant="contained">
                Register company
              </Button>
            </Grid>
          </Grid>
        </form>
      </Grid>
    </Grid>
  );
};

export default RegisterCompany;
