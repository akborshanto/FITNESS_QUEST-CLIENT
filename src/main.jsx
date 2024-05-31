import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./router/Routers.jsx";
import { ChakraProvider } from "@chakra-ui/react";
import UseAuthProvider from "./provider/useAuthProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider>
      <UseAuthProvider>
        <RouterProvider router={router}></RouterProvider>
      </UseAuthProvider>
    </ChakraProvider>
  </React.StrictMode>
);
