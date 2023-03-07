import React from "react";
import ReactDom  from "react-dom/client";

const heading1 = React.createElement(
    "h2",
    {
        id: "React",
    },
    "Inception Chapter-React & React-DOM"
);


const heading2 = React.createElement(
    "h3",
    {
        id:"React-DOM",
    },
    "Inception Chapter-React & React-DOM"
);

const container = React.createElement(
    "div",
    {
        id: "container",
    },
    [heading1, heading2]  //using array to passing mutiple child in react
);

const root1 = ReactDom.createRoot(document.getElementById("root1"));

root1.render(container);