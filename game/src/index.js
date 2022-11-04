#!/usr/bin/env node

import inquirer from "inquirer";
import gradient from "gradient-string";
import figlet from "figlet";
import { createSpinner } from "nanospinner";
import Level from "./level.js"

let playerName;
const sleep = (ms = 2000) => new Promise((r) => setTimeout(r, ms));
let level = new Level()
await level.setLevelNumber(0)
//await welcome()
//await askName()
//await question1()

async function question1() {
    const answers = await inquirer.prompt({
        name: 'question1',
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
    //await common.sleep();
    await sleep();
    if (isCorrect) {
        spinner.success({ text: `Nice Job ${playerName}.` });
        await winner()
    } else {
        spinner.error({ text: `💀💀💀 Game over, you lose ${playerName}!` });
    }
}

async function winner() {
    console.clear();
    const msg = `Congrats, ${playerName} !\n you have completed your adventure`;
    figlet(msg, (err, data) => {
        console.log(gradient.pastel.multiline(data));
    })
}