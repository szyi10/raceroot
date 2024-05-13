import React from "react"
import ReactDOM from "react-dom/client"

import { BrowserRouter } from "react-router-dom"
import { HelmetProvider } from "react-helmet-async"
import { UserContextProvider } from "./context/user-context.jsx"
import { UIContextProvider } from "./context/ui-context.jsx"

import App from "./App.jsx"
import "./index.css"

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <HelmetProvider>
        <UIContextProvider>
          <UserContextProvider>
            <App />
          </UserContextProvider>
        </UIContextProvider>
      </HelmetProvider>
    </BrowserRouter>
  </React.StrictMode>
)
