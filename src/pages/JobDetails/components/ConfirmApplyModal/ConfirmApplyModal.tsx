import React, { useState, useEffect } from "react";
import {
  Grid,
  Typography,
  Modal,
  Tabs,
  Tab,
  Button,
  CircularProgress,
} from "@mui/material";
import { closeModal } from "../../../../redux/reducers/modalSlice";
import { useAppSelector, useAppDispatch } from "../../../../hooks/redux";
import { useGetUserQuery } from "../../../../redux/features/user.api";
import CustomDivider from "../../../../components/atoms/CustomDivider";
import { NavLink } from "react-router-dom";
import { openSnackbar } from "../../../../redux/reducers/snackbarSlice";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  // height: 500,
  bgcolor: "background.paper",
  boxShadow: 24,
  borderRadius: "8px",
  p: 4,
};

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <Grid
      item
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Grid>
          <Typography>{children}</Typography>
        </Grid>
      )}
    </Grid>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const ConfirmApplyModal: React.FC = () => {
  const [isLoading, setLoading] = useState<boolean>(false);
  const [value, setValue] = useState(0);

  const dispatch = useAppDispatch();
  const { showModal } = useAppSelector((state) => state.modal);

  const { data: user } = useGetUserQuery();

  const handleClose = () => dispatch(closeModal());

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  useEffect(() => {
    if (isLoading) {
      const timer = setTimeout(() => {
        setLoading(false);
        dispatch(closeModal());
        dispatch(
          openSnackbar({
            text: "You successfully sent CV",
            severity: "success",
          })
        );
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [dispatch, isLoading]);

  return (
    <Modal open={showModal} onClose={handleClose}>
      <Grid container xs={10} md={6} spacing={2} sx={style}>
        <Grid container item>
          <Tabs value={value} onChange={handleChange}>
            <Tab label="Select saved CV" {...a11yProps(0)} />
            <Tab label="Select .pdf CV" {...a11yProps(1)} />
          </Tabs>
        </Grid>
        <TabPanel value={value} index={0}>
          <Grid container>
            <Typography variant="body1">
              {[user?.fullName, user?.email, user?.contactNumber].join(", ")}
            </Typography>
          </Grid>
          <Grid container alignItems="center">
            <Typography>Saved CV</Typography>
            <NavLink to={`/candidate/${user?._id}`}>Watch</NavLink>
          </Grid>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Grid container>
            <Typography variant="body1">
              {[user?.fullName, user?.email, user?.contactNumber].join(", ")}
            </Typography>
          </Grid>
          <Grid container alignItems="center">
            <Typography>Saved CV</Typography>
            <NavLink to={`/candidate/${user?._id}`}>Watch</NavLink>
          </Grid>
        </TabPanel>
        <Grid container item alignItems="center" spacing={2}>
          <Grid item>
            <Button
              onClick={() => setLoading(true)}
              size="small"
              variant="contained"
              disabled={isLoading}
            >
              {isLoading ? <CircularProgress /> : "Send"}
            </Button>
          </Grid>
          <Grid item>
            <Button disabled={isLoading} onClick={handleClose} size="small">
              Cancel
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Modal>
  );
};

export default ConfirmApplyModal;
