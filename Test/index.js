let div = document.querySelector(".div");
let made = document.createElement("div");
made.className = "a b";
made.className += "c";
div.append(made);
console.log(document.querySelector(".div .a "));