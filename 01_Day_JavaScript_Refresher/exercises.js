// Exercise 1 - Refreshing JS
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

const _1 = [];
console.log(_1);
const _2 = ["A", "B", "C", "D", "E", "F", "G", "H"];
console.log(_2);
const _3 = _2.length;
console.log(_3);
const _4 = [_2[0], _2[~~((_3 - 1) / 2.0)], _2[_3 - 1]];
console.log(_4);
const _5 = [0, 0.13, "String", 10 ** 100];
console.log(_5);
const _6itCompanies = [
  "Facebook",
  "Google",
  "Microsoft",
  "Apple",
  "IBM",
  "Oracle",
  "Amazon",
];
console.log(_6itCompanies);
const _7 = _6itCompanies.length;
console.log(_7);
const _8 = [
  _6itCompanies[0],
  _6itCompanies[~~((_7 - 1) / 2.0)],
  _6itCompanies[_7 - 1],
];
console.log(_8);
const _11 = [];
for (country of _6itCompanies) {
  let new_country = country.toString();
  _11.push(new_country.toLowerCase());
}
console.log(_11);
_6itCompanies[_7 - 1] = " and Amazon";
const _12 = (_6itCompanies + " are big IT companies.").toString();
console.log(_12);
const _13 = _6itCompanies.includes("Facebook");
console.log(_13);
const _14 = [];
for (country of _6itCompanies) {
  if (country.split("o").length <= 1) {
    _14.push(country);
  }
}
console.log(_14);
const _15 = _6itCompanies.sort();
console.log(_15);
const _16 = _6itCompanies.reverse();
console.log(_16);
const _17 = _6itCompanies.slice(0, 3);
console.log(_17);
const _18 = _6itCompanies.slice(_7 - 3, _7);
console.log(_18);
let mid = ~~((_7 - 1) / 2.0);
const _19 = _6itCompanies.slice(mid, mid + 1);
console.log(_19);
const _20 = _6itCompanies.shift();
console.log(_20, _6itCompanies);
const _21 = _6itCompanies.splice(mid, 1);
console.log(_21);
const _23 = _6itCompanies.splice(0, _6itCompanies.length);
console.log(_23, _6itCompanies);
