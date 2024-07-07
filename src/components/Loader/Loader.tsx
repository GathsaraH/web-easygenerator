import { Backdrop, CircularProgress } from "@mui/material";

const Loader = (): JSX.Element => {
  return (
    <Backdrop
      sx={{
        color: "#fff",
        height: "100%",
        zIndex: (theme) => theme.zIndex.drawer + 10000000,
      }}
      open={true}
    >
      {" "}
      <CircularProgress color="inherit" />{" "}
    </Backdrop>
  );
};

export default Loader;