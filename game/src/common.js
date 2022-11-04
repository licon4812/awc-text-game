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
    async inquire(type, msg, normal) {
        const answers = await inquirer.prompt({
            name: 'inquire',
            type: type,
            message: msg,
            default() {
                return normal;
            },
        })
        return answers.inquire; 
    }
}