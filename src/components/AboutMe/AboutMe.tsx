import React, { useCallback, useState, useMemo } from "react";
import { Grid, Button, Typography } from "@mui/material";
import { Options } from "easymde";
import SimpleEditor from "react-simplemde-editor";
import ReactMarkdown from "react-markdown";

import {
  useGetCompanyDetailsQuery,
  useUpdateCompanyInfoMutation,
} from "../../redux/features/company.api";
import {
  isErrorWithMessage,
  isFetchBaseQueryError,
} from "../../helpers/errorHandle";
import { useUpdateUserInfoMutation } from "../../redux/features/user.api";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { openSnackbar } from "../../redux/reducers/snackbarSlice";
import CustomDivider from "../Reusable/CustomDivider";
import { useGetMeQuery } from "../../redux/features/auth.api";

const AboutMe: React.FC = () => {
  const [aboutMeValue, setAboutValue] = useState<string>("");
  const [isUpdating, setUpdating] = useState<boolean>(false);

  const dispatch = useAppDispatch();

  const { data: user } = useGetMeQuery();
  const { data: companyDetails } = useGetCompanyDetailsQuery(user?._id);
  // const { user } = useAppSelector((state) => state.auth);
  const [updateUserInfo, { isLoading }] = useUpdateUserInfoMutation();
  const [updateCompanyInfo] = useUpdateCompanyInfoMutation();

  const handlerTextVacancy = useCallback((value: string) => {
    setAboutValue(value);
  }, []);

  const startUpdating = useCallback(() => {
    setUpdating(true);

    if (user?.description || companyDetails?.description) {
      setAboutValue(user?.description || companyDetails?.description || "");
    } else {
      setAboutValue("");
    }
  }, [companyDetails?.description, user?.description]);

  const saveDescription = useCallback(async () => {
    try {
      setAboutValue(aboutMeValue);

      if (user) {
        const companyfields = {
          companyId: companyDetails?._id,
          updatedInfo: { description: aboutMeValue },
        };

        const userFields = {
          userId: user._id,
          updatedInfo: { description: aboutMeValue },
        };

        if (user.typeUser === "Employer") {
          await updateCompanyInfo(companyfields);
        } else {
          await updateUserInfo(userFields);
        }

        dispatch(
          openSnackbar({
            text: "Update description was successful",
            severity: "success",
          })
        );
      }
      setUpdating(false);
    } catch (err) {
      if (isFetchBaseQueryError(err)) {
        const errMsg = "error" in err ? err.error : JSON.stringify(err.data);
        dispatch(openSnackbar({ text: errMsg, severity: "error" }));
      } else if (isErrorWithMessage(err)) {
        dispatch(openSnackbar({ text: err.message, severity: "error" }));
      }
    }
  }, [
    aboutMeValue,
    companyDetails?._id,
    dispatch,
    updateCompanyInfo,
    updateUserInfo,
    user,
  ]);

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

  return (
    <Grid container item sx={{ position: "relative", mb: 100 }} spacing={6}>
      <Grid container item>
        <Typography variant="h4">About me</Typography>
        <CustomDivider />
      </Grid>
      <Grid container item>
        {isUpdating ? (
          <Grid container justifyContent="end" spacing={2}>
            <Grid item>
              <Button
                onClick={() => setUpdating(false)}
                variant="contained"
                color="error"
                size="small"
              >
                Close
              </Button>
            </Grid>
            <Grid item>
              <Button
                onClick={saveDescription}
                disabled={isLoading}
                variant="contained"
                size="small"
              >
                Save
              </Button>
            </Grid>
          </Grid>
        ) : (
          <Grid container justifyContent="end">
            <Button onClick={startUpdating} variant="contained" size="small">
              Change
            </Button>
          </Grid>
        )}
      </Grid>
      <Grid container item>
        {isUpdating ? (
          <SimpleEditor
            style={{ width: "100%" }}
            value={aboutMeValue}
            onChange={handlerTextVacancy}
            options={options}
          />
        ) : (
          <ReactMarkdown
            children={user?.description || companyDetails?.description || ""}
          />
        )}
      </Grid>
    </Grid>
  );
};

export default AboutMe;
