import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import About from "../pages/About/About"
import Contact from "../pages/Contact/Contact"
import Eventos from "../pages/Eventos/Eventos"
import Pedido from "../pages/Pedido/PedidoDeOracao"
import Ensinos from "../pages/Ensinos/Ensinos"




const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/about",
    element: <About />
  },
  {
    path: "/contact",
    element: <Contact />
  },
  {
    path: "/eventos",
    element: <Eventos />
  },
  {
    path: "/pedido-de-oracao",
    element: <Pedido />
  },
  {
    path: "/ensinos",
    element: <Ensinos />
  }

])

export default router;