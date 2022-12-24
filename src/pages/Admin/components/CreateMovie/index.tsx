import React from "react";
import { Grid } from '@mui/material'
import Poster from "../../../../components/UIComponents/Poster";
import Background from "../../../../components/UIComponents/Background";

const CreateMovie: React.FC = () => {
  return (
    <Grid container item sx={{ position: 'relative', mt: 1 }}>
      <Background/>
      <Grid container item xs={12} md={3} justifyContent='center'>
        <Grid item md={9} sx={{ position: 'relative', zIndex: 5, padding: '0 0 108% 0' }}>
          <Poster/>
        </Grid>
      </Grid>
      <Grid item xs={12} md={9} sx={{ minHeight: 'calc(100vh - 60px)' }}>
        <Grid>
          <Grid>Title</Grid>
          <Grid>Original Title</Grid>
        </Grid>
        <Grid>SOmething</Grid>
        <Grid>
          <Grid>DIrectors</Grid>
          <Grid>Year</Grid>
          <Grid>COuntry</Grid>
          <Grid>Premiere</Grid>
          <Grid>About</Grid>
        </Grid>
        <Grid>
          <Grid>Duration</Grid>
          <Grid>Budget</Grid>
          <Grid>Dues</Grid>
        </Grid>
        <Grid>Type</Grid>
        <Grid>Description</Grid>
      </Grid>
    </Grid>
  )
};

export default CreateMovie;
