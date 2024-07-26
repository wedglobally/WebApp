import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Routes,Route,Navigate } from "react-router-dom";
import routes from "routes";
import Dashboard from 'layouts/dashboard';
import { auth } from "../../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
class AuthService extends React.Component {
  
  handleSignOut=()=>{
    auth.signOut();
  };
  
  setLoggedInState=()=>{
   
  };

   handleSignIn = (data) => {
    console.log(routes["dashboard"]);
    return <Route exact path="/dashboard" key="dashboard" element={routes["dashboard"].Component} />;
  //  return  (<Routes>
  //  <Route path="*" element={<Navigate to="/dashboard" />} />
  //   </Routes>);

    fetch('http://yourpythonapi.com/signin', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        // Add any necessary headers here
      },
      body: JSON.stringify({
        // Add any data you need to send to the API for sign-in
      }),
    })
    .then(response => {
      if (response.ok) {
        // Handle successful response
      } else {
        // Handle error response
      }
    })
    .catch(error => {
      // Handle fetch error
    });
  };

   handleSignUp = async (data) => {
    try {
      const response = await axios.post('http://your-python-api-url/signup', {
        // Add any data needed for sign up in the request body
      });
      console.log(response.data); // Handle the response from the API
    } catch (error) {
      console.error(error); // Handle any errors
    }
  };

  render() {
    return (
        <div>
        </div>
    );
 }

};

export default AuthService;