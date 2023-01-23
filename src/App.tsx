import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "./hooks/redux";
import { Grid } from "@mui/material";
// Mine
import Header from "./components/Header";
import { handleGetMe } from "./redux/reducers/authSlice";
import MainLayout from "./Layouts/MainLayout";
// Routes
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import JobDetails from "./pages/JobDetails";
import CandidateDetails from "./pages/CandidateDetails";
import SavedJobs from "./pages/Employee/SavedJobs";
// import FoundJobsList from "./pages/FilteringJobs";
import CreateVacancy from "./pages/CreateVacancy";
// import Profile from "./pages/My/components/Profile";
import AboutMe from "./pages/Employee/AboutMe";
import VacanciesCompany from "./pages/Employer/VacanciesCompany";
import AboutCompany from "./pages/Employer/AboutCompany";
import Employee from "./pages/Employee";
import Result from "./pages/Result";
import Employer from "./pages/Employer";

const UserProfile = React.lazy(() => import("./pages/Employee/UserProfile"));
const CompanyProfile = React.lazy(
  () => import("./pages/Employer/CompanyProfile")
);

const App: React.FC = () => {
  const { pathname } = useLocation();
  const dispatch = useAppDispatch();
  const { user } = useAppSelector((state) => state.auth);

  useEffect(() => {
    dispatch(handleGetMe());
  }, [dispatch]);

  useEffect(() => {
    if (user && "token" in user) {
      window.localStorage.setItem("token", user.token);

      console.log("User found");
    }
  }, [dispatch, user]);

  return (
    <Grid container>
      <Header />
      <MainLayout>
        <Routes>
          <Route path={"/"} element={<Home />} />
          <Route path={"/login"} element={<SignIn />} />
          <Route path={"/register"} element={<SignUp />} />
          <Route path={"/job-details/:id"} element={<JobDetails />} />
          <Route path={"/candidate/:id"} element={<CandidateDetails />} />
          <Route path={"/create-vacancy"} element={<CreateVacancy />} />
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
          <Route path="/employer" element={<Employer />}>
            <Route
              path={"company-profile"}
              element={
                <React.Suspense fallback={<>...</>}>
                  <CompanyProfile />
                </React.Suspense>
              }
            />
            <Route path={"our-vacancies"} element={<VacanciesCompany />} />

            <Route path={"about-company"} element={<AboutCompany />} />
          </Route>
        </Routes>
      </MainLayout>
    </Grid>
  );
};

export default App;
