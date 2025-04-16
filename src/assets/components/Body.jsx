import Browse from "./Browse";
import Login from "./login";
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
const Body = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Login></Login>,
    },
    {
      path: "/browse",
      element: <Browse></Browse>,
    },
  ]);
  return (
    <div>
      <RouterProvider router={router}> 
      </RouterProvider>
    </div>
  );
};

export default Body;
