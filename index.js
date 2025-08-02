"use strict";

// ------------------ DOM: Easy Question ------------------- \\
const todayExercise = document.querySelector("[data-exercise]");
const exerciseBtn = document.querySelector("[data-exercise-btn]");
const hiddenExercise = document.querySelector("#exercise-output");

// ------------------ Function: Easy Question ------------------- \\

const displayExercise = function () {
  // get input from user
  const workout1 = todayExercise.value.trim();
  //   closure function, updates text
  function displayDay() {
    hiddenExercise.innerText = `Today's exercise is: ${workout1}`;
  }
  displayDay();
};

// ------------------ Handler: Easy Question ------------------- \\

exerciseBtn.addEventListener("click", displayExercise);

// ------------------ Alternative: Easy Question ------------------- \\
console.log(
  "As an alternative, I've also included these hard-coded functions:"
);

function getTodaysExercise() {
  let rep1 = "running";
  function displayDay() {
    console.log(`Easy Challenge: Today's exercise: ${rep1}`);
  }
  displayDay();
}

getTodaysExercise();

// ------------------ DOM: Medium Question ------------------- \\

const numSlices = document.querySelector("[data-pizza-slices]");
const numOfPeople = document.querySelector("[data-people-count]");
const calcPizza = document.querySelector("[data-pizza-btn]");
const hiddenPizza = document.querySelector("#pizza-output");

// ------------------ Function: Medium Question ------------------- \\

const pizzaTotal = function () {
  let totalPizza =
    Number(numSlices.value.trim()) / Number(numOfPeople.value.trim());
  let strPizza = totalPizza.toString();
  hiddenPizza.innerText = ` Everyone gets ${strPizza} slices of pizza!`;
  console.log(` Everyone gets ${strPizza} slices of pizza!`);
};

// ------------------ Alternative: Medium Question ------------------- \\

function pizzaCalc(sliceAmount, peopleAmount) {
  const dividedPizza = sliceAmount / peopleAmount;

  console.log(
    `Medium Challenge: With ${sliceAmount} slices of pizza and ${peopleAmount} people, Each person gets ${dividedPizza.toFixed(
      2
    )} slices of Pizza`
  );
}

pizzaCalc(10, 5);

// ------------------ Handler: Medium Question ------------------- \\

calcPizza.addEventListener("click", pizzaTotal);

// ------------------ DOM: Hard Question ------------------- \\

const userName = document.querySelector("[data-pii-btn]");
const userSSN = document.querySelector("[data-pii-ssn]");
const hiddenPII = document.querySelector("#pii-output");

// ------------------ Function: Hard Question ------------------- \\
// I'll be honest, I couldnt make this fully work as one function in the DOM so I did have
// to rebuild

const accessPIIName = function () {
  // Private variable for SSN
  let getNameClick = true;
  const SSN = "022-22-1222";

  // PII object with only necessary properties
  const PII = {
    firstName: "John",
    lastName: "Smith",
    SSN: undefined,
    getName: function () {
      hiddenPII.innerText = `${PII.firstName} ${PII.lastName}`;
    },
    getSSN: function () {
      hiddenPII.innerText = `${PII.SSN}`;
    },
  };

  function getName() {
    hiddenPII.innerText = `${PII.firstName} ${PII.lastName}`;
  }
  getName();
};

const accessSSN = function () {
  const SSN = "022-22-1222";

  // PII object with only necessary properties
  const PII = {
    firstName: "John",
    lastName: "Smith",
    SSN: undefined,
    getName: function () {
      hiddenPII.innerText = `${PII.firstName} ${PII.lastName}`;
    },
    getSSN: function () {
      hiddenPII.innerText = `${PII.SSN}`;
    },
  };
  function getSSN() {
    hiddenPII.innerText = `${PII.SSN}`;
  }
  getSSN();
};

// ------------------ Handler: Hard Question ------------------- \\

userName.addEventListener("click", accessPIIName);
userSSN.addEventListener("click", accessSSN);

// ------------------ Alternative: Hard Question ------------------- \\

function createPII() {
  // Private variable for SSN
  const SSN = "022-22-1222";

  // PII object with only necessary properties
  const PII = {
    firstName: "John",
    lastName: "Smith",
    SSN: undefined,
  };

  // Return an object with a method to access the name
  return {
    getName: function () {
      return `${PII.firstName} ${PII.lastName}`;
    },

    getSSN: function () {
      return `${PII.SSN}`;
    },
  };
}

const userPII = createPII();

console.log("Hard Challenge: PII, user full name is:", userPII.getName());
console.log("Hard Challenge: PII, user SSN is:", userPII.getSSN());

// VERY HARD:

class Person {
  constructor(name, age, job) {
    this.name = name;
    this.job = job;
    this.age = age;
  }

  exercise() {
    if (this.age > 30) {
      return "This person hates jogging, its bad for your knees";
    } else {
      return "This person is an active runner, they LOVE running";
    }
  }

  fetchJob() {
    return `${this.name} is a ${this.age} year old ${this.job}`;
  }
}
// end of class 1

//  using Extends Keyword for inheritence of Person class

class Programmer extends Person {
  constructor(name, age, job, languages) {
    super(name, age, job);
    this.languages = languages;
    this.isBusy = true;
  }

  test1() {
    return this.fetchJob();
  }

  completeTask() {
    return (this.isBusy = false);
  }

  acceptNewTask() {
    return (this.isBusy = true);
  }

  offerNewTask() {
    if (this.isBusy) {
      return `Sorry, ${this.name} is busy right now, they can't accept a new task`;
    } else {
      return `Of course, ${this.name} isn't doing anything, they'd love to help`;
    }
  }

  learnLanguage(newLang) {
    for (let i = 0; i < this.languages.length; i++) {
      if (this.languages.includes(newLang)) {
        continue;
      }

      this.languages.push(newLang);
    }
    return this.languages;
  }

  listLanguage() {
    return this.languages;
  }
}
// End of second class

const eddie = new Person("eddie", 34, "programmer");

const eddie2 = new Programmer("Mr Jackson", 34, "back-end", [
  "python",
  "html",
  "C++",
]);

console.log(eddie.fetchJob());
console.log(eddie.exercise());
eddie2.completeTask();
console.log(eddie2.offerNewTask());
console.log(eddie2.listLanguage());
