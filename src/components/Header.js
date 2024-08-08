import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "../utils/Firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);

  const handleSignout = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        navigate("/error");
      });
  };

  return (
    <div className="py-8 pr-0  bg-[#00000038] w-[100%] flex items-center justify-between">
      <div className="max-w-[350px]">
        <img
          src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
          alt="Netflix Logo"
          className="w-[100%]"
        />
      </div>
      <div>{user && <p>{user.displayName}</p>}</div>
      {user && (
        <button
          className="bg-red-600 border-solid text-white px-3 py-2 rounded-lg"
          onClick={handleSignout}
        >
          Logout
        </button>
      )}
    </div>
  );
};

export default Header;
