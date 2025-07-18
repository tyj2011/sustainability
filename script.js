const questions = [
  {
    q: "1. What is the most sustainable way to travel short distances?",
    options: ["Car", "Bus", "Bicycle", "Motorbike"],
    answer: 2
  },
  {
    q: "2. Which energy source is renewable?",
    options: ["Coal", "Oil", "Solar", "Natural Gas"],
    answer: 2
  },
  {
    q: "3. Which of these reduces plastic use?",
    options: ["Plastic bags", "Reusable bags", "Straws", "Bottled water"],
    answer: 1
  },
  {
    q: "4. Composting helps by:",
    options: ["Reducing waste", "Creating plastic", "Using more energy", "None"],
    answer: 0
  },
  {
    q: "5. Which of these is not a greenhouse gas?",
    options: ["CO2", "CH4", "N2", "O3"],
    answer: 2
  },
  {
    q: "6. Turning off unused lights saves:",
    options: ["Water", "Electricity", "Food", "Fuel"],
    answer: 1
  },
  {
    q: "7. Which of these products is biodegradable?",
    options: ["Plastic", "Aluminum", "Banana Peel", "Styrofoam"],
    answer: 2
  },
  {
    q: "8. The 3Rs stand for:",
    options: ["Read, Run, Reuse", "Reduce, Reuse, Recycle", "Rent, Refill, Renew", "Rinse, Recycle, Ride"],
    answer: 1
  },
  {
    q: "9. What is a carbon footprint?",
    options: ["Your shoe size", "Carbon emissions from activity", "A gas station", "Carbon-free material"],
    answer: 1
  },
  {
    q: "10. Best way to save water:",
    options: ["Short showers", "Running tap", "Watering driveway", "Long baths"],
    answer: 0
  }
];

const quizEl = document.getElementById("quiz");

questions.forEach((q, i) => {
  const qDiv = document.createElement("div");
  qDiv.classList.add("question");
  qDiv.innerHTML = `<h3>${q.q}</h3>` + 
    q.options.map((opt, j) => `
      <label>
        <input type="radio" name="q${i}" value="${j}" required> ${opt}
      </label>`).join("");
  quizEl.appendChild(qDiv);
});

// SCROLL ANIMATION
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add("show");
  });
}, { threshold: 0.2 });

document.querySelectorAll('.question, .fade-in').forEach(el => observer.observe(el));

document.getElementById("quizForm").addEventListener("submit", function(e) {
  e.preventDefault();
  let score = 0;
  questions.forEach((q, i) => {
    const ans = document.querySelector(`input[name="q${i}"]:checked`);
    if (ans && parseInt(ans.value) === q.answer) score++;
  });
  const result = document.getElementById("result");
  result.innerHTML = `You got ${score}/10 correct! 🌱`;
  result.classList.add("show");
});
