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

// const names=JSON.parse(localStorage.getItem("names")) ? JSON.parse(localStorage.getItem("names")) :[]

// if(names.length>0){
//     names.forEach((name)=>{
//         console.log(name)
//     })
// }else{
//     console.log("bu yerda hech qanday ism yoq")
// }

function validateForm(){
    let name=document.getElementById("name").value;
    let age=document.getElementById("age").value;
    let address=document.getElementById("address").value;
    let email=document.getElementById("email").value;

    if(name==""){
        alert("name is required")
        return false;
    }

    if(age ==""){
        alert("age is required");
        return false;
    }
    else if(age<1){
        alert("age must not be zero  or less than zero");
        return false;
    }

    if(address==""){
        alert("address is required")
        return false;
    }

    if(email ==""){
        alert("email is required")
        return false;
    }
    else if(email.includes("@")){
        alert("invalid email address")
        return false;
    }

    return true;
}

function showData(){
    var peopleList;
    if(localStorage.getItem("peopleList")==null){
        peopleList=[];
    }
    else{
        peopleList=JSON.parse(localStorage.getItem("peopleList"))
    }

    let html="";
    peopleList.forEach(function(element,index){
        html +="<td>"+element.name+"</td>"
        html +="<td>"+element.age+"</td>"
        html +="<td>"+element.address+"</td>"
        html +="<td>"+element.email+"</td>"
        html +='<td><button onclick="deleteData('+ 
        index +
        ')" class="btn btn-danger">delete</button><button onclick="updateData(' + index + ')"  class="btn btn-warning m-2 ">delete</button></td>'
        html +="</tr>";
    })

document.querySelector("#crudTable tbody").innerHTML=html;
}

document.onload=showData();

function AddData(){
    if(validateForm()==true){
        let name=document.getElementById("name").value;
        let age=document.getElementById("age").value;
        let address=document.getElementById("address").value;
        let email=document.getElementById("email").value;

        let peopleList;
        if(localStorage.getItem("peopleList")==null){
            peopleList=[];
        }else{
            peopleList=JSON.parse(localStorage.getItem("peopleList"))
        }

        peopleList.push({
            name:name,
            age:age,
            address:address,
            email:email,
        })

        localStorage.setItem("peopleList",JSON.stringify
        (peopleList));
        showData();
        document.getElementById("name").value="";
        document.getElementById("age").value="";
        document.getElementById("address").value="";
        document.getElementById("email").value="";
    }
}

