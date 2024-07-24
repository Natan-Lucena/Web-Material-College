import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./Home";
import Read from "./professor/Read";
import Create from "./professor/Create";
import Update from "./professor/Update";
import Delete from "./professor/Delete";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      { path: "professor/read", element: <Read /> },
      { path: "professor/create", element: <Create /> },
      { path: "professor/update", element: <Update /> },
      { path: "professor/delete", element: <Delete /> },
    ],
  },
]);

const Main = () => {
  return <RouterProvider router={router} />;
};

export default Main;
