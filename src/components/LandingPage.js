import React from "react";
import LogIn from "./LogIn";
import Signup from "./Signup";


function LandingPage({ registred }) {
  // displaying different component based on user type
  return registred ? (
      <LogIn />
    ) : (
      <Signup />
    );
}

export default LandingPage; 