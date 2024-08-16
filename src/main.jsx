import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { Provider } from "react-redux";
import "./index.css";
import { DarkModeProvider } from "./contexts/DarkModeContext.jsx";
import { HashRouter as Router } from 'react-router-dom';
import { ToastContainer } from "react-toastify";
import store from "./store.js";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
    <Router>
      <DarkModeProvider>
        <App />
        <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} />
      </DarkModeProvider>
      </Router>
    </Provider>
  </StrictMode>
);
