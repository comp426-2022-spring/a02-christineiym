// Define necessary constants.
const START_ARG_NUM = 2

// Import/require necessary modules.
import { createRequire } from 'module';
const require = createRequire(import.meta.url)
const minimist = require('minimist')
const { exit } = require('process')

// Import the coinFlips and countFlips functions from your coin.mjs file
import { flipACoin } from './modules/coin.mjs'

// Use minimist to process one argument `--port=` on the command line after `node server.js`.
const allArguments = minimist(process.argv.slice(START_ARG_NUM))
const argCall = allArguments['call']

// Call the flipACoin function with call as the argument, logging the result/error(s).
try {
    var coinFlipResult = flipACoin(argCall)
    console.log(coinFlipResult)
} catch (e) {
    console.log(e)
    console.log('Usage: node guess-flip --call=[heads|tails]')
}