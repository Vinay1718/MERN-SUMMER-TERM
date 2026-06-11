// var a=10;
// var b=20;
// var c=a+b;
// //old way of concatenating strings
// console.log("The sum of "+a+" and "+b+" is "+c);


//Termplate literals
// console.log(`the sum of ${a} and ${b} is ${c}`);

const r= require('readline');

const rl = r.createInterface({
    input:process.stdin,
    output:process.stdout
});

rl.question('Enter First Number:', (a)=>{
    rl.question('Enter Second Number:', (b)=>{
        const sum = Number(a)+ Number(b);
        console.log(`The sum of ${a} and ${b} is ${sum}`);
        rl.close();
    });
})

// write code to check if a number is even or odd using readline module 
// and take the input from user/


const rl = r.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question("enter a number", (n) => {
    if (n % 2 == 0) {
        console.log(`${n} is Even number`);
    } else {
        console.log(`${n} is Odd number`);
    }
    rl.close();
});