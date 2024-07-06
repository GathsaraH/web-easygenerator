import React from "react";
import { Box, Button, TextField, Typography, Link, Grid } from "@mui/material";
import { styled as materialStyled } from "@mui/material/styles";
import { keyframes } from "@emotion/react";
import detailContainerBackground from "../../assets/detailContainerBackground.png";
import fallingImage from "../../assets/fallingImage.png";
import facebook from "../../assets/Facebook.png";
import google from "../../assets/Google.png";

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const slideIn = keyframes`
  from {
    transform: translateY(-100px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
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

const FormContainer = materialStyled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  width: "450px",
  padding: theme.spacing(4),
  marginTop: theme.spacing(8),
  marginLeft: theme.spacing(4),
  marginRight: theme.spacing(4),
  animation: `${slideIn} 1s ease-out`,
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
    height: "100%",
    animation: `${bounce} 2s infinite`,
  },
  right: theme.spacing(8),
  animation: `${fadeIn} 2s ease-out`,
}));

const StyledButton = materialStyled(Button)(({ theme }) => ({
  marginTop: theme.spacing(2),
  backgroundColor: "#4461F2",
  borderRadius: "8px",
  color: "white",
  "&:hover": {
    backgroundColor: theme.palette.primary.dark,
  },
  boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.40)",
  animation: `${fadeIn} 2.5s ease-out`,
}));

const StyledTextField = materialStyled(TextField)(({ theme }) => ({
  "& .MuiOutlinedInput-root": {
    backgroundColor: "#EAF0F7",
    borderRadius: "8px",
    "& fieldset": {
      borderColor: "#4F555A",
    },
    "&:hover fieldset": {
      borderColor: "#4F555A",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#667085",
    },
  },
  "& .MuiInputBase-input": {
    padding: theme.spacing(1.5),
  },
  "& .MuiInputAdornment-positionEnd": {
    marginRight: theme.spacing(1),
  },
  animation: `${slideIn} 2s ease-out`,
}));

const AnimatedTypography = materialStyled(Typography)(({ theme }) => ({
  animation: `${slideInLeft} 1.5s ease-out`,
}));

const Register = (): JSX.Element => {
  return (
    <RegisterContainer>
      <DetailsContainer>
        <SignInContainer>
          <AnimatedTypography variant="h4" textAlign="start">
            Sign In to
          </AnimatedTypography>
          <AnimatedTypography variant="h4">Your Account</AnimatedTypography>
          <AnimatedTypography variant="body1">
            if you don’t an account you can Register here!
          </AnimatedTypography>
        </SignInContainer>
        <ImageContainer>
          <img src={fallingImage} alt="Falling Image" />
        </ImageContainer>
        <FormContainer>
          <StyledTextField
            label="Enter Email"
            variant="outlined"
            fullWidth
            margin="normal"
          />
          <StyledTextField
            label="Password"
            type="password"
            variant="outlined"
            fullWidth
            margin="normal"
          />
          <Grid container justifyContent="flex-end">
            <Typography
              sx={{
                color: "#C7C7C7",
                fontSize: "20px",
                marginTop: "8px",
                fontWeight: 500,
              }}
            >
              Forgot Password?
            </Typography>
          </Grid>
          <StyledButton variant="contained" fullWidth>
            Sign In
          </StyledButton>
          <Typography
            variant="body2"
            color="textSecondary"
            align="center"
            sx={{
              color: "#C7C7C7",
              fontSize: "20px",
              fontWeight: 500,
            }}
            marginTop={4}
          >
            Or continue with
          </Typography>
          <Grid container justifyContent="center" spacing={2} marginTop={1}>
            <Grid item>
              <img src={google} alt="Google" />
            </Grid>
            <Grid item>
              <img src={facebook} alt="Facebook" />
            </Grid>
          </Grid>
        </FormContainer>
      </DetailsContainer>
    </RegisterContainer>
  );
};

export default Register;
