//position matters
const array=["Delhi", "UP", "Punjab"];
console.log(array);
const fruit=prompt("What you want to add");
//to add element
array.push(fruit);
array.unshift("grapes") //to add a elemet a beginning
//splice(startindex,deletecount,items)
array.splice(2,0,"kiwi");
console.log(array);
//to update avalue
array[1]="Mango";
console.log(array);
// to delete a value
array.shift() //to remove an element at start


