// Step 1: Function Declaration
function checkAnswer() {
    // Step 2: Identify the Correct Answer
    const correctAnswer = "4";

    // Step 3: Retrieve the User’s Answer
    const selectedOption = document.querySelector('input[name="quiz"]:checked');
    
    if (selectedOption) {
        const userAnswer = selectedOption.value;

        // Step 4: Compare the User’s Answer with the Correct Answer
        const feedbackElement = document.getElementById("feedback");
        if (userAnswer === correctAnswer) {
            feedbackElement.textContent = "Correct! Well done.";
        } else {
            feedbackElement.textContent = "That's incorrect. Try again!";
        }
    } else {
        // Case: No answer selected
        document.getElementById("feedback").textContent = "Please select an answer before submitting.";
    }
}

// Step 5: Add Event Listener to the Submit Button
document.getElementById("submit-answer").addEventListener("click", checkAnswer);
