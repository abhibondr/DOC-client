import "./App.css";
import { Routes, Route, useNavigate } from "react-router-dom";
import BlankLayout from "./layouts/blank/BlankLayout";
import FullLayout from "./layouts/full/FullLayout";
import { ToastContainer } from "react-toastify";
<<<<<<< HEAD
import Footer from "./features/footer/Footer";
=======
import { useDispatch, useSelector } from "react-redux";
import { removeUser, selectAuth } from "./app/slice/AuthSlice";
import { Navigate } from "react-router-dom";
import { useEffect } from "react";
import AuthService from "./services/AuthService";
>>>>>>> 06c0d8d304173a77c378d6ee3028faf378e040f3

function App() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const token = sessionStorage.getItem("token");

  const ProtectedRoute = ({ children }) => {
    useEffect(() => {
      if (token)
        AuthService.validateToken()
          .then((response) => {
            console.log("Valid token");
          })
          .catch((err) => {
            console.log("invalid token");
            sessionStorage.clear();
            dispatch(removeUser());
            navigate("/login");
          });
    }, []);

    //get user from redux store
    const loggedUser = useSelector(selectAuth);

    //get token from session storage
    return loggedUser?._id && token ? children : <Navigate to="/login" />;
  };

  return (
    <>
      <ToastContainer autoClose={3000} />
      <Routes>
        <Route path="/*" element={<BlankLayout />} />
        <Route
          path="secured/*"
          element={
            <ProtectedRoute>
              <FullLayout />
            </ProtectedRoute>
          }
        />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
