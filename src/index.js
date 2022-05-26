const messages = [
  "Luis",
  "Ana",
  "Jessica",
  "Laura",
  "Andres",
  "Nancy"
];

const randomMsg = () => {
  const message = messages[Math.floor(Math.random()* messages.length)];
  console.log(message);
}

module.exports = { randomMsg };