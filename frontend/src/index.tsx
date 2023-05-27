import React from "react";
import "./index.css";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ConfigProvider } from "antd";
import { ReactComponent as IconSprite } from "assets/icon-sprite.svg";
import { Fonts } from "styles/fonts";
import { GlobalStyle } from "styles/GlobalStyle";
import { Provider } from "react-redux";
import { ThemeController } from "./ThemeController";
import { App } from "./App";
import { reportWebVitals } from "./services/reportWebVitals";
import { store } from "./store/store";

const container = document.getElementById("root");
const root = createRoot(container!);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <ConfigProvider
          theme={{
            hashed: false,
            token: {
              fontFamily: "Inter",
            },
          }}
        >
          <ThemeController>
            <Fonts />
            <IconSprite />
            <GlobalStyle />
            <App />
          </ThemeController>
        </ConfigProvider>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
