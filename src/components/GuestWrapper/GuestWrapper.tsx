import Grid from "@mui/material/Grid";

export default function GuestWrapper({
  children,
}: {
  children: JSX.Element;
}): JSX.Element {
  return (
    <Grid container>
      <Grid
        id="gust-wrapper"
        item
        alignItems="center"
        sx={{
          flexGrow: 1,
          minHeight: "100vh",
          width: "100vh",
          overflow: "hidden",
          background:
            "linear-gradient(to right, #081c20, #082024, #062429, #05282d, #032c32)",
        }}
      >
        {children}
      </Grid>
    </Grid>
  );
}
