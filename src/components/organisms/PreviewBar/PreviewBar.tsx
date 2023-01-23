import React from "react";
import { Grid, Typography } from "@mui/material";

import LocationOnIcon from "@mui/icons-material/LocationOn";

import CustomAvatar from "../../atoms/CustomAvatar";
import Background from "../../atoms/Background";
import CustomDivider from "../../atoms/CustomDivider";

interface IProps {
  previewTitle: string;
  allowEditing: boolean;
  children: JSX.Element;
  miniDescription?: string | undefined;
  location?: string;
}

const PreviewBar: React.FC<IProps> = ({
  previewTitle,
  location,
  miniDescription,
  allowEditing = false,
  children,
}) => {
  return (
    <Grid container item sx={{ mb: 6 }} spacing={4}>
      <Grid container item>
        <Background allowEditing={allowEditing} />
      </Grid>
      <Grid container item justifyContent="center">
        <Grid
          container
          item
          xs={10.5}
          sx={{ position: "relative" }}
          spacing={1}
        >
          <Grid container item>
            <CustomAvatar position="absolute" allowEditing={allowEditing} />
          </Grid>
          <Grid container item justifyContent="space-between">
            <Grid item>
              <Grid container item alignItems="center" spacing={4}>
                <Grid item>
                  <Typography variant="h5">{previewTitle}</Typography>
                </Grid>
                {location ? (
                  <Grid container item xs spacing={2}>
                    <Grid>
                      <LocationOnIcon
                        sx={{ fontSize: "17px", color: "gray" }}
                      />
                    </Grid>
                    <Grid>
                      <Typography variant="body2">{location}</Typography>
                    </Grid>
                  </Grid>
                ) : null}
              </Grid>
              {miniDescription ? (
                <Grid container item>
                  <Typography variant="body2">{miniDescription}</Typography>
                </Grid>
              ) : null}
            </Grid>
            <Grid item>{children}</Grid>
          </Grid>
        </Grid>
      </Grid>
      {/* <CustomDivider /> */}
    </Grid>
  );
};

export default PreviewBar;
