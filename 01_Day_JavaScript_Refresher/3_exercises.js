// Level 1
const _1dog = {};
console.log(_1dog);
_1dog.name = "Mila";
_1dog.legs = 4;
_1dog.color = "Black and white";
_1dog.age = 2;
_1dog.bark = function () {
  return "woof woof";
};
const _4 = [_1dog.name, _1dog.legs, _1dog.color, _1dog.age, _1dog.bark()];
_1dog.breed = "Border Collie";
_1dog.getDogInfo = function () {
  return [this.name, this.legs, this.color, this.age, this.bark(), this.breed];
};
console.log(_1dog.getDogInfo());

//Level 2
const users = {
  Alex: {
    email: "alex@alex.com",
    skills: ["HTML", "CSS", "JavaScript"],
    age: 20,
    isLoggedIn: false,
    points: 30,
  },
  Asab: {
    email: "asab@asab.com",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "Redux",
      "MongoDB",
      "Express",
      "React",
      "Node",
    ],
    age: 25,
    isLoggedIn: false,
    points: 50,
  },
  Brook: {
    email: "daniel@daniel.com",
    skills: ["HTML", "CSS", "JavaScript", "React", "Redux"],
    age: 30,
    isLoggedIn: true,
    points: 50,
  },
  Daniel: {
    email: "daniel@alex.com",
    skills: ["HTML", "CSS", "JavaScript", "Python"],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
  John: {
    email: "john@john.com",
    skills: ["HTML", "CSS", "JavaScript", "React", "Redux", "Node.js"],
    age: 20,
    isLoggedIn: true,
    points: 50,
  },
  Thomas: {
    email: "thomas@thomas.com",
    skills: ["HTML", "CSS", "JavaScript", "React"],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
  Paul: {
    email: "paul@paul.com",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "MongoDB",
      "Express",
      "React",
      "Node",
    ],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
};

let maxLength = -1;
let _1 = null;
const entries = Object.entries(users);
console.log(entries);
entries.forEach((user) => {
  if (user[1]["skills"].length > maxLength) {
    maxLength = user[1]["skills"].length;
    _1 = user;
  }
});
console.log(_1);

const mern = ["MongoDB", "Express", "React", "Node"].sort();
const _3 = [];
entries.forEach((user) => {
  const skills = user[1]["skills"];
  isMern =
    skills.includes(mern[0]) &&
    skills.includes(mern[1]) &&
    skills.includes(mern[2]) &&
    skills.includes(mern[3]);
  isMern ? _3.push(user) : void 0;
});
console.log(_3);

// Level 3
const personAccount = {
  firstName: "",
  lastName: "",
  incomes: {
    income1: {
      decription: "",
      amount: 10,
    },
  },
  expenses: {
    expense1: {
      decription: "",
      amount: -10,
    },
  },
  accountInfo: () => {
    return {
      firstName: this.firstName,
      lastName: this.lastName,
      totalIncome: this.totalIncome(),
      totalExpenses: this.totalExpenses(),
    };
  },
  totalIncome: () => {
    const entries = Object.entries(this.incomes);
    let sum = 0;
    entries.forEach((income) => {
      sum += income[1].amount;
    });
    return sum;
  },
  totalExpenses: () => {
    const entries = Object.entries(this.expenses);
    let sum = 0;
    entries.forEach((expense) => {
      sum += expense[1].amount;
    });
    return sum;
  },
  addIncome: (income) => {
    newIncomes = Object.assign(income, this.incomes);
    console.log("New income: ", newIncomes);
  },
  addExpense: (expense) => {
    this.expenses += expense;
  },
  accountBalance: () => {
    return this.totalIncome() - this.totalExpenses();
  },
};

console.log(personAccount.incomes);
personAccount.addIncome({
  income2: { description: "Nothing really", amount: 15 },
});
console.log(personAccount.incomes);
console.log(personAccount.totalIncome() - personAccount.totalExpenses());
console.log(personAccount.accountBalance());
