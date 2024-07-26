import React, { useState } from "react";

// react-router-dom components
import { Link, useNavigate } from "react-router-dom";

// @mui material components
import Switch from "@mui/material/Switch";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";

// WedGlobally React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftInput from "components/SoftInput";
import SoftButton from "components/SoftButton";

// Authentication layout components
import CoverLayout from "layouts/authentication/components/CoverLayout";

// Images
import curved9 from "../../../assets/websiteasset/img/gallery-1.jpg";
import Socials from "layouts/authentication/components/Socials";
import Button from "layouts/home/component/header/components/button/Button";

function SignIn() {
  const [rememberMe, setRememberMe] = useState(true);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSetRememberMe = () => setRememberMe(!rememberMe);

  const handleClick = () => {
    // Hardcoded username and password for testing purposes
    const testEmail = "test";
    const testPassword = "test";

    if (!email || !password) {
      setSnackbarMessage("Please fill in all fields");
      setSnackbarOpen(true);
      return;
    }

    if (email === testEmail && password === testPassword) {
      navigate("/dashboard"); // Redirect to dashboard
    } else {
      setSnackbarMessage("Invalid username or password");
      setSnackbarOpen(true);
    }
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
          <SoftInput
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
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
          <SoftInput
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
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
