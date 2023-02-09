import React from "react";
import { useParams } from "react-router-dom";
import { Button, Grid } from "@mui/material";

import { useFetchVacancyDetailsQuery } from "../../redux/features/vacancies.api";
import { IVacancy } from "../../models/Vacancy";
import { useAppDispatch } from "../../hooks/redux";
import { useGetCompanyDetailsQuery } from "../../redux/features/company.api";
import { openModal } from "../../redux/reducers/modalSlice";
import ApplyNowBlock from "./components/ApplyNowBlock";
import CustomDivider from "../../components/Reusable/CustomDivider";
import ConfirmApplyModal from "./components/ConfirmApplyModal";
import PreviewBar from "../../components/Reusable/PreviewBar";
import ReactMarkdown from "react-markdown";
import ContactsCompany from "./components/ContactsCompany";
import EmployementInfo from "./components/EmploymentInfo";

const JobDetails: React.FC = () => {
  const { id } = useParams();

  const { data: vacancyDetails } = useFetchVacancyDetailsQuery(id);
  const { data: companyDetails } = useGetCompanyDetailsQuery(
    vacancyDetails?.jobAuthor
  );

  const handleShowModal = () => dispatch(openModal());

  const dispatch = useAppDispatch();

  const { jobTitle, jobDescription } = {
    ...vacancyDetails,
  } as IVacancy;

  return (
    <>
      <Grid item sx={{ pb: 3, mb: 5 }}>
        <PreviewBar allowEditing={false} previewTitle={jobTitle}>
          <Button variant="contained" onClick={handleShowModal}>
            Apply now
          </Button>
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
