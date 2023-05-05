import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import {GalleryProvider} from "./contexts/cards/cards.context.jsx";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GalleryProvider>
      <App />
    </GalleryProvider>
  </React.StrictMode>
);
