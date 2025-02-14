function showExternalMessage() {
    alert('Hej från extern JavaScript!')
}

/*
var num1 = 10

let num2 = 25

const num3 = 100

let num4 = 945

const num5 = 1337

console.log(num1, num2, num3, num4, num5)

let name = "Victor"

let age = 17

age = age + 5

let isRaining = true

let hello = "Jag är 17 år gammal"

console.log(name, age, isRaining, hello)


let num1 = 945

let num2 = 744

let sum1 = num1 + num2

let sum2 = num1 - num2

let sum3 = num1 * num2

let sum4 = num1 / num2

console.log(sum1, sum2, sum3, sum4)


let num1 = 10

let num2 = 24

console.log(num1 == 10, num2 != 24, num1 > num2, num1 < num2)


function hello() {
    console.log('Hej, världen!')
}

function bilar() {
    console.log('Volvo, BMW, Ford, Audi, Mercedes');
}

function greet(name) {
    console.log('Hej, ' + name + '!');
}

function add(x, y) {
    return x + y;
}

function multiply(x, y) {
    return x * y;
}
*/

function temperature(temperature) {
    if (temperature > 30) {
        console.log('Det är varmt ute.')
    } else {
        console.log('Det är inte så varmt ute.')
    }
}

function score(score) {
    if (score > 50) {
        console.log('Godkänd.')
    } else {
        console.log('Underkänd.')
    }
}

function oddOrEven(num) {
    if (num % 2 == 0) {
        console.log('Jämnt.')
    } else {
        console.log('Udda.')
    }
}

function age(age) {
    if (age < 13) {
        console.log('Barn')
    } else if (age <= 19) {
        console.log('Tonåring')
    } else {
        console.log('Vuxen')
    }
}

function password(password) {
    if (password == "hemligt") {
        console.log('Åtkomst beviljad.')
    } else {
        console.log('Åtkomst nekad.')
    }
}

function leapYear(year) {
    if (year % 4 == 0 && year % 100 != 0 || year % 400 == 0) {
        console.log('Skottår.')
    } else {
        console.log('Inte skottår.')
    }
}

function day(day) {
    switch (day) {
        case 1:
            console.log('Måndag')
            break;
        case 2:
            console.log('Tisdag')
            break;
        case 3:
            console.log('Onsdag')
            break;
        case 4:
            console.log('Torsdag')
            break;
        case 5:
            console.log('Fredag')
            break;
        case 6:
            console.log('Lördag')
            break;
        case 7:
            console.log('Söndag')
            break;
        default:
            console.log('Ogiltigt nummer.')
    }
}

function grade(grade) {
    switch (grade) {
        case 'A' || 'B':
            console.log('Utmärkt')
            break;
        case 'C' || 'D':
            console.log('Bra')
            break;
        case 'E':
            console.log('Godkänt')
            break;
        case 'F':
            console.log('Underkänt')
            break;
    }
}

function month(month) {
    switch (month) {
        case 1:
            console.log('Januari')
            break;
        case 2:
            console.log('Februari')
            break;
        case 3:
            console.log('Mars')
            break;
        case 4:
            console.log('April')
            break;
        case 5:
            console.log('Maj')
            break;
        case 6:
            console.log('Juni')
            break;
        case 7:
            console.log('Juli')
            break;
        case 8:
            console.log('Augusti')
            break;
        case 9:
            console.log('September')
            break;
        case 10:
            console.log('Oktober')
            break;
        case 11:
            console.log('November')
            break;
        case 12:
            console.log('December')
            break;
        default:
            console.log('Ogiltigt nummer.')
    }
}

function fruit(fruit) {
    switch (fruit) {
        case 1:
            console.log('Äpple')
            break;
        case 2:
            console.log('Papaya')
            break;
        case 3:
            console.log('Litchi')
            break;
        case 4:
            console.log('Dragonfrukt')
            break;
        default:
            console.log('Felaktigt nummer.')
    }
}

let arr1 = [1, 2, 3, 4, 5]

let arr2 = ['Bil', 'Cykel', 'Båt', 'Flygplan', 'Tåg']

/*
for (let i = 0; i < arr2.length; i++) {
    console.log(arr2[i])
}

let arr3 = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]

arr3.forEach(arr3 => {
    console.log(arr3)
});

let arr4 = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]

let sum = 0

arr4.forEach(arr4 => {
    sum += arr4
});
console.log(sum)

let arr5 = ['Andreas', 'Bob', 'Victor', 'Robin', 'Jacob']

for (let i = 0; i < arr5.length; i++) {
    console.log(arr5[i])
}

let bil = {
    färg: 'Blå',
    modell: 'Volvo 945',
    år: 1998
}


bil.modell = 'Volvo 744'
bil.pris = 25000

console.log(bil)
*/

document.getElementById('externalButton').addEventListener('click', showExternalMessage);