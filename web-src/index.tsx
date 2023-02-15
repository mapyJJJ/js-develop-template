import * as React from "react";
import { createRoot } from "react-dom/client";
import { Hello } from "./components/Hello";

const container = document.getElementById('app') as HTMLElement;
const root = createRoot(container)

root.render(
    <Hello compiler="TypeScript" framework="React" />
);