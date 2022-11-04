import chalkAnimation from 'chalk-animation';
import inquirer from "inquirer";
import { createSpinner } from "nanospinner";
export default class Common{
    constructor() { 
        this.sleep = (ms = 2000) => new Promise((r) => setTimeout(r, ms))
    }

    async rainbowText(msg) {
        const rainbowTitle = chalkAnimation.rainbow(
            msg
        );
        await this.sleep()
        rainbowTitle.stop();
    }

    // normal is synonymous for default in this case
    async inquire(type, msg, normal, choices) {
        if (type === "input") {
            const answers = await inquirer.prompt({
                name: 'inquire',
                type: type,
                message: msg,
                default() {
                    return normal;
                },
            })
            return answers.inquire; 
        } else if (type === "list") {
            const answers = await inquirer.prompt({
                name: 'inquire',
                type: type,
                message: msg,
                choices: choices
            })
            return answers.inquire; 
        }
    }

    async handleAnswer(isCorrect, success, failed) {
        const spinner = createSpinner('Checking answer...').start();
        //await common.sleep();
        await this.sleep();
        if (isCorrect) {
            spinner.success(success);
            await winner()
        } else {
            spinner.error(failed);
        }
    }

    async winner() {
        console.clear();
        const msg = `Congrats, ${playerName} !\n you have completed your adventure`;
        figlet(msg, (err, data) => {
            console.log(gradient.pastel.multiline(data));
        })
    }
}