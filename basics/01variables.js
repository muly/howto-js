// # variables


// ## using let


// ### declaring and initializing separately
let studentAge
console.log(studentAge) // undefined
studentAge = 30
console.log(studentAge)

// ### declaring and initializing
let studentName = "srini"
let isStudent = true;
console.log(studentName, isStudent);

// ### multiple variables using single let
let studentAddress = "123 st",
    marks = 100;
console.log(studentAddress, marks);


// ## changing value
marks = 150;
console.log(marks);


// ## using var (not recommended)

// ### syntax is same as let
var studentZip = "abc";
console.log(studentZip);

// 1. "var" is similar to "let", but "var" allows using the variable before it is declared. but "let" will result in error if done so.
console.log(studentFavSubject); // undefined
var studentFavSubject = "math";

console.log(studentFavTeacher); // ERROR: Cannot access 'studentFavTeacher' before initialization
let studentFavTeacher = "abc";

// 2. "var" has scope leak outside the code block, where as "let" doesn't
{
    let age = 10;
}
console.log(age); // ERROR: age is not defined

{
    var totalMarks = 100;
}
console.log(totalMarks); // 100

