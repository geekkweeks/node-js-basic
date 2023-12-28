import readline from "readline";
import process from "process";

const input = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

input.question("Your club?", (clubName) => {
  console.log(`my club is ${clubName}`);
});
