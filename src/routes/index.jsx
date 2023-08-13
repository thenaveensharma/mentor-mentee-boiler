import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Page1 from "../pages/Page1";
import Page2 from "../pages/Page2";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/page-1",
    element: <Page1 />,
  },
  {
    path: "/page-2",
    element: <Page2 />,
  },
]);

export default router;
