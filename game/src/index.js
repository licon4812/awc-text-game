#!/usr/bin/env node

import Level from "./level.js"
let level = new Level(0,2)
await level.playLevel()