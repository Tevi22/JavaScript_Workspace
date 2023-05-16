/*
    Problem Statement:
    1. Simulating a periodic stock price change and displaying on the console.

    Approach to the solution:
    1. Create a method which returns a random number - use Math.random, floor and other methods to return a rounded value.
    2. Invoke the method for every three seconds and stop when the count is 5 – use the setInterval method.
    3. Since setInterval is an async method, enclose the code in a Promise and handle the response generated in a success callback.
    4. The random value returned from the method every time can be used as a stock price and displayed on the console.
*/
// Creating object to return random number

function randomNum() {
  const num = Math.floor(Math.random() * 100)
  return new Promise((resolve,reject) => {
    let myInterval = setInterval(randomNum,3000); {
      for (let i = 0; i<5; i++) {
        resolve(console.log("Stock price is: "+"$"+num))
        i++
        if (i >= 5) {
          reject("Reject: Error")
        }
      }
    }
  })
}

console.log(randomNum())


// Task #2
let counter = 0

let timer = setInterval(randomNum(), 3000); {
 for (let i = 0; i<5; i++){
  console.log("Stock price is: "+"$"+randomNum())
  i++
  if (i >= 5) {
    clearInterval(timer)
  }
 }
}

var myPromise = new Promise(randomNum (resolve, reject),3000), {
    setInterval(randomNum ()); {
      resolve("success")
    };
};
myPromise.then{
  randomNum (data) {
    console.log(data + " received in 3 seconds");
  },
  randomNum (error) {
    console.log(error)
  }
};

console.log("Stock price is: "+"$"+randomNum())

