import React from "react";
import ReactDOMClient from "react-dom/client";
import "./main.css"

function MyApp(){
  return (
    <div>Hello, React!</div>
  );
}

//Create the container
const container = document.getElementByID("root");

//Create Root
const root = ReactDOMClient.createRoot(container);

//Initial render: Render an element to the Root
root.render(<MyApp />)