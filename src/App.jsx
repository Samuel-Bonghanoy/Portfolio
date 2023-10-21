import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AppLayout from "./components/UI/AppLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
