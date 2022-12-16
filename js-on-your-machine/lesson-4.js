// console.log(process.env)

// printing variables from the OS
console.log(process.env.PS1)
console.log(process.env.PWD)
console.log(process.env.LOGNAME)

// node script..?
console.log(process.argv)

// the index value determines the output of the conditional tree
let index = process.argv[2]
let argument = process.argv[index]
if (argument === "pretzel") {
    console.log("PRETZEL!")
} else { console.log("Not pretzel :(") }