import React from "react";
import { BrowserRouter } from "react-router-dom";
import "../src/index.css";

export default function Wrapper(children: React.ReactNode): React.ReactNode {
  return <BrowserRouter>{children}</BrowserRouter>;
}
