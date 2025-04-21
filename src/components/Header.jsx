import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "../Utilities/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector} from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../Utilities/userSlice";
import { useEffect } from "react";
import { LOGO,WALLPAPER } from "../Utilities/Constants";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user=useSelector( store => store.user)
  const handleSignOut=()=>{
    signOut(auth).then(() => {
    }).catch((error) => {
      console.log(error);
    });
  }

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const {uid,email,displayName,photoURL} = user;
        dispatch(addUser({uid,email,displayName,photoURL}));
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/login");
      }
    });

    return ()=>unSubscribe();
  }, []);


  return (
    <>
      <div className="flex justify-between w-screen h-[30vh] sm:h-[25vh] md:h-[30vh] px-4 sm:px-8 py-2 z-1 bg-gradient-to-b from-black absolute">
        <img
          className="w-30 h-15"
          src={LOGO}
        />
        {user && (<div className="flex">
          <img className="mx-2 my-1 w-7 h-7 rounded-lg" src={user?.photoURL  || WALLPAPER}  />
          <p className="text-green-700 mx-2 my-[5px] cursor-pointer" onClick={handleSignOut}>Sign Out</p>
        </div>)}
      </div>
    </>
  );
};

export default Header;
