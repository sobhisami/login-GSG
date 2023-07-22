import React, { useState } from "react";
import style from "./style.module.css"
import SignUpPage from "../Componant/SignUpPage";
import LoginPage from "../Componant/LoginPage";
const App = () => {
  const [isSignUp, setIsSignUp] = useState(true);

  const handleSwitchPage = () => {
    setIsSignUp(!isSignUp);
  };

  return (
    <div className="btn">
      {isSignUp ? <SignUpPage/> : <LoginPage/>}
      <button     style={{
          width: "120px",
          margin:"20px 600px"
        }} onClick={handleSwitchPage}>
        {isSignUp ? "Switch to Login" : "Switch to Sign Up"}
      </button>
    </div>
  );
};  

export default App;

