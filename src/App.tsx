import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AdminLayout from "./AdminLayout";
import "./App.css";
import MyAccount from "./Pages/MyAccount";
import InternalTransferPage from "./Pages/InternalTransfer";
import Auth from "./Pages/Auth";
import TicketPage from "./Pages/TicketPage";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AdminLayout />,
      children: [
        {
          path: "/my_accounts",
          index: true,
          element: <MyAccount />,
        },
        {
          path: "/internal_transfer",
          index: true,
          element: <InternalTransferPage />,
        },
        {
          path: "/create_ticket",
          index: true,
          element: <TicketPage />,
        },
      ],
    },
    {
      path: "/auth",
      element: <Auth />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
