import "./App.css";
import { RouterProvider } from "react-router-dom";
import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import { useAuth } from "./context/authContext";
import Signup from "./componenets/Signup";
import { Navigate } from "react-router-dom";
import Login from "./componenets/Login";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Document from "./pages/Document";
import { Spin } from "antd";


function App() {
  const auth = useAuth();

  const router = createBrowserRouter([
    {
      path: "/",
      element: auth.loading? <Spin/> : (auth.user ? (
        <>
          <Home />
        </>
      ) : (
        <Navigate to="/login" />
      )),
    },
    {
      path: "/signup",
      element: auth.user ? <Navigate to="/" /> : <Signup />,
    },
    {
      path: "/login",
      element: auth.user ? <Navigate to="/" /> : <Login />,
    },
    {
      path: "/document/:id",
      element: <Document />,
    },
    {
      path: "*",
      element: "404 page",
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
      <ToastContainer
        position="top-left"
        autoClose={5000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
}

export default App;
