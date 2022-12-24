import React from "react";
import {
  Button,
  Divider,
  Grid,
  Typography,
  List,
  ListItem,
  Avatar,
  styled,
  TextField,
} from "@mui/material";
import { useForm } from "react-hook-form";
// Icons
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import RedditIcon from "@mui/icons-material/Reddit";
import InstagramIcon from "@mui/icons-material/Instagram";
import LanguageIcon from "@mui/icons-material/Language";
import SchoolIcon from "@mui/icons-material/School";
import CloseTwoToneIcon from "@mui/icons-material/CloseTwoTone";
import ErrorTwoToneIcon from "@mui/icons-material/ErrorTwoTone";
import { NavLink } from "react-router-dom";
import { IUpdateUserData } from "../../models/User";
import Input from "../../components/atoms/Input";

const MyProfile: React.FC = () => {
  const {
    register,
    handleSubmit,
    control,
    watch,
    formState: { errors },
  } = useForm<IUpdateUserData>({
    mode: "onChange",
  });

  const onSubmit = async (values: IUpdateUserData) => {
    console.log(values);

    // dispatch(handleRegister(values));
  };

  return (
    <Grid container item xs={12} spacing={3}>
      {/* <Grid container item xs={12} md={3} spacing={2}></Grid> */}
      {/* <Grid container item xs={12} md={9} spacing={2}> */}
      {/* Content by links */}
      {/* Form for changes any options the candidate */}
      <Grid item xs={12} md={6}>
        <form style={{ width: "100%" }} onSubmit={handleSubmit(onSubmit)}>
          <Grid container direction="column" spacing={2}>
            <Grid item>
              {/* <Typography variant="body2">Full Name*</Typography> */}
              <Input
                // register={register}
                name="fullName"
                suggestions={false}
                placeholder="Elon Musk"
                error={Boolean(errors.fullName?.message)}
                helperText={errors.fullName?.message}
                {...register("fullName")}
              />
              {/* <TextField
                inputProps={{
                  autocomplete: "new-password",
                  form: {
                    autocomplete: "off",
                  },
                }}
                label={<Typography variant="body2">Full Name*</Typography>}
                placeholder="Elon Musk"
                // error={Boolean(errors.fullName?.message)}
                // helperText={errors.fullName?.message}
                fullWidth
                type="text"
                {...register("fullName", {
                  required: "Incorrect username",
                })}
              /> */}
            </Grid>
            <Grid item>
              <TextField
                // {...register("username", {
                //   required: "Incorrect username",
                // })}
                label={<Typography variant="body2">Username*</Typography>}
                placeholder="elonmusk"
                // error={Boolean(errors.username?.message)}
                // helperText={errors.username?.message}
                fullWidth
              />
            </Grid>
            <Grid item>
              <TextField
                // {...register("email", {
                //   required: "Incorrect email address",
                // })}
                type="email"
                label={<Typography variant="body2">Email address*</Typography>}
                placeholder="elonmusk@gmail.com"
                // error={Boolean(errors.email?.message)}
                // helperText={errors.email?.message}
                fullWidth
              />
            </Grid>
            <Grid item>
              <TextField
                // {...register("email", {
                //   required: "Incorrect email address",
                // })}
                type="number"
                label={<Typography variant="body2">Contact number</Typography>}
                placeholder="01-234 567 89"
                // error={Boolean(errors.email?.message)}
                // helperText={errors.email?.message}
                fullWidth
              />
            </Grid>
            <Grid item>
              <TextField
                // {...register("email", {
                //   required: "Incorrect email address",
                // })}
                label={<Typography variant="body2">Your website</Typography>}
                placeholder="https://tesla.com"
                // error={Boolean(errors.email?.message)}
                // helperText={errors.email?.message}
                fullWidth
              />
            </Grid>
            <Grid container item spacing={2}>
              <Grid item xs={12} md={6}>
                <TextField
                  // {...register("password", { required: "Incorrect password" })}
                  type="password"
                  placeholder="Japan"
                  label={<Typography variant="body2">Country</Typography>}
                  // error={Boolean(errors.password?.message)}
                  // helperText={errors.password?.message}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  // {...register("confirmPassword", { required: "Incorrect password" })}
                  type="password"
                  label={<Typography variant="body2">City</Typography>}
                  placeholder="Tokyo"
                  // error={Boolean(errors.confirmPassword?.message)}
                  // helperText={errors.confirmPassword?.message}
                  fullWidth
                />
              </Grid>
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                // {...register("password", { required: "Incorrect password" })}
                placeholder="elon777"
                label={<Typography variant="body2">Telegram</Typography>}
                // error={Boolean(errors.password?.message)}
                // helperText={errors.password?.message}
                fullWidth
              />
            </Grid>

            <Grid container item spacing={4}>
              <Grid container item sx={{ mt: 4 }}>
                <Divider sx={{ width: "100%" }} />
              </Grid>
              <Grid item>
                <Typography variant="body2" sx={{ color: "orange" }}>
                  Change your password
                </Typography>
              </Grid>
              <Grid container item spacing={2}>
                <Grid item xs={12} md={6}>
                  <TextField
                    // {...register("password", { required: "Incorrect password" })}
                    type="password"
                    placeholder="**********"
                    label={<Typography variant="body2">Password*</Typography>}
                    // error={Boolean(errors.password?.message)}
                    // helperText={errors.password?.message}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    // {...register("confirmPassword", { required: "Incorrect password" })}
                    type="password"
                    label={
                      <Typography variant="body2">Confirm Password*</Typography>
                    }
                    placeholder="**********"
                    // error={Boolean(errors.confirmPassword?.message)}
                    // helperText={errors.confirmPassword?.message}
                    fullWidth
                  />
                </Grid>
              </Grid>
            </Grid>
            <Grid item>
              <Button size="large" fullWidth variant="contained" type="submit">
                Save all changes
              </Button>
            </Grid>
          </Grid>
        </form>
      </Grid>
      {/* Field to select your skills */}
      <Grid item xs={12} md={6}>
        <Grid
          container
          item
          sx={{
            border: "1px solid lightgray",
            p: 3,
            borderRadius: "5px",
          }}
        >
          <Grid container spacing={3}>
            <Grid container item>
              <Typography variant="h5">Skills</Typography>
            </Grid>

            <Grid container item spacing={1}>
              <Grid container item>
                <TextField
                  // {...register("fullName", {
                  //   required: "Incorrect username",
                  // })}
                  placeholder="React, Angular, Vue....."
                  // error={Boolean(errors.fullName?.message)}
                  // helperText={errors.fullName?.message}
                  fullWidth
                />
              </Grid>
              <Grid container item spacing={1}>
                <Grid item>
                  <Skill container alignItems="center">
                    <Typography variant="body2">Figma</Typography>
                    <CloseTwoToneIcon />
                  </Skill>
                </Grid>
                <Grid item>
                  <Skill container alignItems="center">
                    <Typography variant="body2">JavaScript</Typography>
                    <CloseTwoToneIcon />
                  </Skill>
                </Grid>
                <Grid item>
                  <Skill container alignItems="center">
                    <Typography variant="body2">TypeScript</Typography>
                    <CloseTwoToneIcon />
                  </Skill>
                </Grid>
                <Grid item>
                  <Skill container alignItems="center">
                    <Typography variant="body2">Java</Typography>
                    <CloseTwoToneIcon />
                  </Skill>
                </Grid>
                <Grid item>
                  <Skill container alignItems="center">
                    <Typography variant="body2">SCSS</Typography>
                    <CloseTwoToneIcon />
                  </Skill>
                </Grid>
              </Grid>
            </Grid>
            <Grid container item>
              <ErrorTwoToneIcon />
              <Typography>You can add up to 20 skills</Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      {/* </Grid> */}
    </Grid>
  );
};

export default MyProfile;

const LinkInsideProfile = styled(NavLink)(() => ({
  width: "100%",
  border: "1px solid lightgray",
  // boxShadow: '1px 1px 5px #000',
  borderRadius: "10px",
  padding: "12px 20px",
}));

const Skill = styled(Grid)(() => ({
  backgroundColor: "rgba(25,25,25,0.1)",
  padding: "4px 8px",
  borderRadius: "5px",
}));
