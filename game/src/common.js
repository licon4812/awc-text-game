import chalkAnimation from 'chalk-animation';
import inquirer from "inquirer";
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
        } else if (type === "list") {
            const answers = await inquirer.prompt({
                name: 'inquire',
                type: type,
                message: msg,
                choices: choices
            })
        }
        return answers.inquire; 
    }

    async handleAnswer(){}
}