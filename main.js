// console.log(localStorage.getItem("name"))
// localStorage.setItem("name","salom")


//setItem
// let names="Karimjon";
// let surname="Norboyev"
// let age=20
// localStorage.setItem("name",names)
// localStorage.setItem("surname",surname)
// localStorage.setItem("age",age)

// const names=["Islom","Karim","Burjoq"]
// localStorage.setItem("name",JSON.stringify(names))

//getItem
// let getAge=localStorage.getItem("age")
// console.log(getAge)
// let getName=localStorage.getItem("name")
// console.log(getName)
// let getSurname=localStorage.getItem("surname")
// console.log(getSurname)

// const getName=JSON.parse(localStorage.getItem("name"))
// console.log(getName)

//clear
// localStorage.clear()

const names=JSON.parse(localStorage.getItem("names")) ? JSON.parse(localStorage.getItem("names")) :[]

if(names.length>0){
    names.forEach((name)=>{
        console.log(name)
    })
}else{
    console.log("bu yerda hech qanday ism yoq")
}

