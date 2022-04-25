import React from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import routes from "../router/routes";
function Body() {
  function routerPath(array) {
    return array?.map((item, idx) => (
      <Route
        key={idx}
        path={item?.path}
        index={item?.index}
        element={item.child?.length > 0 ? <Outlet /> : item.element}
      >
        {item.child?.length > 0 && routerPath(item.child)}
      </Route>
    ));
  }
  return (
    <div className="router">
      <Routes>{routerPath(routes)}</Routes>
    </div>
  );
}

export default Body;
