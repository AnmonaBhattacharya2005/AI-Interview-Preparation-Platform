// ========================= script.js =========================

const questions = [

  {
    question: "Tell me about yourself.",
    keywords: ["student", "developer", "skills", "experience"]
  },

  {
    question: "What are your strengths?",
    keywords: ["hardworking", "teamwork", "problem", "communication"]
  },

  {
    question: "Why should we hire you?",
    keywords: ["skills", "dedicated", "quick learner", "passionate"]
  },

  {
    question: "What is your biggest weakness?",
    keywords: ["improve", "learning", "growth"]
  }

];

let currentQuestion = 0;
let score = 0;

function startInterview(){

  currentQuestion = 0;
  score = 0;

  document.getElementById("score").innerHTML = score;

  showQuestion();
}

function showQuestion(){

  document.getElementById("question").innerHTML =
  questions[currentQuestion].question;

  document.getElementById("answer").value = "";

  document.getElementById("feedback").innerHTML = "";
}

function checkAnswer(){

  let answer =
  document.getElementById("answer").value.toLowerCase();

  let keywords = questions[currentQuestion].keywords;

  let matchCount = 0;

  keywords.forEach(word => {
    if(answer.includes(word)){
      matchCount++;
    }
  });

  let feedback = document.getElementById("feedback");

  if(matchCount >= 2){

    feedback.innerHTML =
    "✅ Good Answer! AI liked your response.";

    score += 10;
  }

  else{

    feedback.innerHTML =
    "⚠ Try adding more professional details.";
  }

  document.getElementById("score").innerHTML = score;

  currentQuestion++;

  if(currentQuestion < questions.length){

    setTimeout(() => {
      showQuestion();
    }, 2000);
  }

  else{

    setTimeout(() => {

      document.getElementById("question").innerHTML =
      "🎉 Interview Completed";

      document.getElementById("answer").style.display = "none";

      feedback.innerHTML =
      "Final Score: " + score + "/40";

    }, 2000);
  }
}