import chalk from "chalk";
import inquirer from "inquirer";
import gradient from "gradient-string";
import chalkAnimation from 'chalk-animation';
import figlet from "figlet";
import { createSpinner } from "nanospinner";
import Common from "./common.js"
import Player from "./player.js"

export default class Level{
    constructor(levelNumber, finalLevel) {
        this.levelNumber = levelNumber
        this.finalLevel = finalLevel
        this.common = new Common()
        this.player = new Player()
    }

    setLevelNumber(levelNumber) {
        this.levelNumber = levelNumber
        this.playLevel()
    } 

    getLevelNumber() {
        return this.levelNumber
    }

    async playLevel() {
        if (this.finalLevel === this.levelNumber) {
            await this.winner(this.player.getName());
        } else if (this.levelNumber === 0) {
            await this.common.rainbowText("Welcome to the official AWC Text based adventure game")
            console.log(`
                ${chalk.bgBlue('HOW TO PLAY')}
            `)
            this.player.setName(await this.common.inquire("input", "What is your name?", "Player"))
            this.setLevelNumber(1)

        } else if (this.levelNumber === 1) {
           let question = await this.common.inquire("list", "Who is the leader of the AWC?", null, [
                'SpartaTheNacho',
                'Licon4812',
                'Megafish009',
                'Kazumi Wolff'
            ])

            if (await this.common.handleAnswer(question == 'SpartaTheNacho', `Nice Job ${this.player.getName()}.`, `💀💀💀 Game over, you lose ${this.player.getName()}!`)) {
                this.setLevelNumber(this.getLevelNumber() + 1)
            }
        }
    }

    async winner(playerName) {
        console.clear();
        const msg = `Congrats, ${playerName} !\n you have completed your adventure`;
        figlet(msg, (err, data) => {
            console.log(gradient.pastel.multiline(data));
        })
    }
}