import chalk from "chalk";
import inquirer from "inquirer";
import gradient from "gradient-string";
import chalkAnimation from 'chalk-animation';
import figlet from "figlet";
import { createSpinner } from "nanospinner";
import Common from "./common.js"

export default class Level{
    constructor(levelNumber) {
        this.levelNumber = levelNumber
        this.common = new Common()
    }

    setLevelNumber(levelNumber) {
        this.levelNumber = levelNumber
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
            console.log(await this.common.inquire("input", "What is your name?", "Player"))
            //playerName = answers.player_name;
        }
    }
}