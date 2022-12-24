import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "./hooks/redux";
// My Components
import Header from "./components/Header";
// Routes
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Admin from "./pages/Admin";
import MovieDetails from "./pages/MovieDetails";
// Other
import { handleGetMe } from "./redux/reducers/authSlice";
import { Grid } from "@mui/material";
import JobDetails from "./pages/JobDetails";
import MainLayout from "./Layouts/MainLayout";
import CandidateDetails from "./pages/CandidateDetails";
import CandidateProfile from "./pages/CandidateProfile";
import MyProfile from "./pages/MyProfile";
import SavedJobs from "./pages/SavedJobs";
import FoundJobsList from "./pages/FilteringJobs";
import SearchingJobs from "./pages/SearchingJobs";

const App: React.FC = () => {
  const dispatch = useAppDispatch();
  const { user } = useAppSelector((state) => state.auth);

  useEffect(() => {
    dispatch(handleGetMe());
  }, [dispatch]);

  useEffect(() => {
    if (!user) {
      alert("Something went wrong");
    }

    if ("token" in user) {
      window.localStorage.setItem("token", user.token);
    }
  }, [user]);

  return (
    <Grid item>
      <Header />
      <MainLayout>
        <Routes>
          <Route path={"/"} element={<Home />} />
          <Route path={"/movie/:id"} element={<MovieDetails />} />
          <Route path={"/login"} element={<SignIn />} />
          <Route path={"/register"} element={<SignUp />} />
          <Route path={"/admin"} element={<Admin />} />
          <Route path={"/job-details"} element={<JobDetails />} />
          <Route path={"/candidate-details"} element={<CandidateDetails />} />
          <Route path={"/filter"} element={<FoundJobsList />} />
          <Route path={"/search"} element={<SearchingJobs />} />
          <Route path={"candidate-profile"} element={<CandidateProfile />}>
            <Route path={""} element={<MyProfile />} />
            <Route path={"saved-jobs"} element={<SavedJobs />} />
          </Route>
        </Routes>
      </MainLayout>
    </Grid>
  );
};

export default App;
