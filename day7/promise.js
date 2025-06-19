console.log("hello");
const pr= new Promise((res,rej)=>{
    res("It is done correctly");
});
console.log(pr);
pr.then((data)=>{
    console.log("Done",data);
}).catch((err)=>{
    console.log("error",err);

})
