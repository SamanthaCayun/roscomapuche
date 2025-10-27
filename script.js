const words = [
  { letter: "A", answer: "antü", hint: "En mapuche significa sol. Representa el color amarillo de la bandera." },
  { letter: "B", answer: "bandera", hint: "Símbolo de identidad con colores que representan el cielo, la tierra y la fuerza." },
  { letter: "C", answer: "cayun", hint: "Apellido mapuche que puede significar fuerza o justicia." },
  { letter: "D", answer: "diversidad", hint: "Valor que reconoce las distintas culturas que forman parte de nuestro país." },
  { letter: "E", answer: "ley 26.160", hint: "Norma que protege los territorios indígenas frente a desalojos." },
  { letter: "F", answer: "flecha", hint: "En la bandera representa la lucha y defensa cultural." },
  { letter: "G", answer: "guanaco", hint: "Animal importante para la vida cotidiana y el abrigo del pueblo mapuche." },
  { letter: "H", answer: "historia", hint: "Relato del pasado que nos ayuda a entender quiénes somos." },
  { letter: "I", answer: "identidad", hint: "Lo que nos define como personas o pueblos." },
  { letter: "J", answer: "rojo", hint: "Color que simboliza la fuerza y la sangre derramada." },
  { letter: "L", answer: "lonko", hint: "Autoridad o líder espiritual y social mapuche." },
  { letter: "M", answer: "mapu", hint: "Significa tierra en mapudungun, color verde de la bandera." },
  { letter: "N", answer: "ñuke", hint: "Palabra que significa madre, símbolo de protección y vida." },
  { letter: "O", answer: "orgullo", hint: "Sentimiento de valorar las raíces culturales." },
  { letter: "P", answer: "pewma", hint: "Sueño o visión espiritual que guía a las personas." },
  { letter: "Q", answer: "quimün", hint: "Sabiduría o conocimiento ancestral." },
  { letter: "R", answer: "ruca", hint: "Vivienda tradicional de madera y barro." },
  { letter: "S", answer: "solidaridad", hint: "Valor de ayuda y respeto mutuo." },
  { letter: "T", answer: "trutruka", hint: "Instrumento musical hecho de caña, usado en ceremonias." },
  { letter: "U", answer: "unidad", hint: "Representa la unión del pueblo." },
  { letter: "V", answer: "verde", hint: "Color que representa la naturaleza y la conexión con la tierra." },
  { letter: "W", answer: "wenufoye", hint: "Significa 'Canelo del Cielo', bandera mapuche creada en 1992." },
  { letter: "Z", answer: "zomo", hint: "Mujer, símbolo de fortaleza y sabiduría." }
];

let current = 0;
let playing = false;

const rosco = document.getElementById("rosco");
const hint = document.getElementById("hint");
const answerInput = document.getElementById("answer");
const feedback = document.getElementById("feedback");
const startBtn = document.getElementById("start");

function createRosco() {
  const total = words.length;
  const radius = 170;

  words.forEach((w, i) => {
    const angle = (2 * Math.PI * i) / total;
    const x = Math.cos(angle) * radius + 180;
    const y = Math.sin(angle) * radius + 180;

    const letterDiv = document.createElement("div");
    letterDiv.className = "letter";
    letterDiv.textContent = w.letter;
    letterDiv.style.left = `${x}px`;
    letterDiv.style.top = `${y}px`;

    rosco.appendChild(letterDiv);
  });
}

createRosco();

function nextWord() {
  if (current >= words.length) current = 0;
  hint.textContent = words[current].hint;
  feedback.textContent = "";
  answerInput.value = "";
  answerInput.focus();
}

document.getElementById("check").addEventListener("click", () => {
  const userAnswer = answerInput.value.trim().toLowerCase();
  const correctAnswer = words[current].answer.toLowerCase();
  const letters = document.querySelectorAll(".letter");

  if (userAnswer === correctAnswer) {
    letters[current].classList.add("correct");
    feedback.textContent = "✅ ¡Correcto!";
    feedback.style.color = "#4CAF50";
  } else {
    letters[current].classList.add("incorrect");
    feedback.textContent = `❌ Incorrecto. Era: ${words[current].answer}`;
    feedback.style.color = "#e63946";
  }

  current++;
  setTimeout(nextWord, 1200);
});

document.getElementById("pass").addEventListener("click", () => {
  feedback.textContent = "🔁 Pasapalabra";
  current++;
  setTimeout(nextWord, 800);
});

startBtn.addEventListener("click", () => {
  startBtn.style.display = "none";
  playing = true;
  nextWord();
});
