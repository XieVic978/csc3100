import React from "react";
import ReactDOMClient from "react-dom/client";
import M from "./MyApp"
import "./main.css";



//Create the container
const container = document.getElementById("root");

//Create Root
const root = ReactDOMClient.createRoot(container);

//Initial render: Render an element to the Root
root.render(<M />)

