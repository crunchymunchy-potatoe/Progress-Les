var result1 = document.getElementById("example-id").innerHTML
console.log(result1)
var resul2 = document.getElementsByTagName("p")[0].innerHTML
console.log(resul2)
var resault3 = document.getElementsByClassName("java")[0].innerHTML
console.log(resault3)
var resault4 = document.getElementsByClassName("gungwah")[0].innerHTML

//--challange--//
var item = document.getElementsByClassName("apps")[0].innerHTML
var i;
for (i=0; i< item; getElementsByClassName("apps")) {
    var result = document.getElementsByClassName("apps")[i].innerHTML
    console.log(result)
}

//--Atribute & Innerhtml--//
var result2 = document.getElementById("sawit").innerHTML =  "Bahlil Baik";
var result3 = document.getElementsByTagName("p")[4].className = "blue";
var result4 = document.getElementsByTagName("p")[5].setAttribute("class", "green")
var result5 = document.getElementsByTagName("p")[6].style.color = "green";

//--Adding Elements--//
var paragraph = document.createElement("P");
paragraph.innerHTML = "New Paragraph";

document.body.appendChild(paragraph);

var paragraph =document.getElementsByTagName("P")[0].setAttribute("kelas", "blue")

//--Removing Elements--//
document.body.removeChild(paragraph)

//--Query Selector--//
document.querySelector(".paragraph")

function dayMode() {
    document.querySelector("body").style.color = "black";
    document.querySelector("body").style.
    backgroundColor = "White"
}
function nightMode() {
    document.querySelector("body").style.color = "white"
    document.querySelector("body").style.
    backgroundColor = "black"
}