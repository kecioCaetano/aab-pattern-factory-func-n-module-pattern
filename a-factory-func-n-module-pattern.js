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

// const add5 = makeAdding(5);
// console.log(add5(2)) // logs 7

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
    // old pattern:
    // return {vName: vName, vAge: vAge, vColor: vColor};
    // new pattern: when the variable has the same name it doesn't need to repeat
    return {vName, vAge, vColor};
}

const name = "bob";
const age = 28;
const color = "red";


 const thatObj = {name: name, age: age, color: color};// before the shorhand
 const nowFancyObj = {name, age, color};// after the handshort

// console.log(thatObj);
// console.log(nowFancyObj);

// ------------------- Destructuring -------------------

const obj = {a: 1, b: 2};
const {a, b} = obj;
// console.log(a);
// console.log(b);
const array = [9,8,7,6,5,4,3,2,1,0]
const [lastNumber, ...rest] = array;
// console.log(lastNumber, rest);

// ---------------------------------- Private variable and functions -----------------------------

function createUserFull(name){
    const discordName = `@${name}`;
    
    // variable reputation is private because it is not returned.
    // same thing can be done with methods
    let reputation = 0;

    const getReputation = () => reputation;
    const giveReputation = () => reputation++;

    return {name, discordName, getReputation, giveReputation};
}

// const josh = createUserFull("josh");
// josh.giveReputation();
// josh.giveReputation();

// console.log({
//   discordName: josh.discordName,
//   reputation: josh.getReputation()
// });
// logs { discordName: "@josh", reputation: 2 }

// ----------------------- Prototype inheritance with factories-------------------

function createPlayer (name, level){
    const {getReputation, giveReputation} = createUserFull(name);

    const increaseLevel = () => level++;
    return {name, getReputation, giveReputation, increaseLevel};
}

function createPlayer2 (name, level){
    const user = createUserFull(name);

    const increaseLevel = () => level++;
    // use Object.assign to return an obj{} with one or more sources.
    return Object.assign({}, user, {increaseLevel});
}

// -------------------------------- the module pattern. IIFEs-----------------------------------

const calculator = (function (){
    const add = (a, b) => a + b;
    const sub = (a, b) => a - b;
    const mul = (a, b) => a * b;
    const div = (a, b) => a / b;
    return {add, sub, mul, div};
})()