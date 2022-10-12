import React, { useRef } from "react";
import { auth } from "../firebase";
//import db from "../firebase"
import "../style/Signup.css";
const Signup = () => {
const emailRef = useRef(null)
const passwordRef = useRef(null)


    const register = (e) => {
        e.preventDefault();

        auth.createUserWithEmailAndPassword(emailRef, passwordRef)
     
    }

    const signIn = (e) => {
        e.preventDefault();
    }


  return (
    <div className="signUpScreen">
      <form method="post" className="signUp__form">
        <h1>Sign in</h1>
        <input
        ref={emailRef}
          type="email"
          placeholder="internship@forsacha.com"
          required
          className="form__control"
        />
        <input
        ref={emailRef}
          type="password"
          placeholder="hey_i_have_a_job_for_you"
          required
          className="form__control"
        />
        <button type="submit" onClick={signIn} > Let's go !</button>
        <h4>
          <span className="signUp__grey">New to Netflix ? </span>
          <span className="signUp__link" onClick={register} >Sign Up now.</span>
        </h4>
      </form>
    </div>
  );
};

export default Signup;
