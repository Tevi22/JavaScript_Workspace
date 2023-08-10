new Promise(function (resolve, reject) {
    let b;
    setTimeout(compute =(a = 5)=> resolve(a+b), 1000);
    b = 25;
}).then(function (data) {console.log(data) });
// Output 30

class Person {
    constructor(friends) { this.friends = friends}
}

class Employee extends Person {
  constructor (friends) {super(friends)}
    displayFriends() {
        for (let friend of friends) {
            console.log(friend)
        }
    }
}


let friendList = ["John", "Tom", "Tim", "Jack", "Sam", "Richard", "Mark", "James"];
let x = new Employee(friendList);
x.displayFriends();
//undefined

let myList = ["Edison", "Tesla", "Einstein"]
let [,a] = myList
console.log(a)
//Output Tesla

let states = [];
states.push(["Rihanna",
{
    empId: "I1001",
    city: "BNG",
    age: 25
}]);

console.log(...states)
// Both Arrays

let studentData = {
    name: "John",
    country: "India"
}

var dynamicProperty = "age";
studentData[dynamicProperty] = 25;
var dynamicProperty = "city";
studentData[dynamicProperty] = "Prune";
console.log(studentData.age);
console.log(studentData.city);
// 25 Prune

const cars = [{'Name': "Toyota", "Cost": 324322},{'Name': 'Benz', 'Cost': 2216}];
const y = cars.reduce((a, b)=> a+b.Cost, 5);
console.log(y)
// 326543

let employeeList = [
    {id: "I1001", name: "Tom"},
    {id: "I1002", name: "Jack"},
    {id: "I1003", name: "Tim"},
    {id: "I1004", name: "Sam"}
];

console.log("Emp Id: ${employeeList[0].id} Emp Name: ${employeeList[0].id}");
// Emp Id: ${employeeList[0].id} Emp Name: ${employeeList[0].id}

console.log(`Emp Id: ${employeeList[0].id} Emp Name: ${employeeList[0].id}`);
// Emp Id: I1001 Emp Name: I1001

let output = []
var component = (...par1) => {
    output = [...para1]
    return output.filter((a)=> a.includes('Script'));
}

console.log(component('ES6', 'JavaScript', 'CoffeeScript', 'React'));
// undefined

let myArray = new Array([1,2,3]);
myArray.delete(1)
console.log(myArray)

// MyArray.delete is not a function

let empId = 'I1005';
//let employee = {
    empId,
    getEmpDetails() {
        return this.empId;
    },

    getDetails() {
        setInterval(() => { return this.empId }, 1000)
    }
}

//console.log(employee.getEmpDetails())
// I1005
console.log(employee.getDetails())
// undefined

new Promise((resolve, reject) => {
    let b;
    setTimeout(compute = (a = 5)=> resolve(a+b), 1000);
    b = 25;
}).then(function (data) { console.log(data) });

// 30

let lis = [
    {alertEgo: 'Bruce Wayne', city: 'Gotham City'},
    {alertEgo:'Oliver Queen', city: 'Star City'},
    {alertEgo: 'Barry Allen', city: 'Central City'}    
];
let [, , darkKnight] = lis;
function cityHunter({ alertEgo: x, heroName: y, powers: k, city: z }) {
    console.log(x + '-' + y + '-' + k + '-' + z)
}

cityHunter(darkKnight);
// Barry Allen-undefined-undefined-Central City

//a
let x = [1, 2, 3];
let y = [4, 5, 6]
const combinedArray1 = [...x, ...y]
console.log('one '+combinedArray1)
// 1,2,3,4,5,6
//b
let z = [3, 4, 5, 6];
const combinedArray2 = [1, 2, ...z]
console.log('two '+combinedArray2)
// 1,2,3,4,5,6
//c
let a = [3, 4, 5, 6];
const combinedArray3 = [1, 2, ...z]
console.log('three '+a)
// 3,4,5,6

let employee = {
    empId: 'I1001',
    empName: {
        firstName: 'John',
        middleName: 'Thomson',
        lastName: 'Mark'
    },
    empStatus: 'active'
};
let {firstName: middleName, lastName} = employee.empName;
console.log(middleName)
// John

var emp = 8080;
if(true) {
    const temp = 8080;
    console.log(typeof temp)
}
// number

class Person {
    constructor(name, age) { this.pname = name; this.page = age; }
    displayMasterDetails() {
        console.log('name ', this.pname);
        console.log('age ', this.page);
    }
}

class Employee extends Person {
    constructor(name, age, empId) {
        super(name, age)
        this.empID = empId;
    }
    displayAllDetails() {
        Person.displayMasterDetails()
        console.log('Employee Id : ' + this.empID)
    }
}
// All the above

const results = [];
function check(para1, ...para2) {
    return results.push(para1, para2);
}
console.log(check('Hello', 'World'))
// 2

let name = 'Sam'
function demo() {
    name += 'Mark'
}
console.log(name)
// Sam

let movie = { name: 'Galaxy of Guardians', type: 'Hollywood'};
let movieProperty = 'ratings'
movie['current ' + movieProperty] = 5;

console.log(movie.currentProperty)

// New Test

function bat(man, maxPower) {
    power = maxPower
    try {
        man()
    } finally {
        let power = 400;
    }
    console.log(power)
}

function man() {
    try {
        throw new Error();
    } catch(e) {
        power = 200;
    } finally {
        power = 300;
    }
}

bat(man, 100)

//300

function test() {
    console.log(a);
    console.log(foo());
    var a = 1;
}

function foo() {
    return 2
}

test()

//2

var myNumber = 111;
function updateNumber() {
    var myNumber = 222
    myNumber = myNumber + 111;
}

updateNumber();
console.log(myNumber)

//111

function bat(man, maxPower) {
    power = maxPower
    try {
        man()
    } finally {
        power = 400;
    }
    console.log(power)
}

function man() {
    try {
        throw new Error();
        power = 100;
    } catch(e) {
        power = 200;
    } finally {
        power = 300;
    }
}

bat(man, 100)
//400

let power = 999;
function elephant(spider) {
    let power = 50;
    try {
        spider();
    } catch(e) {
        power = 70;
    }
    console.log('Elephants power is: ', power);
}

function spider() {
    elephant(tiger);
}
function tiger() {
    power = 30;
    console.log('Tigers power is: ', power);
}

spider();

// Tigers power is:  30
// Elephants power is:  50

let power = 666;
function man() {
    power = 10;
    console.log('Mans power is: ', power);
}

function bat(spider) {
    power = 30;
    try {
        spider();
    } catch(e) {
        power = 20
    }
    console.log('Bats power is: ', power);
}

function spider(){
    bat(man);
}
spider()

// Bats power is: 10
// Mans power is:  10

function modulus(value1, value2) {
    var results;
    results = value1 % value2;
    return results
}

describe = ('Test Case Suites: ', function () {
    // Test 1
    it('Test case 1: ', function() {
        expect(modulus(15, 7)).toEqual(1);
    });
    //Test 2
    it('Test case 2: ', function() {
        expect(modulus(15, 8)).toBeGreaterThan(1);
    });
    //Test 3
    it('Test case 3: ', function() {
        expect(modulus(15, 15)).toBeTruthy(1);
    });
    //Test 4
    it('Test case 4: ', function() {
        expect(modulus(15, 15)).toBeDefined(1);
    });

});

//Test 2

var str = 'The best things3 are free in life';
var pattern = new RegExp("[a-z]+[0-9]");
var result = pattern.exec(str)
console.log(result)

//things3

var i = 999;
function myFunction() {
    for(var i = 1; i<=10;i++) {
        console.log(i);
    }
}
myFunction()

// 1 2 3 4 5 6 7 8 9 10

var i = 666;
function myFunction() {
    for(var i = 1; i<=10;i++) {
        console.log(i);
    }
}
myFunction()

// 1 2 3 4 5 6 7 8 9 10

counts = [1, 2, 3, 4];
counts.map(_=> Math.pow(_, 2));
console.log(counts);

// 4 [1, 2, 3, 4]


function man() {
    power = 10;
    console.log('Mans power is: ', power);
}

function bat(spider) {
    var power = 30;
    try {
        spider();
    } catch(e) {
        power = 20
    }
    console.log('Bats power is: ', power);
}

function spider(){
    bat(man);
}
spider()

// Mans power is:  10
// Bats power is:  30

function good(greet) {
    console.log('Good');
    return greet;
}
function call(greet) {
    console.log('Hi');
    good(greet());
}
function greet() {
    console.log('Morning');
}
call(greet);

// Hi
//Morning
// Good

const myFunction = () => console.log('Hello ') || 'World!';
let returnValue = myFunction();
console.log(returnValue);

// Hello
// World!

function emailFormat(email) {
    try {
        if(email.match(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/)) {
            console.log('Matching the email format!!')
            return true;
        } else {
            throw new Error('Email invalid');
        }
    } catch(e) {
        console.log(error.message);
    } finally {
        console.log('Into the finnaly block!!')
    }
}
console.log(emailFormat('hello.123@example.com'));

// Matching the email format!!
// Into the finnaly bloock!!
// true

// REGEX Validation
function validateName(name){
    if(name.match(/[J|j][a-z]{3,5}/)){
        return true;
    }
    else {
        return false;
    }
}

validateName('Jasper')

// True

function validateNum(phoneNum){
    if(phoneNum.match(/^[6-9]\d{9}$/)){
        return true;
    }
    else {
        return false;
    }
}

validateNum(91348763490)
// /^[6-9][0-9]{9}$/
// /^[6789]\d{9}$/
// /^[6-9]\d{9}$/)

var helloworld = function() {
    return 'Hello World'
};

describe('Hello World', function() {
    it('Should return hello world', function() {
        expect(helloworld()).toEqual('Hello World')
    })
})

// toEqual

