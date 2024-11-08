const questionList = document.querySelector(".question-list");
const answerList = document.querySelector(".answers");

const correctAnswer = "DIGITAL DATABASE";

// Event listener for the question list to check the answer
questionList?.addEventListener("click", (event) => {
  const targetElement = event.target.closest(".list-item");

  // Retrieve the user's answer from localStorage
  const userAnswer = localStorage.getItem("answer");

  if (userAnswer === correctAnswer) {
    // If correct, add success class
    targetElement.classList.add("list-item_success");
  } else {
    // If incorrect, change the background color to red
    targetElement.style.backgroundColor = "red";
  }

  // Optionally, clear the stored answer after checking
  localStorage.removeItem("answer");
});

// Event listener for the answer list to store the user's answer
answerList?.addEventListener("click", (event) => {
  // Check if the clicked element is a <span> and find the correct target
  const targetElement =
    event.target.localName === "span"
      ? event.target.closest(".list-item__title")
      : event.target.querySelector(".list-item__title");

  // Store the answer text in localStorage for later comparison
  const answer = targetElement && targetElement.textContent.trim();

  // Save answer in localStorage, setting "incorrect" if no match
  localStorage.setItem(
    "answer",
    answer === correctAnswer ? correctAnswer : "incorrect"
  );
});
