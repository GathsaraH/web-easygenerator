import  { useEffect } from "react";
import Grid from "@mui/material/Grid";
import { getAccessToken, getRefreshToken } from "../../services/axiosInstance";
import { useNavigate } from "react-router";
import { ROUTE_LOGIN_PAGE } from "../../util/routes";
import { showErrorNotification } from "../../util/notificationManager";

export default function AuthorizedWrapper({
  children,
}: {
  children: JSX.Element;
}): JSX.Element {
  const navigate = useNavigate();
  const accessToken = getAccessToken();
  const refreshToken = getRefreshToken();
  useEffect(() => {
    if (!accessToken || !refreshToken) {
      navigate(ROUTE_LOGIN_PAGE);
      showErrorNotification("You are not authorized to view this page.");
    }
  }, [accessToken, refreshToken,navigate]);
  return (
    <Grid container>
      <Grid
        item
        alignItems="center"
        sx={{
          flexGrow: 1,
          minHeight: "100vh",
          width: "100vh",
          overflow: "hidden",
          paddingLeft: "0px",
          background:
            "linear-gradient(to right, #F6F6F6, #F6F6F6, #F6F6F6, #F6F6F6, #F6F6F6)",
        }}
      >
        {children}
      </Grid>
    </Grid>
  );
}
