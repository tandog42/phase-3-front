import { AppBar, Toolbar, Typography } from "@mui/material";
import React from "react";

function Home() {
  return (
    <AppBar>
      <Toolbar id="HomepageHeader">
        <Typography id="HomepageTitle" variant="h2" color="red">
          FL/MN Database Records
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default Home;
