import React, { useCallback } from "react";
import { Grid, Button, Typography } from "@mui/material";

import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import RedditIcon from "@mui/icons-material/Reddit";
import InstagramIcon from "@mui/icons-material/Instagram";

import {
  useGetUserQuery,
  useSaveVacancyMutation,
} from "../../../../redux/features/user.api";
import {
  isErrorWithMessage,
  isFetchBaseQueryError,
} from "../../../../helpers/errorHandle";
import { openSnackbar } from "../../../../redux/reducers/snackbarSlice";
import { useAppDispatch } from "../../../../hooks/redux";
import { IVacancy } from "../../../../models/Vacancy";
import { openModal } from "../../../../redux/reducers/modalSlice";

const ApplyNowBlock: React.FC<{ vacancy: IVacancy | undefined }> = ({
  vacancy,
}) => {
  const [saveVacancy] = useSaveVacancyMutation();

  const dispatch = useAppDispatch();

  const { data: user } = useGetUserQuery();

  const handleSaveVacancy = useCallback(async () => {
    try {
      if (!user) {
        dispatch(
          openSnackbar({
            text: "To save the job you need auth",
            severity: "error",
          })
        );
      }

      if (!vacancy) {
        dispatch(
          openSnackbar({
            text: "You can't save job, try later",
            severity: "error",
          })
        );
      }

      const dataToSaveVacancy = {
        vacancyId: vacancy?._id || "",
        userId: user?._id || "",
      };

      await saveVacancy(dataToSaveVacancy);
    } catch (err) {
      if (isFetchBaseQueryError(err)) {
        const errMsg = "error" in err ? err.error : JSON.stringify(err.data);
        dispatch(openSnackbar({ text: errMsg, severity: "error" }));
      } else if (isErrorWithMessage(err)) {
        dispatch(openSnackbar({ text: err.message, severity: "error" }));
      }
    }
  }, [dispatch, saveVacancy, user, vacancy]);

  const handleShowModal = () => dispatch(openModal());

  return (
    <Grid container item sx={{ mt: 5 }} alignItems="center">
      <Grid container item xs={12} md={6} spacing={2}>
        <Grid item>
          <Button onClick={handleShowModal} size="large" variant="contained">
            Apply now
          </Button>
        </Grid>
        <Grid item>
          <Button
            disabled={user?.savedVacancies?.includes(vacancy?._id || "")}
            size="large"
            onClick={handleSaveVacancy}
          >
            Save job
          </Button>
        </Grid>
      </Grid>
      <Grid
        container
        item
        xs={12}
        md={6}
        justifyContent="end"
        alignItems="center"
        spacing={2}
      >
        <Grid item>
          <Typography variant="body2">Share this</Typography>
        </Grid>
        <Grid item>
          <FacebookIcon />
        </Grid>
        <Grid item>
          <TwitterIcon />
        </Grid>
        <Grid item>
          <RedditIcon />
        </Grid>
        <Grid item>
          <InstagramIcon />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ApplyNowBlock;
