import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AppLayout from "./components/UI/AppLayout";
import LandingPage from "./components/Landing Page/LandingPage";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <LandingPage />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
