var result = 0;

function add(a, b) {
    result = a + b;
    return result;
}
function isZero(b) {
    return (b == 0) ? true : false;
}
function divide(a, b) {
    return isZero(b) ? "Cannot divide by zero" : result = a / b;
}
function substract(a, b) {
    return result = a - b;
}
function multiply(a, b) {
    return result = a * b;
}

//Jasmine Test for function add()

describe('Total of a and b calculation Suite: ',function(){
    it('Test Case 1: Input are correct', function(){
        expect(add(10,10)).toEqual(20)
    })
})

describe('Total of a and b calculation Suite: ',function(){
    it('Test Case 1: Input are correct', function(){
        expect(add(10,10)).toBeTruthy()
    })
})

//Jasmine Test for function isZero()

describe('b is Zero calculation Suite: ',function(){
    it('Test Case 1: Input are correct', function(){
        expect(isZero(0)).toEqual(true)
    })
})

describe('b is Zero calculationSuite: ',function(){
    it('Test Case 1: Input are correct', function(){
        expect(add(10)).toBeTruthy()
    })
})

//Jasmine Test for function divide()