/*
    i increments the value (initially 0)
    d decrements the value
    s squares the value
    o outputs the value into the return array
    */

const commandFn = {
    i: v => v + 1,
    d: v => v - 1,
    s: v => (v = Math.pow(v, 2)),
    o: (v, arr) => arr.push(v)
};

function parse(commands) {
    let value = 0;
    let resultArray = [];
    const commandArray = commands.split("");
    commandArray.forEach(command => {
        if (Object.keys(commandFn).some(key => key === command)) {
            if (command === "o") {
                commandFn[command](value, resultArray);
            } else {
                value = commandFn[command](value);
            }
        }
    });
    return resultArray;
}

console.log(parse("iiisodo")); // [9, 8]
console.log(parse("iiisodso")); // [9, 64]
console.log(parse("iiissddodiiso")); // [79, 6400]
