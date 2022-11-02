#!/usr/bin/env node

import chalk from "chalk";
import inquirer from "inquirer";
import gradient from "gradient-string";
import chalkAnimation from 'chalk-animation';
import figlet from "figlet";
import { createSpinner } from "nanospinner";

let playerName;

const sleep = (ms = 2000) => new Promise((r) => setTimeout(r, ms));

async function welcome() {
    const rainbowTitle = chalkAnimation.rainbow(
        'Welcome to the official AWC Text based adventure game'
    );

    await sleep();
    rainbowTitle.stop();
    console.log(`
        ${chalk.bgBlue('HOW TO PLAY')}
    `)
}

await welcome()
await askName()

async function askName() {
    const answers = await inquirer.prompt({
        name: 'player_name',
        type: 'input',
        message: 'What is your name?',
        default() {
            return 'Player';
        },
    })

    playerName = answers.player_name;
}

async function question1() {
    const answers = await inquirer.prompt({
        name: 'question_1',
        type: 'list',
        message: 'Who is the leader of the AWC?',
        choices: [
            'SpartaTheNacho',
            'Licon4812',
            'Megafish009',
            'Kazumi Wolff'
        ]
    })

    return handleAnswer(answers.question1 == 'SpartaTheNacho');
}

async function handleAnswer(isCorrect) {
    const spinner = createSpinner('Checking answer...').start();
    await sleep();

    if (isCorrect) {
        spinner.success({text: `Nice Job ${playerName}.`});
    } else {
        spinner.error({ text: `💀💀💀 Game over, you lose ${playerName}!` });
    }
}