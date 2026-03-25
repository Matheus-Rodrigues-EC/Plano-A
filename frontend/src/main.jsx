import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";

import { ConfigProvider } from "antd";
import ptBR from "antd/es/locale/pt_BR";
import moment from "moment";
import "moment/locale/pt-br";

moment.locale("pt-br");

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ConfigProvider locale={ptBR}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ConfigProvider>
  </StrictMode>,
);
