import React from "react";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";

const MainApp = (props) => {
  return (
    <Container>
      <Grid container spacing={1}>
        <Grid item sx={{ bgcolor: "blue" }}>
          MAIN
        </Grid>
        <Grid item sx={{ bgcolor: "violet" }}>
          APP
        </Grid>
      </Grid>
    </Container>
  );
};
export default MainApp;
