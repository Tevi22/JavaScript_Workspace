/*
Problem Statement:
A teacher is in the process of generating few reports based on the marks scored by the students of her class in a project based assessment.


1: Assume that the marks of her 10 students are available in an array. 
2: The marks are out of 25.


Write a JavaScript program to implement the following functions:

find_more_than_average(): Find and return the percentage of students who have scored more than the average mark of the class.


generate_frequency(): Find how many students have scored the same marks. For example, how many have scored 0, how many have scored 1, how many have scored 2, and so on, find it up to how many have scored 25. The result should be populated in a list and returned.


Sample Input:
list_of_marks = [12,18,25,24,2,5,18,20,20,21]


Sample Output:
more than average: 70.0
frequency: [0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 2, 0, 2, 1, 0, 0, 1, 1]
*/

function findMoreThanAverage(studentMarks) {
    let totalMarks = 0
    let count = 0

    for (let i = 0; i < studentMarks.length; i++){

        totalMarks += studentMarks[i];

    }

    let averageMark = totalMarks / studentMarks.length;

    for (let i = 0; i < studentMarks.length; i++) {
        count++
    }

    let percentage = (count / studentMarks.length) * 100;
    return  percentage.toFixed(1);
}

function generateFrequency(studentMarks) {

    let frequency = new Array(26).fill(0);

    for (let i = 0; i < studentMarks.length; i++) {
        let mark = studentMarks[i];
        frequency[mark]++;
    
    }

    return frequency;
}

let studentMarks = [12, 18, 25, 24, 2, 5, 18, 20, 20, 21];
let moreThanAverage = "More than aveage: " + findMoreThanAverage(studentMarks);
let markFrequency = 'Frequency is : ' + generateFrequency(studentMarks);

console.log(moreThanAverage);
console.log(markFrequency)