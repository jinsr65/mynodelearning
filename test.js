const yargs = require('yargs/yargs')
const { hideBin } = require('yargs/helpers')
const argv = yargs(hideBin(process.argv)).argv

// console.log(argv.values)

let value = argv.values

let num = value.split(',')

const factor = function(element){
    console.log(element)
}

num.forEach(element => {
    factor(element)
});
