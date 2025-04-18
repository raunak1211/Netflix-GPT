import { useContext, useEffect } from "react";
import Browse from "./Browse";
import Login from "./Login";
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../Utilities/firebase";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../Utilities/userSlice";

const Body = () => {
  

  const dispatch = useDispatch();
  
  
  const router = createBrowserRouter([
    {
      path: "/login",
      element: <Login></Login>,
    },
    {
      path: "/browse",
      element: <Browse></Browse>,
    },
  ]);
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const {uid,email,displayName,photoURL} = user;
        dispatch(addUser({uid,email,displayName,photoURL}));
      } else {
        dispatch(removeUser());
      }
    });
  }, []);

  


  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
};

export default Body;
