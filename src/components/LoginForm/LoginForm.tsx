import { styled as materialStyled } from "@mui/material/styles";
import { keyframes } from "@emotion/react";
import facebook from "../../assets/Facebook.png";
import google from "../../assets/Google.png";
import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import { useFormik } from "formik";
import { loginFormSchema } from "../../util/validationSchema";

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
  cursor: "pointer",
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

interface LoginFormValues {
  email: string;
  password: string;
}
const initialValues: LoginFormValues = {
  email: "",
  password: "",
};
const onSubmitFormDetails = async (
  values: LoginFormValues,
  actions: any
): Promise<void> => {
  console.log("Form Submitted", values);
  actions.setSubmitting(false);
};

const LoginForm = (): JSX.Element => {
  const formLoginDetails = useFormik({
    initialValues: initialValues,
    validationSchema: loginFormSchema,
    onSubmit: onSubmitFormDetails,
  });
  return (
    <FormContainer>
      <form onSubmit={formLoginDetails.handleSubmit}>
        <StyledTextField
          label="Enter Email"
          variant="outlined"
          fullWidth
          margin="normal"
          name="email"
          value={formLoginDetails.values.email}
          onChange={formLoginDetails.handleChange}
          error={
            formLoginDetails.touched.email &&
            Boolean(formLoginDetails.errors.email)
          }
          helperText={
            formLoginDetails.touched.email && formLoginDetails.errors.email
          }
        />
        <StyledTextField
          label="Password"
          type="password"
          variant="outlined"
          fullWidth
          margin="normal"
          name="password"
          value={formLoginDetails.values.password}
          onChange={formLoginDetails.handleChange}
          error={
            formLoginDetails.touched.password &&
            Boolean(formLoginDetails.errors.password)
          }
          helperText={
            formLoginDetails.touched.password &&
            formLoginDetails.errors.password
          }
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
        <StyledButton variant="contained" fullWidth type="submit">
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
      </form>
    </FormContainer>
  );
};

export default LoginForm;
