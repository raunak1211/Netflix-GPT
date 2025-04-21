import Header from "./Header";
import { useState } from "react";
import { useRef } from "react";
import { Validation } from "../Utilities/Validation";

import { createUserWithEmailAndPassword } from "firebase/auth";
import { addUser } from "../Utilities/userSlice";
import { signInWithEmailAndPassword } from "firebase/auth";

import { auth } from "../Utilities/firebase";

import { updateProfile } from "firebase/auth";
import { useDispatch } from "react-redux";

import { useNavigate } from "react-router-dom";
import { AVATAR } from "../Utilities/Constants";
const Login = () => {
  const navigate = useNavigate();
  const [isSignedIn, setIsSignedIn] = useState(true);
  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);
  const dob = useRef(null);
  const [errorMessage, setErrorMessage] = useState(null);
  const dispatch = useDispatch();

  const toggleSignInForm = () => {
    setIsSignedIn(!isSignedIn);
  };
  const handleButtonClicked = () => {
    const ans = Validation(
      email.current.value,
      password.current.value,
      !isSignedIn && name.current.value
    );
    if (ans) {
      setErrorMessage(ans);
      return;
    }
    if (!isSignedIn) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;

          updateProfile(user, {
            displayName: name.current.value,
            photoURL: AVATAR,
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(addUser({ uid, email, displayName, photoURL }));
            })
            .catch((error) => {
              setErrorMessage(error.message);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    }
  };
  return (
    <div className="relative min-h-screen">
      <Header></Header>
      <div className="absolute inset-0 -z-10">
        <img
          className="h-full w-full object-cover"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/fa4630b1-ca1e-4788-94a9-eccef9f7af86/web_tall_panel/IN-en-20250407-TRIFECTA-perspective_8be2cd93-f2e6-4e34-acba-05b716385704_large.jpg"
        ></img>
      </div>
      <div className="flex items-center justify-center min-h-screen">
        <form
          onSubmit={(e) => e.preventDefault()}
          className="w-[90%] sm:w-[80%] md:w-[60%] lg:w-[40%] xl:w-[30%] bg-black opacity-80 text-white rounded-lg p-8"
        >
          <h1 className="text-3xl md:text-4xl font-bold text-center mb-6">
            {isSignedIn ? "Sign In" : "Sign Up"}
          </h1>
          {!isSignedIn && (
            <input
              ref={name}
              className="w-full p-3 my-3 bg-gray-700 rounded-md"
              type="text"
              placeholder="Enter Your Name"
            />
          )}
          {!isSignedIn && (
            <input
              ref={dob}
              className="w-full p-3 my-3 bg-gray-700 rounded-md"
              type="date"
              placeholder="Enter Your Date of Birth"
            />
          )}
          <input
            className="w-full p-3 my-3 bg-gray-700 rounded-md"
            type="email"
            ref={email}
            placeholder="Email"
          />
          <input
            type="password"
            ref={password}
            className="w-full p-3 my-3 bg-gray-700 rounded-md"
            placeholder="Password"
          />
          <button
            className="w-full bg-red-700 hover:bg-red-800 text-white font-semibold py-3 rounded-md mt-4"
            type="submit"
            onClick={handleButtonClicked}
          >
            {isSignedIn ? "Login" : "Register"}
          </button>
          {<p className="text-red-500 text-center mt-2">{errorMessage}</p>}
          <div className="flex my-4 justify-center items-center">
            {isSignedIn ? "New to Netflix?" : "Already have an account?"}
            <p
              className="cursor-pointer bg-blue-600 mx-2"
              onClick={toggleSignInForm}
            >
              {isSignedIn ? "Sign up now" : "Sign in"}
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
