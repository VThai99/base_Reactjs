import "./scss/style.scss";
import DefaultLayout from "./layout/DefaultLayout";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/user/Login";
import SignUp from "./pages/user/SignUp";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="/*" element={<DefaultLayout />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
