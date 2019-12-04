//Hello, you!

function hello(name) {
    if (name) {
        console.log(`Hello ${name}`);
    } else {
        console.log(`Hello World!`);
    }
}

// hello('Mustache');
// hello();

// Madlib
function madlib(name, subject) {
    const string = `${name}'s favorite subject in school is ${subject}.`;
    return string;
}

// console.log(madlib("Dav", "English"));

// Tip Calculator

function tipAmount(bill, service) {
    let servicePercent;
    if (service == "good") {
        servicePercent = 0.2;
    } else if (service == "fair") {
        servicePercent = 0.15;
    } else {
        servicePercent = 0.1;
    }
    tipTotal = bill * servicePercent;
    return tipTotal;
}

// console.log(tipAmount(20, "bad"));

function totalAmount(bill, service) {
    totalAmount = bill + tipAmount(bill, service);
    return totalAmount;
}

// console.log(totalAmount(35, "bad"));

function splitAmount(bill, service, numPeople) {
    const perPerson = totalAmount(bill, service) / numPeople;
    return perPerson;
}

// console.log(splitAmount(100, "good", 5));

function printNumbers(startNum, endNum) {
    for (let i = startNum; i < endNum + 1; i++) {
        console.log(i);
    }
}

// printNumbers(1, 10);

function printSquare(size) {
    for (let i = 0; i < size; i++) {
        let row = [];
        for (let i = 0; i < size; i++) {
            row.push("*");
        }
        console.log(row);
    }
}

// printSquare(5);

function printBox(size, height) {
    for (let i = 0; i < height; i++) {
        //Prints first and last row
        if (i === 0 || i === height - 1) {
            let row = [];
            for (let i = 0; i < size; i++) {
                row.push("*");
            }
            console.log(row.join(""));
            //Prints middle rows
        } else {
            let row = [];
            for (let i = 0; i < size; i++) {
                if (i === 0 || i === size - 1) {
                    row.push("*");
                } else {
                    row.push(" ");
                }
            }
            console.log(row.join(""));
        }
    }
}

// printBox(5, 5);

// function printBox(size, height) {
//     //Prints first and last row
//     let borderRow = [];
//     for (let i = 0; i < size; i++) {
//         borderRow.push("*");
//     }
//     //Prints middle rows
//     let Middlerow = [];
//     for (let i = 0; i < size; i++) {
//         if (i === 0 || i === size - 1) {
//             MiddleRow.push("*");
//         } else {
//             MiddleRow.push(" ");
//         }
//     }

function printBanner(text) {
    let borderRow = [];
    for (let i = 0; i < text.length + 5; i++) {
        borderRow.push("*");
    }
    console.log(borderRow.join(""));
    console.log(`* ${text} *`);
    console.log(borderRow.join(""));
}

// printBanner("Welcome to DigitalCrafts");

function factors(num) {
    let primesList = [
        2,
        3,
        5,
        7,
        11,
        13,
        17,
        19,
        23,
        29,
        31,
        37,
        41,
        43,
        47,
        53,
        59,
        61,
        67,
        71,
        73,
        79,
        83,
        89,
        97,
        101,
        103,
        107,
        109,
        113,
        127,
        131,
        137,
        139,
        149,
        151,
        157,
        163,
        167,
        173,
        179,
        181,
        191,
        193,
        197,
        199
    ];
    let remainder = num;
    let factorList = [];
    for (let i = 0; i < num; i++) {
        if (remainder == 1) {
            break;
        }
        for (prime of primesList) {
            if (remainder === prime) {
                remainder = remainder / prime;
                factorList.push(prime);
                break;
            } else if (remainder % prime === 0) {
                remainder = remainder / prime;
                factorList.push(prime);
                console.log(`Prime is ${prime}`);
                console.log(`Remainder is ${remainder}`);
            }
        }
    }
    console.log(factorList);
}

// factors(35);

function cipher(string, offset) {
    const alphabet = [
        "a",
        "b",
        "c",
        "d",
        "e",
        "f",
        "g",
        "h",
        "i",
        "j",
        "k",
        "l",
        "m",
        "n",
        "o",
        "p",
        "q",
        "r",
        "s",
        "t",
        "u",
        "v",
        "w",
        "x",
        "y",
        "z"
    ];
    const alphabet_index_len = 25;
    let ciphered_list = string.split("");
    let deciphered_list = [];
    let past_range_index = offset - 1;

    console.log(ciphered_list);
    // console.log(alphabet_index_len);

    for (letter of ciphered_list) {
        if (letter === " ") {
            deciphered_list.push(letter);
        } else {
            index = alphabet.indexOf(letter);
            shift_position = index + offset;
            if (shift_position > alphabet_index_len) {
                shift_position =
                    past_range_index - (alphabet_index_len - index);
            }
            shifted_letter = alphabet[shift_position];
            deciphered_list.push(shifted_letter);
        }
    }

    console.log(deciphered_list);
}

// cipher("Genius without education is like silver in the mine", 13);

function leetspeak(string) {
    var chars = { E: "3", G: "6", I: "1", O: "0", S: "5", T: "7" };
    var s = string.toUpperCase();

    s = s.replace(/[EGIOST]/g, x => chars[x]);
    console.log(s);
}

// leetspeak('Leet');

function longVowels(string) {
    // var chars = {'ee':'eeeee', 'oo':'ooooo'};
    var s = string;
    s = s.replace(/ee/g, "eeeee").replace(/oo/g, "ooooo");
    console.log(s);
}

// longVowels('Good');

function positiveNumbers(array) {
    newArray = [];
    for (num of array) {
        if (num > -1) {
            newArray.push(num);
        }
    }
    return newArray;
}

// console.log(positiveNumbers([1,-2,5,-9]));

function rockPaperScissors(player1, player2) {
    const weapons = {
        Rock: { weakTo: "Paper", strongTo: "Scissors" },
        Paper: { weakTo: "Scissors", strongTo: "Rock" },
        Scissors: { weakTo: "Rock", strongTo: "Paper" }
    };

    if (weapons[player1].strongTo === weapons[player2].weakTo) {
        console.log("Player 1");
    } else if (weapons[player1].weakTo === weapons[player2].strongTo) {
        console.log("Player 2");
    } else {
        console.log("Draw");
    }
}

// rockPaperScissors('Rock', 'Paper');

function ticTacToe(playerSymbol, moveCoordX, moveCoordY) {
    let board = {
        Y1: { R1: "null", R2: "null", R3: "null" },
        Y2: { R1: "null", R2: "null", R3: "null" },
        Y1: { R1: "null", R2: "null", R3: "null" }
    };
    // board.'Y1'.
    console.log(board);
}

// ticTacToe('X', 'R1', 'Y2');

// const expenses = [
//     1234.56,
//     89.49,
//     10,
//     15.90,
//     15,
//     20
// ];

const expenses = [
    1234.56,
    89.42,
    9797.1,
    88.88,
    3.14,
    30.99,
    10.74,
    0.99,
    42.39,
    19.24,
    8.49,
    21.3,
    1.0,
    30.0
];

function sumExpenses(array) {
    let sum = 0;
    for (let num of array) {
        sum += num;
    }
    return sum;
}

// console.log(sumExpenses(expenses));

function sumAboveTwenty(array) {
    let sum = 0;
    for (let num of array) {
        if (num > 20) {
            sum += num;
        }
    }
    return sum;
}
// console.log(sumAboveTwenty(expenses));

function discount(array) {
    let new_array = [];
    for (let num of array) {
        if (num > 100) {
            new_array.push(num * 0.9);
        } else {
            new_array.push(num);
        }
    }
    return new_array;
}

console.log(discount(expenses));

// How to transform one array
// into a corresponding array

// #1. Write a function
// that describes how to transform
// one, single item.
function giveDiscount(singleExpense) {
    // debugger;
    return singleExpense * 0.9;
}

// #2. Declare a variable to hold
// the new array.

let updatedExpenses = expenses.map(giveDiscount);
// console.log(updatedExpenses);

function onlyOverTwentyDollars(expenseArray) {
    let newArray = [];

    for (let cost of expenseArray) {
        if (cost >= 20) {
            newArray.push(cost);
        }
    }
    return newArray;
}

let filteredExpenses = onlyOverTwentyDollars(expenses);

// How to filter out certain items.

//  #1. Write the helper function that knows if one, single
// element should be allowed or not.
// "Gandolf function"

function isOverTwentyDollars(cost) {
    if (cost >= 20) {
        return true;
    } else {
        return false;
    }
}

// #2. Declare a variable to hold our new, filtered array.
let highExpenses = expenses.filter(isOverTwentyDollars);
console.log(highExpenses);
