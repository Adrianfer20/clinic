import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider} from "./context/AuthContext.jsx";


import "./main.css";

import { App } from "./App.jsx";

const $body = document.querySelector("body");
$body.className = "grid min-h-screen bg-slate-900 text-slate-100 m-0";

const $root = document.getElementById("root");
const root = ReactDOM.createRoot($root);

root.render(
  <BrowserRouter>
  <AuthProvider>
    <App />
  </AuthProvider>
  </BrowserRouter>
);

