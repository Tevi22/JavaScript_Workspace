class Employee{
    constructor(id,name,age){
        this.id=id;
        this.name=name;
        this.age=age;
        // this keyword is used to create attributes inside a class. This is equivalent to self in Python
    }
    swipeIn(){
        console.log("Employee "+this.id+" has swiped in at "+new Date());
    }
}
e1=new Employee(100,"Mark",23);
e2=new Employee(101,"Jane",24);
console.log(e1.age);
e1.swipeIn();
e2.swipeIn();

/*
Different OOP Features

Class-Can be created using "class" keyword
Constructor- Can be created using "constructor" keyword
Attributes-Variables created as this.<variableName> inside the constructor become attributes
Methods-Functions created inside the class become methods
Object-Created using the new keyword
Access-The attributes and methods can be accessed using the dot operator on the object
*/

// Static methods in class:

class Employee{
    constructor(id,name,age){
        this.id=id;
        this.name=name;
        this.age=age;
    }
    swipeIn(){
        console.log("Employee "+this.id+" has swiped in at "+new Date());
    }
    static code(){
        console.log("Employee is coding");
    }
}
Employee.code();
//Static values can be accessed only using the classname and not using this keyword. Else it will lead to an error.

//Inheritance:

//In JavaScript, one class can inherit another class using the extends keyword. The subclass inherits all the methods ( both static and non-static ) of the parent class.
//In the below code, we are creating a child class called PartTimeEmployee which extends the Employee class. 

class Employee{
    constructor(id,name,age){
        this.id=id;
        this.name=name;
        this.age=age;
    }
    swipeIn(){
        console.log("Employee "+this.id+" has swiped in at "+new Date());
    }
    static code(){
        console.log("Employee is coding");
    }
}
class PartTimeEmployee extends Employee{
}
e1=new Employee(100,"Mark",23);
e2= new PartTimeEmployee();
PartTimeEmployee.code();
e2.swipeIn();
//However, e2.swipeIn() gives undefined for the id. This is because we are not passing the values to the parent constructor.

//The super keyword:

class Employee{
    constructor(id,name,age){
        this.id=id;
        this.name=name;
        this.age=age;
    }
    swipeIn(){
        console.log("Employee "+this.id+" has swiped in at "+new Date());
    }
    //static method that can be called only by using class name.
    static code(){
        console.log("Employee is coding");
    }
}
//child class that can inherit all the properties of parent class(Employee)
class PartTimeEmployee extends Employee{
    constructor(id,name,age,contractPeriod){
        super(id,name,age);
//In order to access the parent class constructor, the child class constructor need to invoke it using super() and pass the necessary values. 
//Note that super keyword must appear before this keyword in constructor.        
        this.contractPeriod=contractPeriod;
    }
}
e1=new Employee(100,"Mark",23);
e2= new PartTimeEmployee(101,"Jane",34,3);
PartTimeEmployee.code();//Output: Employee is coding
e2.swipeIn(); //Output: Employee 101 has swiped in at Wed Jul 19 2023 00:35:50 GMT+0530 (India Standard Time)
console.log(e2.contractPeriod); //Output: 3
