import React from "react";
import { Box, Button, TextField, Typography, Link, Grid } from "@mui/material";
import { styled as materialStyled } from "@mui/material/styles";
import { keyframes } from "@emotion/react";
import detailContainerBackground from "../../assets/detailContainerBackground.png";
import fallingImage from "../../assets/fallingImage.png";
import RegisterForm from "../../components/RegisterForm/RegisterForm";
import { useNavigate } from "react-router";
import { ROUTE_LOGIN_PAGE } from "../../util/routes";

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const bounce = keyframes`
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-30px);
  }
  60% {
    transform: translateY(-15px);
  }
`;

const slideInLeft = keyframes`
  from {
    transform: translateX(-100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`;

const RegisterContainer = materialStyled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  height: "100vh",
  animation: `${fadeIn} 1s ease-out`,
}));

const DetailsContainer = materialStyled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
}));

const SignInContainer = materialStyled(Box)(({ theme }) => ({
  backgroundImage: `url(${detailContainerBackground})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  width: "450px",
  height: "450px",
  display: "flex",
  flexDirection: "column",
  alignItems: "start",
  justifyContent: "center",
  borderRadius: "50px",
  padding: theme.spacing(4),
  animation: `${fadeIn} 1.5s ease-out`,
}));

const ImageContainer = materialStyled(Box)(({ theme }) => ({
  marginTop: theme.spacing(8),
  position: "relative",
  "& img": {
    width: "100%",
    height: "90%",
    animation: `${bounce} 2s infinite`,
  },
  right: theme.spacing(8),
  animation: `${fadeIn} 2s ease-out`,
}));

const AnimatedTypography = materialStyled(Typography)(({ theme }) => ({
  animation: `${slideInLeft} 1.5s ease-out`,
  fontFamily: "Poppins",
  fontWeight: 700,
}));

const Register = (): JSX.Element => {
  const navigate = useNavigate();
  return (
    <RegisterContainer>
      <DetailsContainer>
        <SignInContainer>
          <AnimatedTypography variant="h2" textAlign="start">
            Sign Up to
          </AnimatedTypography>
          <AnimatedTypography variant="h3" textAlign="start">
            Recharge Direct
          </AnimatedTypography>
          <Box
            sx={{
              marginTop: 8,
            }}
          >
            <AnimatedTypography variant="h5">
              Already have an account?{" "}
            </AnimatedTypography>
            <AnimatedTypography variant="h5">
              <span
                style={{ color: "#4461F2", cursor: "pointer" }}
                onClick={() => navigate(ROUTE_LOGIN_PAGE)}
              >
                Login here
              </span>
            </AnimatedTypography>
          </Box>
        </SignInContainer>
        <ImageContainer>
          <img src={fallingImage} alt="Falling Image" />
        </ImageContainer>
        <RegisterForm />
      </DetailsContainer>
    </RegisterContainer>
  );
};

export default Register;
