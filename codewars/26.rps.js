// Learn Data Structure with JavaScript
// Coding Challenge 2024 17/366
// Challenge 2024 17. RPS

// const rps = (p1, p2) => {
//   if (p1 === p2) {
//     return "Draw!";
//   } else if (
//     (p1 === "rock" && p2 === "scissors") ||
//     (p1 === "scissors" && p2 === "paper") ||
//     (p1 === "paper" && p2 === "rock")
//   ) {
//     return "Player 1 won!";
//   } else {
//     return "Player 2 won!";
//   }
// };

//Memakai ternary operator
// const rps = (p1, p2) =>
//   p1 === p2
//     ? "Draw!"
//     : (p1 === "rock" && p2 === "scissors") ||
//       (p1 === "scissors" && p2 === "paper") ||
//       (p1 === "paper" && p2 === "rock")
//     ? "Player 1 won!"
//     : "Player 2 won!";

const rps = (p1, p2) => {
  const rules = {
    rock: "scissors",
    scissors: "paper",
    paper: "rock",
  };

  if (p1 === p2) {
    return "Draw!";
  } else {
    return `Player ${rules[p1] === p2 ? "1" : "2"} won!`;
  }
};

console.log(rps("rock", "scissors"));
console.log(rps("rock", "paper"));
console.log(rps("paper", "paper"));
