import inquirer from 'inquirer';
import chalk from 'chalk';
export default async () => {
    let question = inquirer.prompt([{
            name: "firstNum",
            message: "First Number",
            type: "input"
        },
        {
            name: "operator",
            message: "Select Operator",
            type: "list",
            choices: ["Addition", "Multiplication", "Subtraction", "Division"]
        },
        {
            name: "secondNum",
            message: "Second Number",
            type: "input",
        }])
        .then((answers) => {
        if (answers.firstNum == String || answers.secondNum == String)
            console.log(chalk.red("ERR! Should be number"));
        else if (answers.operator == "Addition") {
            console.log(answers.firstNum, "+", answers.secondNum, "=", parseInt(answers.firstNum) + parseInt(answers.secondNum));
        }
        else if (answers.operator == "Multiplication") {
            console.log(answers.firstNum, "X", answers.secondNum, "=", answers.firstNum * answers.secondNum);
        }
        else if (answers.operator == "Subtraction") {
            console.log(answers.firstNum, "-", answers.secondNum, "=", answers.firstNum - answers.secondNum);
        }
        else if (answers.operator == "Division") {
            console.log(answers.firstNum, "/", answers.secondNum, "=", answers.firstNum / answers.secondNum);
        }
    });
};
