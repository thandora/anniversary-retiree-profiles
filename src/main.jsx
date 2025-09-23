import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import RetireeProfile from "./App";
import "../src/globals/styles.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RetireeProfile />
  </StrictMode>
);
