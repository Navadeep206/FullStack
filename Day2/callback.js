// const add=(a,b)=>{
//     const add=a+b;
//     return add;
// }
// const mult=(a,b)=>{
//     const mult=a*b;
//     return mult;
// }
// const result=add(400,700);
// const finalresult=mult(result,1.18);
// console.log(finalresult);
const add=(a,b,cb)=>{
    const add1=a+b;
    cb(add1,1.18);
}
const mult=(a,b)=>{
    const mult=a*b;
    console.log(mult);
}
const result=add(400,700,mult);
 //Function which is called by handler
//callback are synchronous and asynchronus -->
//callback is a function that is passed as a arguments for other function
//higher order function is a function that accepts the function as a arguments
