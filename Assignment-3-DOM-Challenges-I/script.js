
//Question 1
let theContainer = document.getElementById('container')
console.log(theContainer)

//Question 2
let theContainer2 = document.querySelector("#container")
console.log(theContainer2)

//Question 3
let allSecond = document.querySelectorAll(".second")
console.log(allSecond)


//4) Select a list item with a class of third, but only the list item inside of the ol tag.
document.getElementById("container").querySelector('section ol .third')

//5) Give the section with an id of container the text "Hello!".
var message=document.getElementById('container')
message.append('Hello!')

//6) Add the class main to the div with a class of footer.
const ans6 = document.getElementsByClassName("footer")[0].classList.add("main");
console.log(ans6);


//Question7
document.querySelector(".footer").classList.remove("main")


//Question8
newLi = document.createElement("li")

//Question9
newLi.textContent = "four"



//Question 10
let node = document.createElement("LI");                 // Create a <li> node
let textnode = document.createTextNode("Water");         // Create a text node
node.appendChild(textnode);                              // Append the text to <li>
document.getElementById("myList").appendChild(node);     // Append <li> to <ul> with id="myList"

//Question 11
let theOrderList = document.getElementById("orderList")
let items = theOrderList.getElementsByTagName("li")
for(let i  =0; i < items.length; i++)
{
    document.getElementById('orderList').style.backgroundColor = "green"
}

//Question 12
var ele = document.getElementById("myDiv")
ele.remove();

