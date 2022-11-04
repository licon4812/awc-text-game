import chalk from "chalk";
import inquirer from "inquirer";
import gradient from "gradient-string";
import chalkAnimation from 'chalk-animation';
import figlet from "figlet";
import { createSpinner } from "nanospinner";
import Common from "./common.js"
import Player from "./player.js"

export default class Level{
    constructor(levelNumber) {
        this.levelNumber = levelNumber
        this.common = new Common()
        this.player = new Player()
    }

    setLevelNumber(levelNumber) {
        this.levelNumber = levelNumber
        this.playLevel()
    } 

    getLevelNumber() {
        console.log(this.levelNumber)
        return this.levelNumber
    }

    async playLevel() {
        if (this.levelNumber === 0) {
            await this.common.rainbowText("Welcome to the official AWC Text based adventure game")
            console.log(`
                ${chalk.bgBlue('HOW TO PLAY')}
            `)
            this.player.setName(await this.common.inquire("input", "What is your name?", "Player"))
        } else if (this.levelNumber === 1) {
            await this.common.inquire("list", "Who is the leader of the AWC?", null, [
                'SpartaTheNacho',
                'Licon4812',
                'Megafish009',
                'Kazumi Wolff'
            ])

            await this.common.handleAnswer(answers.question1 == 'SpartaTheNacho');
        }
    }
}