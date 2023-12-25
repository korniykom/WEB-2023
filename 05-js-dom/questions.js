const easyQuestions = [
  {
    question: "Як оголосити змінну в JavaScript?",
    options: ["variable myVar;", "var myVar;", "let myVar;", "const myVar;"],
    correctAnswer: "let myVar;",
  },
  {
    question: "Які типи даних в JavaScript є примітивними?",
    options: [
      "object, array",
      "string, number",
      "boolean, null",
      "function, undefined",
    ],
    correctAnswer: "boolean, null",
  },
  {
    question: "Як визначити довжину рядка (string) в JavaScript?",
    options: [
      "lengthOf(myString);",
      "myString.size;",
      "myString.length;",
      "size(myString);",
    ],
    correctAnswer: "myString.length;",
  },
  {
    question: "Що виведе на консоль typeof undefined?",
    options: ["null", "undefined", "object", "string"],
    correctAnswer: "undefined",
  },
  {
    question: 'Як перевірити, чи змінна має тип "number"?',
    options: [
      "isNumber(myVar);",
      "myVar.isNumber();",
      'typeof myVar === "number";',
      'myVar.type === "number";',
    ],
    correctAnswer: 'typeof myVar === "number";',
  },
  {
    question: "Як зробити переривання виконання функції в JavaScript?",
    options: ["break;", "return;", "pause;", "stop;"],
    correctAnswer: "return;",
  },
  {
    question: "Як передати аргументи у функцію?",
    options: [
      "passArguments(myFunction, arg1, arg2);",
      "myFunction.arguments(arg1, arg2);",
      "myFunction(arg1, arg2);",
      "arguments(myFunction, arg1, arg2);",
    ],
    correctAnswer: "myFunction(arg1, arg2);",
  },
  {
    question: "Як оголосити константу в JavaScript ES6+?",
    options: [
      "const myConst;",
      "let myConst;",
      "constant myConst;",
      "var myConst;",
    ],
    correctAnswer: "const myConst;",
  },
  {
    question: "Яка відмінність між '==' та '===' в JavaScript?",
    options: [
      '"===" порівнює значення і типи, "==" - тільки значення.',
      '"==" порівнює значення і типи, "===" - тільки значення.',
      "Немає різниці.",
      '"===" використовується для присвоєння, "==" - для порівняння.',
    ],
    correctAnswer: '"===" порівнює значення і типи, "==" - тільки значення.',
  },
  {
    question: "Як створити копію об'єкта в JavaScript?",
    options: [
      "newObject = Object.copy(myObject);",
      "newObject = Object.clone(myObject);",
      "newObject = Object.assign({}, myObject);",
      "newObject = myObject.copy();",
    ],
    correctAnswer: "newObject = Object.assign({}, myObject);",
  },
];

const mediumQuestions = [
  {
    question:
      "Які із наступних ключових слів використовуються для оголошення змінних в JavaScript? (Оберіть всі можливі правильні відповіді)",
    options: [
      { text: "var", correct: true },
      { text: "let", correct: true },
      { text: "const", correct: false },
      { text: "variable", correct: false },
    ],
  },

  {
    question:
      "Які типи даних є примітивними в JavaScript? (Оберіть всі можливі правильні відповіді)",
    options: [
      { text: "object", correct: false },
      { text: "string", correct: true },
      { text: "boolean", correct: true },
      { text: "array", correct: false },
    ],
  },
  {
    question:
      "Які з наступних операторів використовуються для порівняння значень та типів в JavaScript? (Оберіть всі можливі правильні відповіді)",
    options: [
      { text: "==", correct: false },
      { text: "===", correct: true },
      { text: "!=", correct: false },
      { text: "!==", correct: true },
    ],
  },
  {
    question:
      "Як оголосити та ініціалізувати масив в JavaScript? (Оберіть всі можливі правильні відповіді)",
    options: [
      { text: "var myArray = [];", correct: true },
      { text: "var myArray = new Array();", correct: false },
      { text: "var myArray = {};", correct: false },
      { text: "var myArray = [1, 2, 3];", correct: true },
    ],
  },
  {
    question:
      "Які ключові слова використовуються для оголошення функцій в JavaScript? (Оберіть всі можливі правильні відповіді)",
    options: [
      { text: "func", correct: false },
      { text: "function", correct: true },
      { text: "def", correct: false },
      { text: "fn", correct: false },
    ],
  },
  {
    question:
      "Як перевірити, чи змінна має значення 'undefined' в JavaScript? (Оберіть всі можливі правильні відповіді)",
    options: [
      { text: "if (myVar === undefined)", correct: true },
      { text: "if (myVar == undefined)", correct: false },
      { text: "if (typeof myVar === 'undefined')", correct: true },
      { text: "if (myVar == null)", correct: false },
    ],
  },
  {
    question:
      "Як створити об'єкт в JavaScript? (Оберіть всі можливі правильні відповіді)",
    options: [
      { text: "var myObj = {};", correct: true },
      { text: "var myObj = new Object();", correct: true },
      { text: "var myObj = {};", correct: false },
      { text: "var myObj = { key: 'value' };", correct: true },
    ],
  },
  {
    question:
      "Як викликати функцію 'myFunction' з аргументами 'arg1' та 'arg2' в JavaScript? (Оберіть всі можливі правильні відповіді)",
    options: [
      { text: "myFunction(arg1, arg2);", correct: true },
      { text: "call(myFunction, arg1, arg2);", correct: false },
      { text: "invoke(myFunction, arg1, arg2);", correct: false },
      { text: "run(myFunction, arg1, arg2);", correct: false },
    ],
  },
  {
    question:
      "Як визначити, чи є об'єкт 'myObj' властивістю (property) об'єкта 'parentObj' в JavaScript? (Оберіть всі можливі правильні відповіді)",
    options: [
      { text: "if (parentObj.hasOwnProperty(myObj))", correct: true },
      { text: "if (myObj in parentObj)", correct: true },
      { text: "if (parentObj.propertyIsEnumerable(myObj))", correct: false },
      { text: "if (myObj.existsIn(parentObj))", correct: false },
    ],
  },
  {
    question:
      "Як змінити значення змінної 'myVar' на нове значення 'newValue' в JavaScript? (Оберіть всі можливі правильні відповіді)",
    options: [
      { text: "myVar = 'newValue';", correct: true },
      { text: "set myVar = 'newValue';", correct: false },
      { text: "var myVar = 'newValue';", correct: true },
      { text: "assign(myVar, 'newValue');", correct: false },
    ],
  },
];
const hardQuestions = [
  {
    question: "Як оголосити змінну в JavaScript?",
    options: [
      { text: "variable myVar;", correct: false },
      { text: "var myVar;", correct: false },
      { text: "let myVar;", correct: true },
      { text: "const myVar;", correct: false },
    ],
    correctAnswer: "let myVar;",
  },
  {
    question: "Як визначити довжину рядка (string) в JavaScript?",
    options: [
      { text: "lengthOf(myString);", correct: false },
      { text: "myString.size;", correct: false },
      { text: "myString.length;", correct: true },
      { text: "size(myString);", correct: false },
    ],
    correctAnswer: "myString.length;",
  },
  {
    question: "Що виведе на консоль typeof undefined?",
    options: [
      { text: "null", correct: false },
      {
        text: "undefined",
        correct: true,
      },
      { text: "object", correct: false },
      { text: "string", correct: false },
    ],
    correctAnswer: "undefined",
  },
];
