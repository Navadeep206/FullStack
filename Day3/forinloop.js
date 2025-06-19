const car={
    brand:"Tata",
    model:2025,

}
for(let i in car){
    console.log("keys: ",i);
}
const keys1=Object.keys(car);
console.log(keys1);
const entries=Object.entries(car);
console.log(entries);
for(let i of keys1){
    console.log(i[0],i[1]);
}