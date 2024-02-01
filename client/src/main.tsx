import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.tsx";
import { BookmarkProvider } from "./contexts/bookmarkContext.tsx";
import { AuthProvider } from "./contexts/userAuthContext.tsx";
import "./styles/index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AuthProvider>
      <BookmarkProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </BookmarkProvider>
    </AuthProvider>
  </React.StrictMode>
);
