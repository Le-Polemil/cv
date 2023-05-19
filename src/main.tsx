import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.tsx"
import "./index.css"
import { TabContextProvider } from "./contexts/TabContext.tsx"

import "@fontsource/lato"
import "@fontsource/lato/700.css"
import "@fontsource/jost"
import "@fontsource/jost/600.css"
import "@fontsource/jost/700.css"
import "@fontsource/material-icons"

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <TabContextProvider>
      <App />
    </TabContextProvider>
  </React.StrictMode>
)
