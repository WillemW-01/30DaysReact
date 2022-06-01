// Exercise 2 - Refreshing JS
const countries = [
  "Albania",
  "Bolivia",
  "Canada",
  "Denmark",
  "Ethiopia",
  "Finland",
  "Germany",
  "Hungary",
  "Ireland",
  "Japan",
  "Kenya",
];

const webTechs = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Redux",
  "Node",
  "MongoDB",
];

let text =
  "I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.";
const _2 = text.split(" ").length;
console.log(_2);
const _3 = ["Milk", "Coffee", "Tea", "Honey"];
_3.includes("Meat") ? void 0 : _3.unshift("Meat");
_3.includes("Sugar") ? void 0 : _3.push("Sugar");
let isAllergicHoney = false;
isAllergicHoney ? _3.splice(_3.indexOf("Honey")) : void 0;
let index = _3.indexOf("Tea");
_3[index] = "Green Tea";
console.log(_3);
countries.includes("Ethopia") ? (_4 = "ETHIOPIA") : countries.push("Ethiopia");
const frontend = ["HTML", "CSS", "JS", "React", "Redux"];
const backend = ["Node", "Express", "MongoDB"];
const _6 = frontend.concat(backend);
console.log(_6);

let len = countries.length;
let mid = ~~(len / 2);
const _3_3 = [countries.slice(0, mid), countries.slice(mid, len)];
console.log(_3_3);
