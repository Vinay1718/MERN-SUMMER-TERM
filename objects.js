/*
map, filter, reduce, function of objects, destructuring, 
spread operator, rest operator, classes, inheritance,
encapsulation, polymorphism, abstraction, modules,
promises, async/await, error handling, callbacks, 
event loop, closures, hoisting,
scope, this keyword, prototype chain, 
ES6 features (let, const, arrow functions, template literals),
DOM manipulation, AJAX, JSON parsing/stringifying.
*/



// const student={
//     name:"jay",
//     age:22,
//     city:"surat",
//     isGraduated:true,   
//     reistationNumber:12345,
//     hobbies:["cricket","football","coding"],
// };

// console.log(student.name);
// console.log(student.isGraduated);
// console.log(student.hobbies[2]);



const students =
[
    {
        name: "Ritu Raj",
        totalMarks: 85,
        age: 22,
        city: "Delhi",
        isGraduated: true,
        registrationNumber: 12345,
        hobbies: ["Reading", "Traveling", "Cooking"],
    },
    {
        name: "Mradul",
        age: 19,
        totalMarks: 90,
        city: "Delhi",
        isGraduated: true,
        registrationNumber: 5678,
        hobbies: ["Reading", "Traveling", "Cooking"],
    },
    {
        name: "Harsh",
        age: 20,
        totalMarks: 88,
        city: "Delhi",
        isGraduated: true,
        registrationNumber: 78910,
        hobbies: ["Reading", "Traveling", "Cooking"],
    },
    {
        name: "Anandi",
        age: 19,
        totalMarks: 92,
        city: "Delhi",
        isGraduated: true,
        registrationNumber: 7789,
        hobbies: ["Reading", "Traveling", "Cooking"],
    }
];

//console.log(students);

const arr=[2,3,4,5,6];

const doubledArr= arr.map((num)=>{
    return num*2;
});

console.log("Original Array:", arr);
console.log("Doubled Array:", doubledArr);


const updatedStudents = students.map (s => {
    const p = (s.totalMarks/150)*100;
    // s.percentage=percentage.toFixed(2);

    return {
        ...s,
        percentage:p.toFixed(2).toString()+"%"
    }
});

console.log("Original Students:", students);
console.log("Updated Students with Percentage:", updatedStudents);

//Reduce:

const sumOfAges= students.reduce((accumulator, currentValue) => {
    return accumulator + currentValue.age;

}, 0);

console.log("Sum of Ages: ", sumOfAges);

//Use Reduce to calculate the average of marks 

const avgMarks= students.reduce((accumulator, currentValue) => {
    return (accumulator + currentValue.totalMarks/400)*100;
});

console.log("Sum of all toatal marks of a students: ", avgMarks);

//Filter Function in JS:

const studentsAbove85 = students.filter(student => student.totalMarks/150*100 > 60);

console.log("Students with Total Marks above 85:", studentsAbove85);

/*
1. Add result status to each student object based on their percentage (e.g., "Pass" if percentage is above 60%, otherwise "Fail").

2.Find the average marks of all students using the reduce function.
*/