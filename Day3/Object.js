const student1 = {
    name: "navadeep",
    age: 20,
    gender: "male",
    city: "Kamalapuram",
    information: function () {
        console.log(this.name);
    },
    marks: {
        english: 80,
        hindi: 70
    }
};

console.log(student1);
console.log(student1.city);

// Prompt for dynamic key-value
const key = prompt("What do you want to add?");
const value = prompt("What is your village?");
student1[key] = value;

console.log(student1);
console.log(student1[key]);


delete student1["age"]; // or delete student1.age;

console.log(student1);


student1.information();
console.log(student1.marks.english);
Object.keys(student1);
Object.values(student1);
Object.entries(student1);
const {city,gender}=student1;
console.log(city,gender);
const obj={...student1}; //while changing obj the student1 is not edited
const obj1=student1 //but it happens here
 





//the key should be valid identifier (valid strings)
//keys should be always string or symbol
