import React, { useState } from "react";
import "../style/LoginScreen.css";
import logo from "../images/netflixLogo.png";
import Signup from "./Signup";
const Login = () => {
  const [signIn, setSignIn] = useState(true);

  return (
    <div className="loginScreen">
      <div className="loginScreen__background">
        <img src={logo} alt="logo netflix" className="loginScreen__logo" />
        <button className="loginScreen__button" onClick={() => setSignIn(true)}>
          Sign in
        </button>
        <div className="loginScreen__body">
          {signIn ? (
            <Signup />
          ) : (
            <>
              <h1 className="loginScreen__body__title">
                Unlimited films, Tv programmes and more.
              </h1>
              <h2 className="loginScreen__body__title">
                Whatch anywhere. Cancel at any time
              </h2>
              <h3 className="loginScreen__body__title">
                Ready to watch ? Enter your email to create or restart your
                membership
              </h3>
              <div className="loginScreen__input">
                <form method="post" className="loginScreen__form">
                  <input
                    type="email"
                    required
                    placeholder="internship@forsacha.com"
                    className="email"
                  />
                  <button
                    className="loginScreen__getStarted"
                    onClick={() => setSignIn(true)}
                  >
                    Let's go !
                  </button>
                </form>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
