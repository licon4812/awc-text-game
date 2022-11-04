#!/usr/bin/env node

import inquirer from "inquirer";
import gradient from "gradient-string";
import figlet from "figlet";
import { createSpinner } from "nanospinner";
import Level from "./level.js"

let playerName;
let level = new Level()
await level.setLevelNumber(0)