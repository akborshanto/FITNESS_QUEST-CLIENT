import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./router/Routers.jsx";
import { ChakraProvider } from "@chakra-ui/react";
import UseAuthProvider from "./provider/useAuthProvider.jsx";
import { Toaster } from "react-hot-toast";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
  <QueryClientProvider client={queryClient}>
  <ChakraProvider>
      <UseAuthProvider>
      <Toaster />
        <RouterProvider router={router}></RouterProvider>
      </UseAuthProvider>
    </ChakraProvider>
  </QueryClientProvider>
    
  </React.StrictMode>
);
