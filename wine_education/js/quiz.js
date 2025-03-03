const quizData = [
    { question: "1. What is the primary role of yeast in the fermentation process?",
      options: ["A) To convert tannins into alcohol", "B) To consume sugar and produce alcohol and carbon dioxide", "C) To increase acidity levels in wine", "D) To remove oxygen from the wine"], correct: "B" },
   
    { question: "2. Which of the following components contributes most to a wine’s perception of freshness?",
      options: ["A) Alcohol", "B) Tannins", "C) Acidity", "D) Residual sugar"], correct: "C" },
   
    { question: "3. If a red wine has extremely high tannins, how would it most likely feel on the palate?",
      options: ["A) Bitter and drying", "B) Soft and silky", "C) Sweet and smooth", "D) Oily and full-bodied"], correct: "A" },
   
    { question: "4. What does it mean if a wine is 'off-dry'?",
      options: ["A) It has no residual sugar and is fully dry", "B) It has a slight sweetness but is not considered a sweet wine", "C) It has been exposed to oxidation and lost its freshness", "D) It has undergone malolactic fermentation"], correct: "B" },
   
    { question: "5. Which wine fault is most likely to produce aromas of wet cardboard or damp basement?",
      options: ["A) Volatile acidity", "B) Oxidation", "C) Cork taint (TCA)", "D) Brettanomyces"], correct: "C" },
   
    { question: "6. A wine with high acidity and low alcohol is most likely to feel:",
      options: ["A) Heavy and rich", "B) Crisp and refreshing", "C) Bitter and astringent", "D) Sweet and full-bodied"], correct: "B" },
   
    { question: "7. Which statement about wine oxidation is correct?",
      options: ["A) It only occurs in red wines", "B) It enhances all wines and makes them more complex", "C) It can be desirable in certain wines, such as Sherry, but is a fault in most others", "D) It is caused by excessive exposure to sulfur dioxide"], correct: "C" },
   
    { question: "8. A white wine that appears deep gold in color is likely:",
      options: ["A) A youthful wine with high acidity", "B) A wine that has been aged or exposed to oxidation", "C) A wine with high residual sugar", "D) A wine that has undergone carbonic maceration"], correct: "B" },
   
    { question: "9. Which wine component contributes to a wine’s perception of body?",
      options: ["A) Acidity", "B) Alcohol", "C) Sugar", "D) Both B and C"], correct: "D" },
   
    { question: "10. A red wine with a short finish and one-dimensional fruit flavors would likely be considered:",
      options: ["A) High-quality", "B) Balanced and complex", "C) Low-quality or simple", "D) Age-worthy"], correct: "C" },
   
    { question: "11. What is the best way to detect volatile acidity in wine?",
      options: ["A) Observe its color and clarity", "B) Look for tiny bubbles in the glass", "C) Smell for aromas of vinegar or nail polish remover", "D) Check for an astringent drying sensation on the gums"], correct: "C" },
   
    { question: "12. Which of the following would most likely be considered a tertiary aroma in wine?",
      options: ["A) Fresh green apple", "B) Vanilla and toast", "C) Tobacco and dried fruit", "D) Lemon and floral notes"], correct: "C" },
   
    { question: "13. Which structural element of wine is responsible for the sensation of 'heat' on the palate?",
      options: ["A) Acidity", "B) Alcohol", "C) Tannins", "D) Residual sugar"], correct: "B" },
   
    { question: "14. A wine with low acidity is likely to taste:",
      options: ["A) Refreshing and crisp", "B) Flat and flabby", "C) Bitter and tannic", "D) Highly aromatic"], correct: "B" },
   
    { question: "15. Which of the following is NOT a factor in determining a wine’s age potential?",
      options: ["A) Acidity", "B) Tannins", "C) Sugar content", "D) Serving temperature"], correct: "D" },
     
      { question: "16. What does a long finish indicate in terms of wine quality?",
      options: ["A) A lower-quality wine that lacks complexity", "B) A well-balanced wine with depth and structure", "C) A wine that should be consumed immediately", "D) A wine that has undergone excessive oxidation"], correct: "B" },
   
   { question: "17. Which condition is most likely to cause wine to develop a cooked, stewed fruit character?",
   options: ["A) Extended maceration", "B) Aging in new oak barrels", 
            "C) Exposure to excessive heat during storage or transport", "D) Fermenting at a low temperature"], correct: "C" },
   
   { question: "18. If a still wine has unexpected bubbles, which wine fault may be present?",
   options: ["A) Cork taint", "B) Refermentation", "C) Oxidation", "D) Lightstrike"], correct: "B" },
   
   { question: "19. What is the main reason why high-acid wines tend to age well?",
   options: ["A) Acidity acts as a natural preservative, maintaining freshness over time", 
            "B) High-acid wines always contain more tannins, helping them age longer", 
            "C) Acidity balances the sweetness in all wines, preventing spoilage", 
            "D) High acidity reduces oxidation by removing all oxygen from the wine"], correct: "A" },
   
   { question: "20. A wine that smells like barnyard, leather, or Band-Aids likely has:",
   options: ["A) Excess tannins", "B) Too much acidity", 
            "C) Brettanomyces (Brett) infection", "D) A high alcohol content"], correct: "C" }
   
   ];
   
   function loadQuiz() {
    const quizContainer = document.getElementById("quiz");
    quizContainer.innerHTML = "";
   
    quizData.forEach((q, index) => {
        let questionHTML = `<div class="question">${q.question}</div><div class="answers">`;
        q.options.forEach((option, i) => {
            let letter = String.fromCharCode(65 + i);
            questionHTML += `
                <label>
                    <input type="radio" name="q${index}" value="${letter}"> ${option}
                </label>`;
        });
        questionHTML += `</div><hr>`;
        quizContainer.innerHTML += questionHTML;
    });
   
    loadProgress();
   }
   
   function submitQuiz() {
    let score = 0;
    
    quizData.forEach((q, index) => {
        const selected = document.querySelector(`input[name="q${index}"]:checked`);
        if (selected && selected.value === q.correct) {
            score++;
        }
    });
   
    let percentage = (score / quizData.length) * 100;
    saveProgress(score, percentage);
    
    const resultContainer = document.getElementById("results");
   
    if (percentage >= 80) {
        resultContainer.innerHTML = `
            <p style="color: green; font-size: 18px;">
                Congratulations! You passed with a score of <strong>${score}/${quizData.length} (${percentage.toFixed(1)}%)</strong>!
            </p>
            <p style="font-size: 18px;">Your password to unlock Unit 2 is: 
                <strong style="color: #8b0000;">wineunit2unlock</strong>
            </p>`;
    } else {
        resultContainer.innerHTML = `
            <p style="color: red; font-size: 18px;">
                You failed with a score of <strong>${score}/${quizData.length} (${percentage.toFixed(1)}%)</strong>. 
            </p>
            <p style="font-size: 18px;">You must score at least <strong>80%</strong> to pass. Please retake the quiz.</p>`;
    }
   
    loadProgress();
   }
   
   // Save quiz progress in localStorage
   function saveProgress(score, percentage) {
    let attempts = JSON.parse(localStorage.getItem("unit_1_quiz_attempts")) || [];
   
    attempts.push({ score: score, percentage: percentage, date: new Date().toLocaleString() });
   
    // Keep only the last 5 attempts
    if (attempts.length > 5) {
        attempts.shift();
    }
   
    localStorage.setItem("unit_1_quiz_attempts", JSON.stringify(attempts));
   
    // Check and update the best score
    let bestScore = localStorage.getItem("unit_1_best_score");
    if (!bestScore || percentage > parseFloat(bestScore)) {
        localStorage.setItem("unit_1_best_score", percentage);
    }
   }
   
   // Load previous attempts and best score
   function loadProgress() {
    let attempts = JSON.parse(localStorage.getItem("unit_1_quiz_attempts")) || [];
    let bestScore = localStorage.getItem("unit_1_best_score") || "N/A";
   
    document.getElementById("bestScore").innerText = bestScore !== "N/A" ? `${bestScore}%` : bestScore;
   
    let attemptHistory = document.getElementById("attemptHistory");
    attemptHistory.innerHTML = "";
   
    attempts.forEach((attempt, index) => {
        let attemptEntry = document.createElement("li");
        attemptEntry.innerHTML = `Attempt ${index + 1}: <strong>${attempt.score}/${quizData.length} (${attempt.percentage.toFixed(1)}%)</strong> - ${attempt.date}`;
        attemptHistory.appendChild(attemptEntry);
    });
   }
   
   document.addEventListener("DOMContentLoaded", loadQuiz);