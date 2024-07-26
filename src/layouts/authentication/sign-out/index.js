import AuthService from "services/Authentication";
import { auth } from "../../../firebase";
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Routes,Route,useNavigate, Navigate } from "react-router-dom";
import { Button } from "react-bootstrap";

function SignOut() {
  const navigate = useNavigate();
    const [rememberMe, setRememberMe] = useState(true);
  
    const handleSetRememberMe = () => setRememberMe(!rememberMe);
    const myClassInstance = new AuthService();
      myClassInstance.handleSignOut();
    // const handleSignOut = (event,newValue) => {
    //   const myClassInstance = new AuthService();
    //   myClassInstance.handleSignOut();
    // };
  
    return (
      <div>
     <Navigate to="/authentication/sign-in"/>
    </div>
    );
  }
  
  export default SignOut;   
  