import { createBrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import Home from "./pages/Home.jsx";
import CadastroUsuario from "./pages/CadastroUsuario.jsx";
import CadastroTarefa from "./pages/CadastroTarefa.jsx";
import EditarTarefa from "./pages/EditarTarefa.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/cadastrar-usuario",
        element: <CadastroUsuario />,
      },
      {
        path: "/cadastrar-tarefa",
        element: <CadastroTarefa />,
      },
      {
        path: "/editar-tarefa/:id",
        element: <EditarTarefa />,
      },
    ],
  },
]);

export default router;
