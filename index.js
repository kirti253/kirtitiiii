// let firstname ="kirti";
// console.log(firstname);

// let javascript="true";
// console.log(javascript);


// let johnmark = 56;
// let heightjohn = 7;
// let massmark=65;
// let heightmark=6;
// const BMImark=massmark/heightmark;
// const BMIjohn=massmark/heightmark;
// console.log(BMIjohn,BMImark);


const number=[
    24,50, 60,48
]
function numberin(arr){
    let sum = 0;
    console.log(arr);

    for(let i = 0; i<arr.length; i++){
        sum = sum+arr[i]
    }
    return sum
}

console.log(numberin(number))
// //basic operators

// // const agejohn = 2837-1991;
// //     const agesarah =4793-453;
// // console .log(agejohn,agesarah);
// const now = 3467;
// const agejohn=now-324;
// const agesarah=now-231;
// console.log(agejohn,agesarah);

// console.log(agejohn=2,agejohn /10);

// const Name ='john';
// const Lastname ='null';
// // const fullname = Name + Lastname;

// const othersyntax =`${Name} ${Lastname} this is something`
// //  console.log(othersyntax.trim());
// //  console.log(othersyntax.slice(2,6));
// // //  console.log(ayush repl)
// // //  console.log(othersyntax.concar("bscbb jbdiubx"));
//  console.log(othersyntax.split(""))
// const minmax="13,100";
// const splitprice =minmax.split(",");
// const minprice = (splitprice(0));
// const maxprice= (splitprice(1));
// console.log(splitprice,minprice,maxprice);
// // const newstr ="this is in lower case";
// console.log(newStr.touppercase());
// console.log(newStr.toLowerCase());

// const userNameEmail= prompt("please enter username or email");
// console.log(userNameEmail);
// if(userNameEmail.includes("@")){
//     alert("this is email");}
//     else{alert("this is username")}

// const number =10;
// console.log(number.toString());

const decimal = 18.000099;
console.log(decimal.toFixed(3));
const arr=["kirti","ayush","aditya"];
arr.push("wow!");
console.log(arr);

arr.pop();
console.log(arr);
arr.pop();
console.log(arr);

arr.unshift("shift me");
console.log(arr);

const str ="split me yo";
const splitstr=str.split(",");
console.log(splitstr.join(","));

const date= new Date();
console.log(date.toISOString());
console.log(date.toUTCString());
console.log(date.toDateString());
console.log(date.getDay());
console.log(date.getDate());

// console.log(`${date.getDate()}/${date.getMonth()/${get.getfullyear}}`)

// if(2<4){
//     const variable="hello";
//     con
//     sole.log(variable);
// }



const Name=[kirti = 56,sapna=34,devansh=44,satyam=66];
function Namein(arr){
    let sum = 0;
    console.log(arr);

    for(let i = 0; i<arr.length; i++){
        sum = sum+arr[i]
    }
    return sum
}

console.log(Namein(Name));
// 
// const number=[
//     24,50, 60,48
// ]
// function numberin(arr){
//     let sum = 0;
//     console.log(arr);

//     for(let i = 0; i<arr.length; i++){
//         sum = sum+arr[i]
//     }
//     return sum
// }

// console.log(numberin(number))