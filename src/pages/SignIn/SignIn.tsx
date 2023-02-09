import React, { useCallback } from "react";
import { Grid, TextField, Button, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
// Icons
import GoogleIcon from "@mui/icons-material/Google";
//Mine
import { ISignInData } from "../../models/Auth";
import { useAppDispatch } from "../../hooks/redux";
import { openSnackbar } from "../../redux/reducers/snackbarSlice";
import {
  isErrorWithMessage,
  isFetchBaseQueryError,
} from "../../helpers/errorHandle";
import { useGetMeQuery, useLoginMutation } from "../../redux/features/auth.api";

const SignIn: React.FC = () => {
  const { refetch } = useGetMeQuery();
  const [login] = useLoginMutation();

  const dispatch = useAppDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ISignInData>({
    mode: "onChange",
  });

  const onSubmit = useCallback(
    async (values: ISignInData) => {
      try {
        const data = await login(values).unwrap();

        if (data && "token" in data) {
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
    },
    [dispatch, login, refetch]
  );

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
            <Typography sx={{ color: "blue" }}>Welcome back!</Typography>
          </Grid>
          <Grid item>
            <Typography variant="h1">Member Login</Typography>
          </Grid>
        </Grid>
        <Grid container item>
          <form style={{ width: "100%" }} onSubmit={handleSubmit(onSubmit)}>
            <Grid container direction="column" spacing={2}>
              <Grid item>
                <Typography>Email address*</Typography>
                <TextField
                  {...register("email", {
                    required: "Incorrect email address",
                  })}
                  type="email"
                  error={Boolean(errors.email?.message)}
                  helperText={errors.email?.message}
                  fullWidth
                />
              </Grid>
              <Grid item>
                <Typography>Password*</Typography>
                <TextField
                  {...register("password", { required: "Incorrect password" })}
                  type="password"
                  error={Boolean(errors.password?.message)}
                  helperText={errors.password?.message}
                  fullWidth
                />
              </Grid>
              <Grid item>
                <Button
                  size="large"
                  fullWidth
                  variant="contained"
                  type="submit"
                >
                  Sign in
                </Button>
              </Grid>
            </Grid>
          </form>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default SignIn;
