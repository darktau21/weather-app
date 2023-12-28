import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./App";

import "bootstrap/dist/css/bootstrap.min.css";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

document.body.classList.add("bg-secondary")

root.render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
);
