import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import HomePage from "./pages/HomePage";
import ListingPage from "./pages/ListingPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/listings/:listingId",
        element: <ListingPage />,
      },
    ],
  },
]);

const Router = () => <RouterProvider router={router} />;

export default Router;
