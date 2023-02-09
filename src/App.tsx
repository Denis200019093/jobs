import React, { useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { Grid } from "@mui/material";

import { useAppSelector } from "./hooks/redux";
import Header from "./components/Header";
import MainLayout from "./Layouts/MainLayout";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import JobDetails from "./pages/JobDetails";
import CandidateDetails from "./pages/CandidateDetails";
import SavedJobs from "./pages/Employee/SavedJobs";
import CreateVacancy from "./pages/CreateVacancy";
import AboutMe from "./components/AboutMe";
import AboutCompany from "./pages/Employer/AboutCompany";
import Employee from "./pages/Employee";
// import CompanyProfile from "./pages/Employer/CompanyProfile";
import Result from "./pages/Result";
// import Employer from "./pages/Employer";
import NotFound from "./pages/NotFound";
import CompanyDetails from "./pages/CompanyDetails";
import RegisterCompany from "./pages/RegisterCompany";
import OurVacancies from "./pages/Employer/OurVacancies";
import Footer from "./components/Footer";
import { useFetchAllUsersQuery } from "./redux/features/user.api";
import { useGetMeQuery } from "./redux/features/auth.api";
import { useGetCompanyDetailsQuery } from "./redux/features/company.api";

const Employer = React.lazy(() => import("./pages/Employer"));
const UserProfile = React.lazy(() => import("./pages/Employee/UserProfile"));
const CompanyProfile = React.lazy(
  () => import("./pages/Employer/CompanyProfile")
);

const App: React.FC = () => {
  const { data: user } = useGetMeQuery();
  useGetCompanyDetailsQuery(user?._id, {
    skip: !user || user?.typeUser !== "Employer",
  });

  useEffect(() => {
    if (user && "token" in user) {
      window.localStorage.setItem("token", user.token);
    }
  }, [user]);

  if (user?.typeUser === "Employer") {
    return (
      <Grid container>
        <Header />
        <MainLayout>
          <React.Suspense fallback={<Grid>Loading</Grid>}>
            <Routes>
              <Route path={"/"} element={<Home />} />
              <Route path={"/login"} element={<Navigate to="/" />} />
              <Route path={"/register"} element={<Navigate to="/" />} />
              <Route path={"/job-details/:id"} element={<JobDetails />} />
              <Route path={"/candidate/:id"} element={<CandidateDetails />} />
              <Route path={"/company/:ownerId"} element={<CompanyDetails />} />
              <Route path={"/register-company"} element={<RegisterCompany />} />
              <Route path={"/create-vacancy"} element={<CreateVacancy />} />
              <Route path={"/result"} element={<Result />} />
              <Route path="/employer" element={<Employer />}>
                <Route path={"company-profile"} element={<CompanyProfile />} />
                <Route path={"our-vacancies"} element={<OurVacancies />} />
                {/* <Route path={"about-company"} element={<AboutCompany />} /> */}
                <Route path={"about-company"} element={<AboutMe />} />
              </Route>
              <Route path="*" element={<NotFound />} />
            </Routes>
          </React.Suspense>
        </MainLayout>
        {/* <Footer /> */}
      </Grid>
    );
  }

  if (user?.typeUser === "Employee") {
    return (
      <Grid container>
        <Header />
        <MainLayout>
          <Routes>
            <Route path={"/"} element={<Home />} />
            <Route path={"/login"} element={<Navigate to="/" />} />
            <Route path={"/register"} element={<Navigate to="/" />} />
            <Route path={"/job-details/:id"} element={<JobDetails />} />
            <Route path={"/company/:ownerId"} element={<CompanyDetails />} />
            <Route path={"/candidate/:id"} element={<CandidateDetails />} />
            <Route path={"/company"} element={<CompanyDetails />} />
            <Route path={"/result"} element={<Result />} />
            <Route path="/employee" element={<Employee />}>
              <Route
                path={"profile"}
                element={
                  <React.Suspense fallback={<>...</>}>
                    <UserProfile />
                  </React.Suspense>
                }
              />
              <Route path={"saved-jobs"} element={<SavedJobs />} />
              <Route path={"about-me"} element={<AboutMe />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </MainLayout>
      </Grid>
    );
  }

  return (
    <Grid container>
      <Header />
      <MainLayout>
        <Routes>
          <Route path={"/"} element={<Home />} />
          <Route path={"/login"} element={<SignIn />} />
          <Route path={"/register"} element={<SignUp />} />
          <Route path={"/job-details/:id"} element={<JobDetails />} />
          <Route path={"/result"} element={<Result />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </MainLayout>
    </Grid>
  );
};

export default App;
