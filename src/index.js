import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import { NotesContextProvider } from "./context/notes-context";
import { FilterContextProvider } from "./context/filter-context";
import { makeServer } from "./server";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <NotesContextProvider>
        <FilterContextProvider>
          <App />
        </FilterContextProvider>
      </NotesContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
