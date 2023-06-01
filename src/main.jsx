import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { ThemeProvider } from "@material-tailwind/react";
import { BrowserRouter } from "react-router-dom";
import QuizProvider from "./provider/QuizProvider.jsx";
import FormProvider from "./provider/FormProvider.jsx";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider>
        <QuizProvider>
          <FormProvider>
            <App />
          </FormProvider>
        </QuizProvider>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
