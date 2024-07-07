import React from 'react';
import Grid from '@mui/material/Grid';


export default function AuthorizedWrapper({
  children,
}: {
  children: JSX.Element;
}): JSX.Element {
  return (
    <Grid container>
      {/* <AfterSignInTopBar/> */}
      <Grid
        item
        alignItems="center"
        sx={{
          flexGrow: 1,
          minHeight: '100vh',
          width: '100vh',
          overflow: 'hidden',
          paddingLeft: '0px',
          background:
          "linear-gradient(to right, #F6F6F6, #F6F6F6, #F6F6F6, #F6F6F6, #F6F6F6)",
        }}
      >
        {/* <Sidebar /> */}
        {children}
        {/* <Footer /> */}
      </Grid>
    </Grid>
  );
}
