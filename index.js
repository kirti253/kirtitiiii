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

// const dolphin = { s1: 96, s2: 108, s3: 89 };

// const koala = { s1: 88, s2: 91, s3: 110 };
// function scorein(dophin, koalas) {
//     const averageDolphinScore = (dolphin.s1 + dolphin.s2 + dolphin.s3) / 3;
//     const averageKoalaScore = (koala.s1 + koala.s2 + koala.s3) / 3;

//     if (averageDolphinScore > averageKoalaScore) {
//         console.log(averageDolphinScore);
//     } else {
//         console.log(averageKoalaScore);
//     }
//     if (averageDolphinScore > averageKoalaScore) {
//         console.log("dolphins are winner");
//     } else {
//         console.log("koalas won the mtach");
//     }
// }
// scorein(dolphin, koala);


// const dolphin = { s1: 96, s2: 108, s3: 89 };

// const koala = { s1: 88, s2: 91, s3: 110 };
// function scorein(dophin, koalas) {
//     const averageDolphinScore = (dolphin.s1 + dolphin.s2 + dolphin.s3) / 3;
//     const averageKoalaScore = (koala.s1 + koala.s2 + koala.s3) / 3;

//     if (averageDolphinScore > averageKoalaScore&& averageDolphinScore >= 100) {
//         console.log(averageDolphinScore);
//         console.log("dolphins are winner");
//     } else if (averageDolphinScore < averageKoalaScore&& averageDolphinScore>=100){
//         console.log(averageKoalaScore);
//         console.log("dolphins are winner");
//     }else{
//         console.log("draw");
//     }

// }
// scorein(dolphin, koala);

// const dolphin = { s1: 97, s2: 112, s3: 101 };

// const koala = { s1: 109, s2: 95, s3: 123 };
// function scorein(dophin, koalas) {
//     const averageDolphinScore = (dolphin.s1 + dolphin.s2 + dolphin.s3) / 3;
//     const averageKoalaScore = (koala.s1 + koala.s2 + koala.s3) / 3;

//     if (averageDolphinScore > averageKoalaScore&& averageDolphinScore >= 100) {
//         console.log(averageDolphinScore);
//         console.log("dolphins are winner");
//     } else if (averageDolphinScore < averageKoalaScore){
//         console.log(averageKoalaScore);
//         console.log("koala are winner");
//     }else{
//         console.log("draw");
//     }

// }
// scorein(dolphin, koala);


const randomNo=Math.random() * 100;
const removeDecimal = Math .trunc(randomNo);
const roundUp =Math.ceil(randomNo);
const roundDown = Math.floor(randomNo);
console.log(randomNo);
// console.log(removeDecimal);
console.log(roundUp);
console.log(roundDown);
