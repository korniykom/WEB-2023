let userName = "";
let userGroup = "";
let difficulty = "medium";
let score = 0;
let currentQuestionIndex = 0;
const questionContainer = document.getElementById("question-conteiner");
const checkAnswerButton = document.getElementById("check-answer");
checkAnswerButton.addEventListener("click", () => {
  checkAnswer();
});
const userNameInput = document.getElementById("userInputName");
userNameInput.addEventListener("input", function () {
  userName = userNameInput.value;
});

const userInputGroup = document.getElementById("userInputGroup");
userInputGroup.addEventListener("input", () => {
  let inputValue = userInputGroup.value;
  userGroup = inputValue;
  console.log(userGroup);
});

const continueButton = document.getElementById("continue");
continueButton.addEventListener("click", (event) => {
  event.preventDefault();
  document.getElementById("reg").classList.add("hidden");
  document.getElementById("difficulty-form").classList.remove("hidden");
});
const easyDifficultButton = document.getElementById("easy");
const mediumDifficultButton = document.getElementById("medium");
const hardDifficultButton = document.getElementById("hard");
easyDifficultButton.addEventListener("click", (event) => {
  event.preventDefault();
  difficulty = "easy";
  console.log(difficulty);
  document.getElementById("difficulty-form").classList.add("hidden");
  displayQuestionQueue();
});
mediumDifficultButton.addEventListener("click", (event) => {
  event.preventDefault();
  difficulty = "medium";
  console.log(difficulty);
  document.getElementById("difficulty-form").classList.add("hidden");
  displayQuestionQueue();
});
hardDifficultButton.addEventListener("click", (event) => {
  event.preventDefault();
  difficulty = "hard";
  console.log(difficulty);
  document.getElementById("difficulty-form").classList.add("hidden");
  displayQuestionQueue();
});

function displayQuestionQueue() {
  if (difficulty === "medium") {
    questionContainer.innerHTML = "";

    const q = mediumQuestions[currentQuestionIndex];
    console.log(q);
    questionContainer.classList.remove("hidden");
    checkAnswerButton.classList.remove("hidden");
    checkAnswerButton.classList.add("center2");

    const questionDiv = document.createElement("div");
    questionDiv.classList.add("center");
    questionDiv.innerHTML = `<p>${currentQuestionIndex + 1}. ${q.question}</p>`;

    q.options.forEach((option, optionIndex) => {
      const optionInput = document.createElement("input");
      optionInput.type = "checkbox";
      optionInput.name = `question_${currentQuestionIndex}`;
      optionInput.value = option.text;

      const optionLabel = document.createElement("label");
      optionLabel.innerHTML = option.text;

      questionDiv.appendChild(optionInput);
      questionDiv.appendChild(optionLabel);
    });

    questionContainer.appendChild(questionDiv);
  }
  if (difficulty === "hard") {
    questionContainer.innerHTML = "";

    const q = hardQuestions[currentQuestionIndex];
    console.log(q);
    questionContainer.classList.remove("hidden");
    checkAnswerButton.classList.remove("hidden");
    checkAnswerButton.classList.add("center2");

    const questionDiv = document.createElement("div");
    questionDiv.classList.add("center");
    questionDiv.innerHTML = `<p>${currentQuestionIndex + 1}. ${q.question}</p>`;

    const dropdown = document.createElement("select");
    dropdown.id = "options-dropdown";

    q.options.forEach((option, optionIndex) => {
      const optionItem = document.createElement("option");
      optionItem.value = option.text;
      optionItem.text = option.text;
      dropdown.appendChild(optionItem);
    });

    questionDiv.appendChild(dropdown);
    questionContainer.appendChild(questionDiv);
  }

  if (difficulty === "easy") {
    questionContainer.innerHTML = "";
    const q = easyQuestions[currentQuestionIndex];
    questionContainer.classList.remove("hidden");
    checkAnswerButton.classList.remove("hidden");
    checkAnswerButton.classList.add("center2");

    const questionDiv = document.createElement("div");
    questionDiv.classList.add("center");
    questionDiv.innerHTML = `<p>${currentQuestionIndex + 1}. ${q.question}</p>`;

    q.options.forEach((option, optionIndex) => {
      const optionInput = document.createElement("input");
      optionInput.type = "radio";
      optionInput.name = `question_${currentQuestionIndex}`;
      optionInput.value = option;

      const optionLabel = document.createElement("label");
      optionLabel.innerHTML = option;

      questionDiv.appendChild(optionInput);
      questionDiv.appendChild(optionLabel);
    });

    questionContainer.appendChild(questionDiv);
  }
}

function checkAnswer() {
  if (difficulty === "easy") {
    const selectedOption = document.querySelector(
      `input[name="question_${currentQuestionIndex}"]:checked`
    );

    if (selectedOption) {
      const userAnswer = selectedOption.value;
      const correctAnswer = easyQuestions[currentQuestionIndex].correctAnswer;

      if (userAnswer === correctAnswer) {
        ++score;
        console.log("Правильно!");
        console.log(score);
      } else {
        console.log("Неправильно!");
        console.log(score);
      }

      currentQuestionIndex++;
      if (currentQuestionIndex < easyQuestions.length) {
        displayQuestionQueue();
      } else {
        console.log("Тест завершено!");
        questionContainer.classList.add("hidden");
        checkAnswerButton.classList.add("hidden");

        const resultContainer = document.createElement("div");
        resultContainer.classList.add("center");
        resultContainer.innerText = `Вітаю ${userName} з групи ${userGroup} ви набрали ${score} бал`;
        userName = "";
        userGroup = "";

        document.body.appendChild(resultContainer);
      }
    }
  }
  if (difficulty === "medium") {
    const selectedOptions = document.querySelectorAll(
      `input[name="question_${currentQuestionIndex}"]:checked`
    );

    if (selectedOptions.length > 0) {
      const userAnswers = Array.from(selectedOptions).map(
        (option) => option.value
      );
      const correctAnswers = mediumQuestions[currentQuestionIndex].options
        .filter((option) => option.correct)
        .map((option) => option.text);

      const isCorrect =
        userAnswers.length === correctAnswers.length &&
        userAnswers.every((answer) => correctAnswers.includes(answer));

      if (isCorrect) {
        ++score;
        console.log("Правильно!");
        console.log(score);
      } else {
        console.log("Неправильно!");
        console.log(score);
      }

      currentQuestionIndex++;
      if (currentQuestionIndex < mediumQuestions.length) {
        displayQuestionQueue();
      } else {
        console.log("Тест завершено!");
        questionContainer.classList.add("hidden");
        checkAnswerButton.classList.add("hidden");

        const resultContainer = document.createElement("div");
        resultContainer.classList.add("center");
        resultContainer.innerText = `Вітаю ${userName} з групи ${userGroup} ви набрали ${score} бал`;
        userName = "";
        userGroup = "";
        document.body.appendChild(resultContainer);
      }
    }
  }
  if (difficulty === "hard") {
    const selectedOption = document.getElementById("options-dropdown");

    if (selectedOption) {
      const userAnswer = selectedOption.value;
      const correctAnswer = hardQuestions[currentQuestionIndex].correctAnswer;

      if (userAnswer === correctAnswer) {
        ++score;
        console.log("Правильно!");
        console.log(score);
      } else {
        console.log("Неправильно!");
        console.log(score);
      }

      currentQuestionIndex++;
      if (currentQuestionIndex < hardQuestions.length) {
        displayQuestionQueue();
      } else {
        console.log("Тест завершено!");
        questionContainer.classList.add("hidden");
        checkAnswerButton.classList.add("hidden");

        const resultContainer = document.createElement("div");
        resultContainer.classList.add("center");
        resultContainer.innerText = `Вітаю ${userName} з групи ${userGroup} ви набрали ${score} бал`;
        userName = "";
        userGroup = "";
        document.body.appendChild(resultContainer);
      }
    }
  }
}
