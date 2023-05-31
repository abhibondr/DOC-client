import "./App.css";
import { Routes, Route } from "react-router-dom";
import BlankLayout from "./layouts/blank/BlankLayout";
import FullLayout from "./layouts/full/FullLayout";
import { ToastContainer } from "react-toastify";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <ToastContainer autoClose={3000} />
      <Routes>
        <Route path="/*" element={<BlankLayout />} />
        <Route path="secured/*" element={<FullLayout />} />
      </Routes>
    </>
  );
}

export default App;
