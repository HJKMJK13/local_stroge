// console.log(localStorage.getItem("name"))
// localStorage.setItem("name","salom")


//setItem
let names="Karimjon";
let surname="Norboyev"
let age=20
localStorage.setItem("name",names)
localStorage.setItem("surname",surname)
localStorage.setItem("age",age)

//getItem
let getAge=localStorage.getItem("age")
console.log(getAge)
let getName=localStorage.getItem("name")
console.log(getName)
let getSurname=localStorage.getItem("surname")
console.log(getSurname)


