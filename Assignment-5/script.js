// Question - 1

let h1 = document.getElementsByTagName("h1")[0]
console.log(h1)
h1.addEventListener('mouseover',h1Hover)
h1.addEventListener("mouseleave",h1HoverLeave)
function h1Hover(){
    h1.style.color = "red"
    console.log("hoverd on the mouse")
}
function h1HoverLeave(){
    h1.style.color = "black"
    console.log("remvoed from the mouse on the mouse")
}

// Question 2:

let p = document.getElementsByTagName('p')[1]
console.log(p)
p.addEventListener('click',para2)
function para2(){
    console.log("clicked")
    document.body.style.backgroundColor = "gray";
    p.innerHTML = "(Clicked) " + p.innerHTML;
}

//Quesiton 4

let p4 = document.getElementsByTagName('p')[2]
console.log(p4)
p4.addEventListener('click',para3)
function para3(){
    console.log("doubleclicked")
    // document.body.style.backgroundColor = "gray";
    p4.append("doubleclicked")
}

//Question 5

let lastP = document.getElementsByTagName('p')[2]
console.log(lastP)
lastP.addEventListener('click',()=>{
    console.log("double clicked")
    lastP.style.fontWeight="bold"
})


//Question 6

let a = document.getElementsByTagName('a')[0]
a.addEventListener('click',()=>{
    a.style.border = "2px solid black";
})

//Quesiton 7

let li = Array.from(document.getElementsByTagName('li'))
li.forEach((item)=>{
    item.addEventListener('click',()=>{
        li.forEach((item)=>{
            item.style.fontStyle="italic"
        })
    })

})

//Question 8
console.log(window)
console.log(document.title)
window.addEventListener("resize", function() {
    document.title = "New Page Title";
  });

  //Question 9

  window.addEventListener("resize", function() {
    let img = document.createElement('img')
    document.body.append(img)
  })

  //Question 10
  window.addEventListener("resize", () => {
    let p = document.getElementsByTagName('p')[2]
    p.parentNode.removeChild(p)

  })

  //Question - 11

var img=document.getElementsByTagName('img')[0]
console.log(img)
img.addEventListener('click',()=>{
    img.style.filter='grayscale(100%)'
})


//Question 13
let button = document.getElementsByTagName("button")[0]
function checkFields() {
    var field1 = document.getElementById("field1").value;
    var field2 = document.getElementById("field2").value;
    var field3 = document.getElementById("field3").value;
  
    if (field1 === "" || field2 === "" || field3 === "") {
      alert("Please fill in all fields.");
      return false;
    }
    return true;
  }
  button.addEventListener('click',checkFields)
//Question 14
let button2 = document.getElementsByTagName("button")[1]
function clearFields() {
    document.getElementById("field1").value = "";
    document.getElementById("field2").value = "";
    document.getElementById("field3").value = "";
  }
  
  button.addEventListener('click',clearFields)
  //Question 15
  let text = document.getElementById("field1");
  
  function validateName() {
    var nameField = document.getElementById("field1");
    var nameValue = nameField.value;
    
    // Check if name field contains digits or special characters
    var invalidChars = /[0-9~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/g;
    if (invalidChars.test(nameValue)) {
      alert("Invalid input");
      nameField.value = nameValue.replace(invalidChars, "");
      return false;
    }
    return true;
  }
  
  text.addEventListener('keypress',validateName)


  
