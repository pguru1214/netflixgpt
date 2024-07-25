import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignup, setIsSignup] = useState(false);
  return (
    <div className="relative bg-loginBackgrund w-[100%] h-cardh pb-10">
      <div className="h-[120px]">
        <Header />
      </div>
      <div className="bg-blackTransparent p-14 max-w-[450px] mx-auto rounded m-b-10">
        <form>
          <h1 className="text-white text-3xl mb-6 font-semibold">
            {!isSignup ? "Sign In" : "Sign Up"}
          </h1>
          {isSignup && (
            <input
              type="text"
              placeholder="Enter First name"
              className="block my-4 bg-inputBackground text-white h-[56px] p-6 w-[100%] border border-solid border-inputBackground rounded"
            />
          )}
          <input
            type="email"
            placeholder="Enter email or mobile number"
            className="block my-4 bg-inputBackground h-[56px] text-white p-6 w-[100%] border border-solid border-inputBackground rounded"
          />
          <input
            type="password"
            placeholder="Password"
            className="block my-4 bg-inputBackground h-[56px] text-white p-6 w-[100%] border border-solid border-inputBackground rounded"
          />
          <button className="bg-buttonColor px-6 py-2 rounded text-white w-[100%]">
            {!isSignup ? "Sign In" : "Sign Up"}
          </button>
          <p className="my-4 text-center text-white text-xl">or</p>
          <button className="bg-singinButton px-6 py-2 rounded text-white w-[100%] mb-4">
            Use a sign-in code
          </button>
          <div className="flex justify-between">
            <a
              href="#"
              className="decoration-none text-center text-white block"
            >
              Forgot Password
            </a>
            <a
              href="#"
              className="underline text-center text-white block"
              onClick={() => setIsSignup(!isSignup)}
            >
              {!isSignup ? "Sign Up" : "Sign In"}
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
