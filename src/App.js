import logo from "./logo.svg";
import "./App.css";
import DefaultLayout from "./layout/DefaultLayout";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/*' element={<DefaultLayout />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
