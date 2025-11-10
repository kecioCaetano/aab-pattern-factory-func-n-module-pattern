// ---------------------------- variable scop ------------

let globalAge = 23;

function printAge(age){
    var varAge = 34;

    if (age > 0){
        const constAge = age * 2;
        console.log(constAge);
    }

    console.log(constAge);
}

// printAge(globalAge);
// console.log(varAge);

// ---------------------------- Closures ------------------------

function makeAdding(firstNumber){

    const first = firstNumber;
    return function resulting (secondNumber){
        const second = secondNumber;
        return first + second;
    }
}

// const add5 = makeAdding(5);
// console.log(add)

const add5 = makeAdding(5);
console.log(add5(2)) // logs 7

// ------------------------ Factory Functions ------------------------------

const User = function (name){
    this.name = name;
    this.discordName = "@" + name;
}
// this is a constructor and can be refactored into a factory!

function createUser (name){
    const discordName = "@" + name;
    return {name, discordName};
}

// ----------------shorthand notation-------------

function createUserShortHand(name){
    const vName = "bob";
    const vAge = 28;
    const vColor = "red";
    return {vName: vName, vAge: vAge, vColor: vColor};
}


const thatObj = {vName: vName, vAge: vAge, vColor: vColor};// before the shorhand

const nowFancyObj = {vName, vAge, vColor};

console.log()

