console.log("Hello world");
const success=(data)=>{
    console.log("Done",data);
}
const failure=(data)=>{
    console.log("Fail",data);
}
const pr=fetch("https://dummyjson.com/recipies");
pr.then(success).catch(failure);

