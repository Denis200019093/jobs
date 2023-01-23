import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Button, Grid } from "@mui/material";

import PreviewBar from "../../components/organisms/PreviewBar";
import ReactMarkdown from "react-markdown";
import ContactsCompany from "./components/ContactsCompany";
import EmployementInfo from "./components/EmploymentInfo";
import { useFetchVacancyDetailsQuery } from "../../redux/features/vacancies.api";
import { IVacancy } from "../../models/Vacancy";
import { useAppDispatch } from "../../hooks/redux";
import {
  uploadAvatarURL,
  uploadBackgroundURL,
} from "../../redux/reducers/imagesSlice";
import { useFetchCompanyDetailsQuery } from "../../redux/features/user.api";
import ApplyNowBlock from "./components/ApplyNowBlock";
import CustomDivider from "../../components/atoms/CustomDivider";
import ConfirmApplyModal from "./components/ConfirmApplyModal";

const JobDetails: React.FC = () => {
  const { id } = useParams();

  const { data: vacancyDetails } = useFetchVacancyDetailsQuery(id);
  const { data: companyDetails } = useFetchCompanyDetailsQuery(
    vacancyDetails?.jobAuthor
  );

  const dispatch = useAppDispatch();

  const { backgroundURL, avatarURL, jobTitle, jobDescription } = {
    ...vacancyDetails,
  } as IVacancy;

  useEffect(() => {
    dispatch(uploadAvatarURL(avatarURL));
    dispatch(uploadBackgroundURL(backgroundURL));
  }, [avatarURL, backgroundURL, dispatch]);

  return (
    <>
      <Grid item sx={{ pb: 3, mb: 5 }}>
        <PreviewBar allowEditing={false} previewTitle={jobTitle}>
          <Button variant="contained">Apply now</Button>
        </PreviewBar>
      </Grid>
      <Grid container item spacing={4}>
        <Grid item xs={12} md={8}>
          <Grid container spacing={3}>
            <Grid container item>
              <EmployementInfo vacancyDetails={vacancyDetails} />
            </Grid>

            <Grid container item>
              <ReactMarkdown children={jobDescription} />
            </Grid>

            <Grid container item>
              <CustomDivider />
              <ApplyNowBlock vacancy={vacancyDetails} />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} md={4}>
          <ContactsCompany companyDetails={companyDetails} />
        </Grid>
        <ConfirmApplyModal />
      </Grid>
    </>
  );
};

export default JobDetails;
