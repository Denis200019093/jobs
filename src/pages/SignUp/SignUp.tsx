import React from "react";
import {
  Grid,
  ToggleButtonGroup,
  ToggleButton,
  Button,
  Typography,
} from "@mui/material";
import { Controller, useForm } from "react-hook-form";

import GoogleIcon from "@mui/icons-material/Google";

import {
  isErrorWithMessage,
  isFetchBaseQueryError,
} from "../../helpers/errorHandle";
import { ISignUpData } from "../../models/Auth";
import { useAppDispatch } from "../../hooks/redux";
import { handleRegister } from "../../redux/reducers/authSlice";
import { openSnackbar } from "../../redux/reducers/snackbarSlice";
import { IUser } from "../../models/User";
import Input from "../../components/Reusable/CustomInput";
import {
  useGetMeQuery,
  useRegisterMutation,
} from "../../redux/features/auth.api";

const SignUp: React.FC = () => {
  const [typeUser, setTypeUser] = React.useState("Employee");

  const { refetch } = useGetMeQuery();
  const [register] = useRegisterMutation();

  const dispatch = useAppDispatch();

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<ISignUpData>({
    mode: "onChange",
  });

  const handleChange = (
    event: React.MouseEvent<HTMLElement>,
    newType: string
  ) => {
    if (newType !== null) {
      setTypeUser(newType);
    }
  };

  const onSubmit = async (values: ISignUpData) => {
    try {
      if (values.password !== values.confirmPassword) {
        return dispatch(
          openSnackbar({ text: "Passwords don't match", severity: "error" })
        );
      }

      const data = await register({ ...values, typeUser }).unwrap();

      if ("token" in data) {
        dispatch(
          openSnackbar({ text: "Sign in successful", severity: "success" })
        );
        window.localStorage.setItem("token", data.token);
        refetch();
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
        sx={{ pt: 7 }}
        sm={8}
        md={5}
        direction="column"
        alignItems="center"
        spacing={3}
      >
        <Grid container item direction="column" alignItems="center">
          <Grid item>
            <Typography sx={{ color: "blue" }}>Register</Typography>
          </Grid>
          <Grid item>
            <Typography variant="h1">Start easier Today</Typography>
          </Grid>
        </Grid>
        <Grid item>
          <ToggleButtonGroup
            color="primary"
            value={typeUser}
            exclusive
            onChange={handleChange}
            aria-label="Platform"
          >
            <ToggleButton value="Employee">Employee</ToggleButton>
            <ToggleButton value="Employer">Employer</ToggleButton>
          </ToggleButtonGroup>
        </Grid>
        <Grid container item>
          <form style={{ width: "100%" }} onSubmit={handleSubmit(onSubmit)}>
            <Grid container direction="column" spacing={2}>
              <Grid item>
                <Typography>Full Name*</Typography>
                <Controller
                  name="fullName"
                  control={control}
                  defaultValue={""}
                  render={({ field: { ref, ...field } }) => (
                    <Input
                      placeholder="Elon Musk"
                      error={Boolean(errors.fullName?.message)}
                      helperText={errors.username?.message}
                      {...field}
                    />
                  )}
                />
              </Grid>
              <Grid item>
                <Typography>Username*</Typography>
                <Controller
                  name="username"
                  control={control}
                  defaultValue={""}
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
              <Grid item>
                <Typography>Email address*</Typography>
                <Controller
                  name="email"
                  control={control}
                  defaultValue={""}
                  render={({ field: { ...field } }) => (
                    <Input
                      placeholder="elonmusk@gmail.com"
                      type="email"
                      error={Boolean(errors.email?.message)}
                      helperText={errors.email?.message}
                      {...field}
                    />
                  )}
                />
              </Grid>
              <Grid item>
                <Typography>Password*</Typography>
                <Controller
                  name="password"
                  control={control}
                  defaultValue={""}
                  render={({ field: { ...field } }) => (
                    <Input
                      placeholder="**********"
                      type="password"
                      error={Boolean(errors.password?.message)}
                      helperText={errors.password?.message}
                      {...field}
                    />
                  )}
                />
              </Grid>
              <Grid item>
                <Typography>Confirm Password*</Typography>
                <Controller
                  name="confirmPassword"
                  control={control}
                  defaultValue={""}
                  render={({ field: { ...field } }) => (
                    <Input
                      placeholder="**********"
                      type="password"
                      error={Boolean(errors.confirmPassword?.message)}
                      helperText={errors.confirmPassword?.message}
                      {...field}
                    />
                  )}
                />
              </Grid>

              <Grid item>
                <Button
                  size="large"
                  fullWidth
                  variant="contained"
                  type="submit"
                >
                  Sign up
                </Button>
              </Grid>
            </Grid>
          </form>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default SignUp;
