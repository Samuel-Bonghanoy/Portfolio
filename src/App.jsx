import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AppLayout from "./components/UI/AppLayout";
import LandingPage from "./components/Landing Page/LandingPage";
import About from "./components/About Page/About";
import Contact from "./components/Contact Page/Contact";
import Gallery from "./components/Gallery/Gallery";

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
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/gallery",
        element: <Gallery />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
