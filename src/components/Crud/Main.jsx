import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./Home";
import Read from "./professor/Read";
import Create from "./professor/Create";
import Update from "./professor/Update";
import Delete from "./professor/Delete";
import CreateAluno from "./aluno/Create";
import ReadAlunos from "./aluno/Read";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      { path: "professor/read", element: <Read /> },
      { path: "professor/create", element: <Create /> },
      { path: "professor/update", element: <Update /> },
      { path: "professor/delete", element: <Delete /> },
      { path: "aluno/create", element: <CreateAluno /> },
      { path: "aluno/read", element: <ReadAlunos /> },
    ],
  },
]);

const Main = () => {
  return <RouterProvider router={router} />;
};

export default Main;
