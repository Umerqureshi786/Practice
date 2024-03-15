// // Create Calculator

// var firstNumber = parseInt (prompt("Enter Your First number"));
// var secondNumber = parseInt (prompt("Enter Your second number"));
// var operator = prompt("Enter operator");

// if(operator=="+"){
// alert(firstNumber + secondNumber)
// }

// else if(operator=="-"){
// alert(firstNumber - secondNumber)

// }

// else if(operator=="*"){
// alert(firstNumber * secondNumber)

// }

// else if(operator=="/"){
// alert(firstNumber / secondNumber)

// }

// else {
//     alert("You Enter Invalid Operator")
// }


// Create Calculator 
// var firstNumber = parseInt(prompt("Enter first Number"));
// var secondNumber = parseInt(prompt("Enter second Number"));
// var operator = prompt("Enter operator")

// if(operator=="+"){
//     alert(firstNumber+secondNumber);
// } else if(operator=="-"){
//     alert(firstNumber-secondNumber);
// } else if (operator=="*"){
//     alert(firstNumber*secondNumber);
// }else if(operator=="/"){
//     alert(firstNumber/secondNumber);
// } else{
//     alert("Your enter invalid details");
// }







// Practice //


// var abc="abc";
// var abc;
// abc="abc";
// alert(abc)


// var myWeight=50;
// var newWeight= myWeight+20
// alert(newWeight)

// var snake_case="snakeCase";
// var camelCase="camelCase";
// var PascalCase="PascalCase";

// alert(snake_case)
// alert(camelCase)
// alert(PascalCase)


// We have 5 types of primitive data type://

// var myString="Umar";
// var myNumber=786;
// var myboolean = true;
// var myUndefined;
// var myNull=  ;

// // Non-primitive Data types are //

// var myObject = {myName="umar" , age:26 , rollNo:175060};
// var myArray = [];


// var halfAge = 11
// var halfAge2 = 11
// var myAge = halfAge + halfAge2
// alert(myAge)




// var myAgeString = "23";
// var myAgeNumber = 23;

// var allAge = myAgeNumber + myAgeString;
// alert(allAge)

// var greeting = "Hello! How are You";
// alert(greeting)


// var versionsTill2015 = 6
// var yearsAfter2015 = 9
// var esVersions = versionsTill2015 + yearsAfter2015;
// alert(esVersions);

// var numberOfRows = 10;
// var capacityOfRow = 3;
// var totalStudents = numberOfRows * capacityOfRow;
// alert(totalStudents);


// var grapes = 5;
// var numberOfPeople = 10;
// var numberOfPieces = grapes / numberOfPeople;
// alert(numberOfPieces);


// var myName=prompt("Enter your Name");
// var newName= "Mr" + myName;
// alert(newName)

// var myNum=5;
// // var myNum= myNum + 4;
// myNum++
// alert(myNum)

// var TotalCost= 2*2+6-10 ;
// alert(TotalCost)



// var greetingMessage = "Hello! How are you"
// var userName = prompt("Enter Your name")
// var abc = "123"
// parseInt(abc)
// var greetedUser = greetingMessage + " " + userName
// alert(greetedUser)



// var enterValue = prompt("please enter value");
// var secondValue = prompt("please enter second value");

// // for only value ==
// // for value and data type ===

// var operator = "+"
// if (secondValue == 0) {
//   alert("You Enter 0");
// } else if (secondValue == 1) {
//   alert("You Enter 1");
// } else {
//   alert("You Enter Other Value");
// }   


// var userName = prompt("Enter Your Name","Sanaullah");
// var prefix = "Haji";
// var user = prefix + " " + userName

// alert(user)


// var UserName3=prompt("Enter your name", "Umar Qureshi");
// var prefix="Mr";
// var finalName= prefix + " " + UserName3;
// alert(finalName)


// var isInstructor1Present = prompt("teacher1 a gye", "Yes");
// var isInstructor2Present = prompt("teacher2 a gye", "Yes");
// var isStudentPresent = prompt("bache a gye", "Yes");

// if (isInstructor2Present === "yes" && isStudentPresent == "yes") {
//     alert("Start Class")
// } else {
//     alert("Class me betho")
// }

// var htmlQuiz = prompt ("Enter if you passed Html Quiz", "yes");
// var cssQuiz =prompt ("Enter if you passed Css Quiz", "yes");

// if(htmlQuiz==="yes" || cssQuiz==="yes"){
//     alert("You have passed");
// }else {
//     alert("You failed");
// }

  / var student1 = "Ali";
// var student2 = "Umar";
// var student3 = "Usman";

// console.log("var:" , student1,student2,student3);

// var students = ["Ali", "Umar", "Usman"];
// console.log("Array:", students);
// document.write(students[2]);
// alert(students)

// var students=["Rehan", "Farhan"];
// var student1= prompt("Enter student name");

// students.push(student1)
// console.log(students);



// var students=["Rehan", "Farhan","Ali"];
// students.pop()
// console.log(students);



// var students = ["Student1","Student2","Student3"]
// students.pop()

// console.log(students);

// var myUsers = [];
// var userName = prompt("User name");
// myUsers.push("umar");
// myUsers.push("haider");
// myUsers.push("salman");
// myUsers.push(userName)
// myUsers.unshift("aliiiiii")
// myUsers.shift()

// console.log(myUsers);


// myUsers.pop();
// console.log(myUsers);


// var students = ["ali", "umar", "fazal","new"];
// students.splice(1,2)
// // students.splice(1,1,"uzair","haidar")

// console.log(students);



// var students=["a", "b", "c", "d", "e"];
// students.push("Z","X");
// students.pop();
// students.unshift("G");
// students.shift();
// // students.splice(1,2);
// // students.slice(0,1);
// console.log(students);


var students = ["a", "b", "c", "d", "e", "f"];
var newArray = students.slice(0,4);
console.log(newArray);

