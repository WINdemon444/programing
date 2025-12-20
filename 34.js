let users=[
   { name:"jhon", age:24},
   { name:"mike",age:15},
   {name:"kevin", age:19}
]
let newusers=[]
for(let i=0;i<users.length;i++){
    if(users[i].age>18){
        newusers.push(users[i])
    }
}
console.log(newusers)
//////////////////////////////////////////////
let cars = [
  { brand: "Toyota", mileage: 120000 },
  { brand: "BMW", mileage: 30000 },
  { brand: "Ford", mileage: 150000 },
  { brand: "Audi", mileage: 15000 },
];   
 // 🚗 TASK: LOW MILEAGE FILTER
  // 1. Create a loop for the 'cars' array.
  // 2. Check if 'mileage'  is less than (<) 50000.
  // 3. If yes, add (push) the car to 'lowMileageCars'.
  // 4. Print the result.
lowmileage=[]
for(let i=0;i<cars.length;i++){
    if(cars[i].mileage<50000){
        lowmileage.push(cars[i])
    }
}
console.log(lowmileage)



/////////////////////////////////////////////////////////////////////////////////////////////////////
let students = [
  { name: "Anna", score: 95 },
  { name: "Tom", score: 45 },
  { name: "Maria", score: 88 },
  { name: "John", score: 50 },
];



  // 🎓 TASK: FIND STUDENTS FOR RETAKE
  // 1. Loop through the 'students' array.
  // 2. If 'score' is less than (<) 60, push the student to 'retakeList'.
  // 3. Print the 'retakeList' to see who needs to study more.

retakelist=[]
for(let i=0;i<students.length;i++){
    if(students[i].score<60){
        retakelist.push(students[i])
    }
}
console.log(retakelist)
