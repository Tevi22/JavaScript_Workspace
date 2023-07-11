/* 
    Problem Statement:
    Write a JavaScript loop to print the below output:
    1
    1 2
    1 2 3
    1 2 3 4
    1 2 3 4 5
*/

let x,y;
let char = "";

for (x = 1; x <= 5; x++) {

    for (y=1; y <= x; y++) {
        if (y==1){
            char = "1";;
        } else if (y==2){
            char = "1 2";
        } else if (y == 3) {
            char = "1 2 3";
        } else if (y==4) {
            char = "1 2 3 4";
        } else {
            char = "1 2 3 4 5";
        }
    }
    console.log(char);
    char = "";
}

// Q.1
let employee = {
    empId:'I1001',
    empName: {
        firstName: 'John',
        middleName: "Thomson",
        lastName: "Mark"
    },
    empStatus: "Active"
};

let {firstName: middleName, lastName} = employee.empName
console.log(middleName) // undefined

// Q.2

let states = [];
states.push(['Rihana',
    {
        empId: "I1001",
        city: 'BNG',
        age: 25
    }
])

console.log(...states) // Entire array is printed