import { createBrowserRouter } from "react-router-dom";
import Navbar from "./componenets/Navbar";
import Documents from "./componenets/Documents";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Navbar />
        <Documents />
      </>
    ),
  },
  {
    path: "*",
    element: "404 page",
  },
]);

export default router;
