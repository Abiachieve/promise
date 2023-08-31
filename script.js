// const b = parseInt(prompt("Enter the number"));
// const a = new Promise((resolve,reject)=>{
//     if(b%2==0)
//     {
//         resolve("Even Number")
//     }
// else{
//     reject("odd Number")
// }
// })
// console.log(a);

// const b = parseInt(prompt("Enter your age for vote"));
// const age = new Promise((resolve,reject)=>{
//     if(b>18)
//     {
//         resolve("You are eligible to vote")
//     }
// else{
//     reject("You are not eligible to vote")
// }
// })

// age.then((data)=>console.log(data)).catch((error)=>console.log(error))


// function foo(num){
//     return new Promise((resolve,reject)=>{
//         reject("this is rejected"+" "+num);
//         resolve("this is resolved"+" "+num);
        
//     });

// }
// foo(12).then((data)=>console.log(data)).catch((error)=>console.log((error)))

// function mul(num){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>resolve(num*2),2000);
//     });
// }
// mul(5).then((data)=>{
//     console.log(data);
//     return mul(data)  //return mul 10 output
// }).then((data1)=>{
//     console.log(data1);
//     return mul(data1)
// }).then ((data2)=>{
//     console.log(data2).catch((error)=>console.log(error))
// })

// const p1 = new Promise((resolve,reject)=>{
//     if(true){
//         setTimeout(()=>resolve("p1 is resolved"),2000);
//     }
//     else{
//         setTimeout(()=>reject("p1 is resolved"),4000);
//     }
    
// });
// const p2 = new Promise((resolve,reject)=>{
//     if(false){
//         setTimeout(()=>resolve("p1 is resolved"),2000);
//     }
//     else{
//         setTimeout(()=>reject("p1 is resolved"),4000);
//     }
    
// });
// const p3 = new Promise((resolve,reject)=>{
//     if(true){
//         setTimeout(()=>resolve("p1 is resolved"),2000);
//     }
//     else{
//         setTimeout(()=>reject("p1 is resolved"),4000);
//     }
    
// });
// Promise.all([p1,p2,p3])
//     .then((data)=>console.log(data))
//     .catch((error)=>console.log(error));

const p1 = new Promise((resolve,reject)=>{
    if(true){
        setTimeout(()=>resolve("p1 is resolved"),2000);
    }
    else{
        setTimeout(()=>reject("p1 is resolved"),4000);
    }
    
});
const p2 = new Promise((resolve,reject)=>{
    if(false){
        setTimeout(()=>resolve("p1 is resolved"),2000);
    }
    else{
        setTimeout(()=>reject("p1 is resolved"),4000);
    }
    
});
const p3 = new Promise((resolve,reject)=>{
    if(true){
        setTimeout(()=>resolve("p1 is resolved"),2000);
    }
    else{
        setTimeout(()=>reject("p1 is resolved"),4000);
    }
    
});
const res= Promise.allSettled([p1,p2,p3]).then((data)=>data.forEach((res) => console.log(res)));
