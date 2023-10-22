import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AppLayout from "./components/UI/AppLayout";
import LandingPage from "./components/Landing Page/LandingPage";
import About from "./components/About Page/About";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <LandingPage />,
      },
      {
        path: "/about",
        element: <About />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
