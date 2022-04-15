import { Outlet } from "react-router-dom";
import Test1 from "../pages/test/Test1";
import Test11 from "../pages/test/Test11";
import Test111 from "../pages/test/Test111";
import Test12 from "../pages/test/Test12";
import Test2 from "../pages/test2/Test2";
import Test21 from "../pages/test2/Test21";

const routes = [
  {
    path: "test1",
    child: [
      { path: null, index: true, element: <Test11 /> },
      {
        path: ":id",
        child: [
          { path: null, index: true, element: <Test12 /> },
          { path: ":sid", element: <Test111 /> },
        ],
      },
    ],
  },
  {
    path: "test2",
    child: [{ path: ":id", element: <Test21 /> }],
  },
  { path: "", element: <Test1 /> },
];
export default routes;
