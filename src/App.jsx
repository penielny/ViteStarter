import React from 'react'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import { AuthProvider, useAuth } from './context/authentication';
import RequireAuth from './util/RequireAuth';
import Landing from './pages/Landing';
import Login from './pages/login';
import Signup from './pages/Signup';
import RequireNoAuth from './util/RequireNoAuth';
import DashboardLayout from './layout/dashboard';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing />,
  },
  {
    path: "/dashboard",
    element: <RequireAuth>
     <DashboardLayout/>
    </RequireAuth>,
  },
  {
    path: "login",
    element: <RequireNoAuth>
      <Login />
    </RequireNoAuth>,
  },
  {
    path: "signup",
    element: <RequireNoAuth><Signup /></RequireNoAuth>,
  },
]);

export default function App() {
  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  )
}
