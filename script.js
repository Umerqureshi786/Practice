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


var isInstructor1Present = prompt("teacher1 a gye", "Yes");
var isInstructor2Present = prompt("teacher2 a gye", "Yes");
var isStudentPresent = prompt("bache a gye", "Yes");

if (isInstructor2Present === "yes" && isStudentPresent == "yes") {
    alert("Start Class")
} else {
    alert("Class me betho")
}

var htmlQuiz = prompt ("Enter if you passed Html Quiz", "yes");
var cssQuiz =prompt ("Enter if you passed Css Quiz", "yes");

if(htmlQuiz==="yes" || cssQuiz==="yes"){
    alert("You have passed");
}else {
    alert("You failed");
}

  / var student1 = "Ali";
// var student2 = "Umar";
// var student3 = "Usman";

// console.log("var:" , student1,student2,student3);

var students = ["Ali", "Umar", "Usman"];
console.log("Array:", students);
document.write(students[2]);
alert(students)

var students=["Rehan", "Farhan"];
var student1= prompt("Enter student name");

students.push(student1)
console.log(students);



var students=["Rehan", "Farhan","Ali"];
students.pop()
console.log(students);



var students = ["Student1","Student2","Student3"]
students.pop()

console.log(students);

var myUsers = [];
var userName = prompt("User name");
myUsers.push("umar");
myUsers.push("haider");
myUsers.push("salman");
myUsers.push(userName)
myUsers.unshift("aliiiiii")
myUsers.shift()

console.log(myUsers);


myUsers.pop();
console.log(myUsers);


var students = ["ali", "umar", "fazal","new"];
students.splice(1,2)
// students.splice(1,1,"uzair","haidar")

console.log(students);



var students=["a", "b", "c", "d", "e"];
students.push("Z","X");
students.pop();
students.unshift("G");
students.shift();
// students.splice(1,2);
// students.slice(0,1);
console.log(students);


var students = ["a", "b", "c", "d", "e", "f"];
var newArray = students.slice(0,4);
console.log(newArray);



var students = ["a", "b", "c", "d", "e", "f"];
var newArray = students.slice(0,2);
console.log(newArray);


var a=5;
var a=6;
console.log(a);

let a=5;
 a=8;
console.log(a)

const a=5;
console.log(a);




var UserName=["Umar", "Ahsan", "Iqra", "Ujalay", "Ali", "Usman"];
UserName.push("Juma","Salman")
UserName.pop()
UserName.unshift("Abdullah")
UserName.shift()
UserName.splice(1,2)
UserName.slice(0,3)

console.log(UserName);



for (var i = 0; i <= 10; i++) {
  console.log(i);
}



for (var i = 5; i > 0; i--) {
  console.log(i);
}


let myArray = [1, 2, 3, 4, 5];
console.log(myArray.length); 

let myString = "Hello world!";
console.log(myString.length); 



var newArray = ["a", "b", "c", "d", "e", "f"];
for (var i = newArray.length - 1; i >= 0; i--) {
  console.log(newArray[i]);
}


var students = ["zeeshan", "IT", "haider", "World YT"];
for (var i = 0; i < students.length; i++) {
  console.log(students[i]);
  if (students[i] === "IT") {
    break;
  }
  console.log("console2", students[i]);
}


var maritalStatus = prompt("Are You Married");
var casesMaritalStatus = maritalStatus.toLowerCase();

console.log(maritalStatus, casesMaritalStatus, "case");

console.log(maritalStatus.toUpperCase(), "Upper");
if (maritalStatus.toUpperCase() === "YES") {
  console.log("Mubarak");
} else {
  console.log("Earn some money");
}


var myName = "ubaid";
var firstLetter = myName.slice(0,2);
// var remainingLetter = myName.slice(1);

var newName = firstLetter.toUpperCase();
console.log(myName, newName);

var newArray = ["a", "b", "c", "d", "e", "f"];
for (var i = newArray.length - 1; i >= 0; i--) {
  console.log(newArray[i]);
}


var students = ["zeeshan", "IT", "haider", "World YT"];
for (var i = 0; i < students.length; i++) {
  console.log(students[i]);
  if (students[i] === "IT") {
    continue;
  }
  console.log("console2", students[i]);
}

var maritalStatus = prompt("Enter are you married");
 maritalStatus.toUpperCase()
    // console.log(maritalStatus, newMaritalStatus);
    if(maritalStatus.toUpperCase() ==="YES"){
console.log("Mubarak ho");
    } 
    else {
        console.log("Earn some money");
    }


    if (maritalStatus.toUpperCase() === "YES") {
  console.log("Mubarak");
} else {
  console.log("Earn some money");
}


var myName="Umar";
var firstLetter= myName.slice(0,2);
var remainingLetter=myName.slice(1);
var newName=firstLetter.toUpperCase() + remainingLetter.toLowerCase();

console.log(newName);

var studentName = "Ahsan is good student";
for (var i = 0; i < studentName.length; i++) {
  console.log(studentName[i]);
}


var studentName = "Rehaaan khan";
for(i=0; i < studentName.length; i++){
console.log(studentName[i]);
}


var iIndex = -1;
var variable1 = "Thihsh";
console.log(variable1.lastIndexOf("h"));
for (var i = 0; i < variable1.length; i++) {
  if (variable1.charAt(i) === "h") {
    iIndex = i;
    break;
  }
}
console.log(iIndex);
console.log(variable1.charAt(0), variable1[0]);


var stringValue = "World War Two was biggest war ever";
var twoIndex = stringValue.indexOf("Two"); //10
var string1 = stringValue.slice(0, twoIndex);
var string2 = stringValue.slice(twoIndex + 3);

var newString = string1 + "2" + string2;
console.log(newString);

// alert("Alhamdulillah");
 var originalNum = "23";
 var newNum = originalNum + 7;
console.log(newNum);

var spec = prompt("Your species?", "human");


var question = "Your species?";
var defaultAnswer = "huma";
var spec = prompt(question, defaultAnswer);

var myName=prompt("Umar", "yes");
if (myName==="yes"){
    console.log(true);
} else {
    console.log("Not valid")
}



Practice.......................
    // alert("Umar");


// var questionOne="What is your Name";
// var defaultAnswer="Rehan";
// var Name=prompt(questionOne, defaultAnswer);
// console.log("Name=" + Name);



// const myArray=["a", "b","c", "d", "e", "f"];
// myArray[0]=1;
// myArray[2]=5;
// myArray[4]=3;
// myArray[7]=4;
// myArray.push(8)
// console.log(myArray[4]);


//Push Program
// const myArray = ["a", "b", "c", "d", "e"];

// function addElement(x) {
//     const myVar = myArray.length;
//     myArray[myVar]=x;
//     console.log(myArray);

// }
// addElement(5)
// addElement("Rehan")
// addElement("Ali")

// const myArray = [1, 2, 3, 4, 5, 6, 7];
// console.log(myArray.length); // Output: 5


//Pop Program
// const myArray = ["a", "b", "c", "d", "e"];

// function removeElement() {
//     const lastIndex = myArray.length - 1; // Get the index of the last element
//     const removedElement = myArray[lastIndex]; // Store the last element to be removed
//     myArray.length = lastIndex; // Adjust the length of the array to remove the last element
//     console.log("Removed element:", removedElement);
//     console.log("Updated Array:", myArray);
// }

// removeElement();
// removeElement();
// removeElement();



Finding Age:
const userDetails = {
    name: "Umar",
    gender: "Male",
    dob: "27-06-1998",

    getAge: function () {
        const currentDate = new Date();
        const dobDate = new Date(userDetails.dob);
        console.log(currentDate, "new date", dobDate);
    },
};
userDetails.getAge();











