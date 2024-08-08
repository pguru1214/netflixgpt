import React, { useState, useRef } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/Validate";
import { auth } from "../utils/Firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";

const Login = () => {
  const navigate = useNavigate();
  const [isSignup, setIsSignup] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

  const email = useRef(null);
  const password = useRef(null);
  const fullName = useRef(null);

  const dispatch = useDispatch();

  const toggleSignup = (event) => {
    event.preventDefault();
    setIsSignup(!isSignup);
  };

  const handleSubmitForm = (event) => {
    event.preventDefault();
    const emailValue = email.current.value;
    const passwordValue = password.current.value;
    // const nameValue = isSignup ? fullName.current.value : undefined;

    const message = checkValidData(emailValue, passwordValue);
    setErrorMessage(message);

    if (message) return;

    if (isSignup) {
      //signup logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, {
            displayName: fullName.current.value,
            photoURL: "https://example.com/jane-q-user/profile.jpg",
          })
            .then(() => {
              const { uid, email, displayName } = auth.currentUser;
              dispatch(
                addUser({ uid: uid, email: email, displayName: displayName })
              );
              navigate("/browse");
            })
            .catch((error) => {
              setErrorMessage(error.message);
            });

          console.log(user, "user");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    } else {
      // sign in logic
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user, "user");
          navigate("/browse");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    }
  };

  return (
    <div className="relative bg-loginBackgrund w-[100%] h-cardh pb-10">
      <div className="h-[120px]">
        <Header />
      </div>
      <div className="bg-blackTransparent p-14 max-w-[450px] mx-auto rounded m-b-10">
        <form onSubmit={handleSubmitForm}>
          <h1 className="text-white text-3xl mb-6 font-semibold">
            {!isSignup ? "Sign In" : "Sign Up"}
          </h1>
          {isSignup && (
            <input
              ref={fullName}
              type="text"
              placeholder="Enter full name"
              className="block my-4 bg-inputBackground text-white h-[56px] p-6 w-[100%] border border-solid border-inputBackground rounded"
            />
          )}
          <input
            ref={email}
            type="email"
            placeholder="Enter email or mobile number"
            className="block my-4 bg-inputBackground h-[56px] text-white p-6 w-[100%] border border-solid border-inputBackground rounded"
          />
          <input
            ref={password}
            type="password"
            placeholder="Password"
            className="block my-4 bg-inputBackground h-[56px] text-white p-6 w-[100%] border border-solid border-inputBackground rounded"
          />
          <p className="text-red-700 mb-4">{errorMessage}</p>
          <button className="bg-buttonColor px-6 py-2 rounded text-white w-[100%]">
            {!isSignup ? "Sign In" : "Sign Up"}
          </button>
          <p className="my-4 text-center text-white text-xl">or</p>
          <button className="bg-singinButton px-6 py-2 rounded text-white w-[100%] mb-4">
            Use a sign-in code
          </button>
          <div className="text-center">
            <button
              onClick={toggleSignup}
              className="decoration-none text-center text-white"
            >
              {isSignup
                ? "Already have an account? Sign In"
                : "New to Netflix? Sign Up"}
            </button>
          </div>
          <div className="flex justify-between">
            <button className="decoration-none text-center text-white block">
              Forgot Password
            </button>
            <button className="underline text-center text-white block">
              {!isSignup ? "Sign Up" : "Sign In"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
