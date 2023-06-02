import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SignUp from "./container/SignUp";
import BookRide from "./container/BookRide";
import LoginForm from "./components/LoginForm";
import ValidatePassenger from "./components/Validation";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "SignUp",
    element: <SignUp />,
  },

  { path: "BookRide", element: <BookRide /> },

  {
    path: "LoginForm",
    element: <LoginForm />,
  },

  {
    path: "/verification-page",
    element: <ValidatePassenger />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
