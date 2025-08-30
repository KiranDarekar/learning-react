import React from "react";
import { createRoot } from "react-dom/client";
import Header from "./components/Header";
import RestroContainer from "./components/RestroContainer";


const AppLayout = () =>{
  return (
    <div className="app">
      <Header />
      <RestroContainer />
    </div>
  )
}

const root = createRoot(document.getElementById("root"));
root.render(<AppLayout />);

