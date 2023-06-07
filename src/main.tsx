import React from "react"
import { ApolloProvider } from "@apollo/client"
import ReactDOM from "react-dom/client"
import i18n from "i18next"
import Backend from "i18next-http-backend"
import { initReactI18next } from "react-i18next"
import * as dayjs from "dayjs"
import "dayjs/locale/fr" // import locale
import "dayjs/locale/en" // import locale
import "dayjs/locale/ru" // import locale

import { TabContextProvider } from "./contexts/TabContext.tsx"
import client from "./apollo.ts"
import App from "./App.tsx"
import "./index.css"

import "@fontsource/lato"
import "@fontsource/lato/700.css"
import "@fontsource/rubik"
import "@fontsource/rubik/600.css"
import "@fontsource/jost"
import "@fontsource/jost/600.css"
import "@fontsource/jost/700.css"
import "@fontsource/material-icons"

dayjs.locale("fr")

i18n
  .use(Backend)
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    lng: "fr", // if you're using a language detector, do not define the lng option
    fallbackLng: ["fr", "en", "ru"],

    interpolation: {
      escapeValue: false, // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
    },

    backend: {
      loadPath: "https://bo.bhuumi.land/api/i18n/{{lng}}",

      crossDomain: true,
    },
  })

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <TabContextProvider>
        <App />
      </TabContextProvider>
    </ApolloProvider>
  </React.StrictMode>
)
