// Define necessary constants.
const minimist = require('minimist')
const { exit } = require('process')
const START_ARG_NUM = 2
const DEFAULT_NUM_FLIPS = 1

// Import the coinFlips and countFlips functions from your coin.mjs file
import { coinFlips, countFlips } from "./modules/coin.mjs"

// Use minimist to process one argument `--port=` on the command line after `node server.js`.
const allArguments = minimist(process.argv.slice(START_ARG_NUM))
const argNumFlips = allArguments['number']
const numFlips = argNumFlips || DEFAULT_NUM_FLIPS

// Call the coinFlip function with numFlips as the argument and put the returned array into STDOUT
var coinFlipsResult = coinFlips(numFlips)
console.log(coinFlipsResult)

// Summarize the result and put the summary into STDOUT
console.log(countFlips(coinFlipsResult))