import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "../Utilities/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const navigate = useNavigate();
  const user=useSelector( store => store.user)
  const handleSignOut=()=>{
    signOut(auth).then(() => {
      navigate("/login");
    }).catch((error) => {
      console.log(error);
    });
  }
  return (
    <>
      <div className="flex justify-between w-screen h-[30vh] sm:h-[25vh] md:h-[30vh] px-4 sm:px-8 py-2 z-1 bg-gradient-to-b from-black absolute">
        <img
          className="w-30 h-15"
          src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        />
        {user && (<div className="flex">
          <img className="mx-2 my-1 w-7 h-7 rounded-lg" src={user?.photoURL  || "https://wallpapers.com/images/hd/netflix-profile-pictures-1000-x-1000-vnl1thqrh02x7ra2.jpg"}  />
          <p className="text-green-700 mx-2 my-[5px] cursor-pointer" onClick={handleSignOut}>Sign Out</p>
        </div>)}
      </div>
    </>
  );
};

export default Header;
