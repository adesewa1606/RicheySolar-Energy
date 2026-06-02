import ReactDOM from "react-dom/client";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import emailjs from "@emailjs/browser";

import { BrowserRouter } from "react-router-dom";

import CartContextProvider from "./context/CartContextProvider";

emailjs.init("fiadrU409T3Vg-Y6B"); 


ReactDOM.createRoot(document.getElementById("root")).render(

  <BrowserRouter>

    <CartContextProvider>

      <App />

    </CartContextProvider>

  </BrowserRouter>

);