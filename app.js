

const data = document.createElement("h1");

console.log(data);

data.innerHTML = "Hi from javascript";

console.log(data);

const root = document.getElementById("root");

console.log(root);

root.appendChild(data);