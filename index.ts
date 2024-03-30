#! /usr/bin/env node
import inquirer from "inquirer";
const computer_number = Math.floor(Math.random() * 10 + 1);
const result = await inquirer.prompt([
  {
    name: "guessingGame",
    type: "number",
    message: "plesase gues a number between 1.10: ",
  },
]);
//condition
if (result.guessingGame === computer_number) {
  console.log("Congratulation! you guess aright number ");
} else {
  console.log("Wrong number, try Again");
}
