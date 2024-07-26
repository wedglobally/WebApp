import { useState } from "react";

// react-router-dom components
import { Link } from "react-router-dom";

// @mui material components
import Switch from "@mui/material/Switch";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";

// WedGlobally React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftInput from "components/SoftInput";
import SoftButton from "components/SoftButton";
import AuthService from "../../../services/Authentication";
// Authentication layout components
import CoverLayout from "layouts/authentication/components/CoverLayout";

// Images
import curved9 from "../../../assets/websiteasset/img/gallery-1.jpg";
import { Password } from "@mui/icons-material";
import Socials from "layouts/authentication/components/Socials";
import Button from "layouts/home/component/header/components/button/Button";

function SignIn() {
  const [rememberMe, setRememberMe] = useState(true);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");

  const handleSetRememberMe = () => setRememberMe(!rememberMe);

  const handleClick = () => {
    const emailValue = document.querySelector('input[type="email"]').value;
    const password = document.querySelector('input[type="password"]').value;

    if (!emailValue || !password) {
      setSnackbarMessage("Please fill in all fields");
      setSnackbarOpen(true);
      return;
    }

    const person = {
      emailValue,
      password
    };
    const myClassInstance = new AuthService();
    myClassInstance.handleSignIn(person);
  };

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  return (
    <CoverLayout
      title="Welcome back"
      description="Enter your email and password to sign in"
      image={curved9}
    >
      <SoftBox component="form" role="form">
        <SoftBox mb={2}>
          <SoftBox mb={1} ml={0.5}>
            <SoftTypography
              component="label"
              variant="caption"
              fontWeight="bold"
              sx={{ color: '#D1A77A' }}
            >
              Email
            </SoftTypography>
          </SoftBox>
          <SoftInput type="email" placeholder="Email" />
        </SoftBox>
        <SoftBox mb={2}>
          <SoftBox mb={1} ml={0.5}>
            <SoftTypography
              component="label"
              variant="caption"
              fontWeight="bold"
              sx={{ color: '#D1A77A' }}
            >
              Password
            </SoftTypography>
          </SoftBox>
          <SoftInput type="password" placeholder="Password"/>
        </SoftBox>
        <SoftBox display="flex" alignItems="center">
          <Switch checked={rememberMe} onChange={handleSetRememberMe} />
          <SoftTypography
            variant="button"
            fontWeight="regular"
            onClick={handleSetRememberMe}
            sx={{ cursor: "pointer", userSelect: "none", color: '#D1A77A' }}
          >
            &nbsp;&nbsp;Remember me
          </SoftTypography>
        </SoftBox>
        <SoftBox mt={4} mb={1}>
          <SoftButton
            onClick={handleClick}
            color="info"
            fullWidth
            sx={{
              backgroundColor: '#D1A77A',
              '&:hover': {
                backgroundColor: '#D1A77A',
              },
            }}
          >
            Sign In
          </SoftButton>
        </SoftBox>
        <SoftBox mb={2}>
          <Socials />
        </SoftBox>
        <SoftBox mt={3} textAlign="center">
          <SoftTypography variant="h4" fontWeight="bold" sx={{ color: '#D1A77A' }}>
            Welcome back
          </SoftTypography>
          <SoftTypography variant="button" color="text" fontWeight="regular">
            Don&apos;t have an account?{" "}
            <SoftTypography
              component={Link}
              to="/authentication/sign-up"
              variant="button"
              color="info"
              fontWeight="medium"
              textGradient
            >
              Sign up
            </SoftTypography>
          </SoftTypography>
        </SoftBox>
      </SoftBox>

      {/* Snackbar for displaying messages */}
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={handleSnackbarClose}
        action={
          <Button color="inherit" onClick={handleSnackbarClose}>
            Close
          </Button>
        }
      >
        <Alert onClose={handleSnackbarClose} severity="error" sx={{ width: '100%' }}>
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </CoverLayout>
  );
}

export default SignIn;
