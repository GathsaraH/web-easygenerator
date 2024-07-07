import React from "react";
import { Typography, Button, Container } from "@mui/material";
import { styled } from "@mui/system";
import { blueGrey, grey, amber } from "@mui/material/colors";
import { motion } from "framer-motion";



const DetailsContainer = styled(Container)(({ theme }) => ({
  minHeight: "100vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  padding: theme.spacing(3),
}));

const Title = styled(Typography)(({ theme }) => ({
  color: "#98bce4",
  marginBottom: theme.spacing(3),
}));

const StyledButton = styled(Button)(({ theme }) => ({
  backgroundColor: "#ececec",
  color: blueGrey[900],
  marginTop: theme.spacing(3),
  "&:hover": {
    backgroundColor: amber[700],
    color: grey[50],
  },
}));

const MotionButton = motion(StyledButton);

const Home: React.FC = () => {
  const handleLogout = () => {
    console.log("Logout clicked");
  };

  return (
    <DetailsContainer>
      <Title variant="h3">Welcome to the application.</Title>
      <MotionButton
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        variant="contained"
        onClick={handleLogout}
      >
        Logout
      </MotionButton>
    </DetailsContainer>
  );
};

export default Home;
