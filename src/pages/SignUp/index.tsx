import React from 'react';
import { Grid, TextField, Button, Typography } from '@mui/material';
import { useForm } from 'react-hook-form';
import GoogleIcon from '@mui/icons-material/Google';

import { ISignUpData } from '../../models/Auth';
import { useAppDispatch } from '../../hooks/redux';
import { handleRegister } from '../../redux/reducers/authSlice';
import Input from '../../components/atoms/Input';

const SignUp: React.FC = () => {
  const dispatch = useAppDispatch();

  const {
    // register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<ISignUpData>({
    mode: 'onChange',
  });

  const onSubmit = async (values: ISignUpData) => {
    console.log(values);

    // dispatch(handleRegister(values));
  };

  return (
    <Grid container justifyContent="center">
      <Grid
        container
        item
        sx={{ pt: 7 }}
        xs={3.5}
        direction="column"
        alignItems="center"
        spacing={3}
      >
        <Grid container item direction="column" alignItems="center">
          <Grid item>
            <Typography sx={{ color: 'blue' }}>Register</Typography>
          </Grid>
          <Grid item>
            <Typography variant="h1">Start easier Today</Typography>
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
          <form style={{ width: '100%' }} onSubmit={handleSubmit(onSubmit)}>
            <Grid container direction="column" spacing={2}>
              <Grid item>
                <Typography>Full Name*</Typography>
                <Input
                  // // register={register}
                  suggestions={false}
                  placeholder="Elon Musk"
                  error={Boolean(errors.fullName?.message)}
                  helperText={errors.fullName?.message}
                />
              </Grid>
              <Grid item>
                <Typography>Username*</Typography>
                <Input
                  // // register={register}
                  suggestions={false}
                  placeholder="elonmusk"
                  error={Boolean(errors.username?.message)}
                  helperText={errors.username?.message}
                />
              </Grid>
              <Grid item>
                <Typography>Email address*</Typography>
                <Input
                  // // register={register}
                  suggestions={false}
                  placeholder="elonmusk"
                  type="email"
                  error={Boolean(errors.email?.message)}
                  helperText={errors.email?.message}
                />
              </Grid>
              <Grid item>
                <Typography>Password*</Typography>
                <Input
                  // // register={register}
                  suggestions={false}
                  placeholder="**********"
                  type="password"
                  error={Boolean(errors.password?.message)}
                  helperText={errors.password?.message}
                />
              </Grid>
              <Grid item>
                <Typography>Confirm Password*</Typography>
                <Input
                  // // register={register}
                  suggestions={false}
                  placeholder="**********"
                  type="password"
                  error={Boolean(errors.confirmPassword?.message)}
                  helperText={errors.confirmPassword?.message}
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
                  Sign up
                </Button>
              </Grid>
            </Grid>
          </form>
        </Grid>
        <Grid item>
          <Typography>Don't have an Account? Sign in</Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default SignUp;
