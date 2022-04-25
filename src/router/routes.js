import Contact from "../pages/contact/Contact";
import CopyRight from "../pages/copyright/CopyRight";
import Films from "../pages/films/Films";
import FilmsDetail from "../pages/films/FilmsDetail";
import Home from "../pages/home/Home";
import Introduce from "../pages/introduce/Introduce";

const routes = [
  {
    path: "",
    child: [{ path: null, index: true, element: <Home /> }],
  },
  {
    path: "introduce",
    child: [{ path: null, index: true, element: <Introduce /> }],
  },
  {
    path: "film",
    child: [{ path: null, index: true, element: <Films /> },{ path: ":id", element: <FilmsDetail /> }],
  },
  {
    path: "copy-right",
    child: [{ path: null, index: true, element: <CopyRight /> }],
  },
  {
    path: "contact",
    child: [{ path: null, index: true, element: <Contact /> }],
  }
];
export default routes;
