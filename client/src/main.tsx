import React from "react"
import ReactDOM from "react-dom/client"

import { BrowserRouter } from "react-router-dom"
import { UIContextProvider } from "./context/UIContext.tsx"

import App from "./App.tsx"
import "./index.css"
import "react-toastify/dist/ReactToastify.css"

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <UIContextProvider>
        <App />
      </UIContextProvider>
    </BrowserRouter>
  </React.StrictMode>
)
