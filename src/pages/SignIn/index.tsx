import React from "react";
import { Grid, TextField, Button, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import GoogleIcon from "@mui/icons-material/Google";
import { ISignInData } from "../../models/Auth";
import { useAppDispatch } from "../../hooks/redux";
import { handleLogin } from "../../redux/reducers/authSlice";

const SignIn: React.FC = () => {
  const dispatch = useAppDispatch();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<ISignInData>({
    mode: "onChange",
  });

  const onSubmit = async (values: ISignInData) => {
    dispatch(handleLogin(values));
    // const { data } = await signIn(values) as { data: IUser }

    // if (!data) {
    //   return alert('Failed to sign in')
    // }

    // if ('token' in data) {
    //   window.localStorage.setItem('token', data.token)
    // }
  };

  return (
    <Grid container justifyContent="center">
      <Grid
        container
        item
        sx={{ pt: 7 }}
        xs={5.5}
        sm={4.5}
        md={3.5}
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
          <Grid item>
            <Typography variant="body2">
              Access to all features. No credit card required.
            </Typography>
          </Grid>
        </Grid>
        <Grid container item>
          <Button fullWidth variant="outlined">
            <Grid container justifyContent="center" alignItems="center">
              <GoogleIcon />
              <Typography>Sign in with Google</Typography>
            </Grid>
          </Button>
        </Grid>
        <Grid item>
          <Typography>Or continue with</Typography>
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
              <Grid container item justifyContent="end">
                <Typography>Forgot password</Typography>
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
        <Grid item>
          <Typography>Don't have an Account? Sign up</Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default SignIn;
