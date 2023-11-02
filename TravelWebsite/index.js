let slide = document.querySelectorAll(".revieCard")
let dark = document.getElementById('dark')
let user = document.getElementById('user')
let bar = document.getElementById('bar')
let loginBtn = document.getElementById('loginBtn')
let booked = document.getElementById('booked')


let count = 0;

dark.addEventListener("click", function(){
    document.querySelector("body").classList.toggle("active1")
})

user.addEventListener("click", function(){
  document.querySelector(".loginPage").classList.toggle("active2")
})

bar.addEventListener("click", function(){
  document.querySelector("ul").classList.toggle("showData")
})

loginBtn.addEventListener("click", function(){
  let email = document.getElementById("email")
  let password = document.getElementById("password")
   
  if(email.value == "" && password.value == ""){
     alert("Enter Details")
  }else{
    alert("You Logged In")
  }
})

booked.addEventListener("click",function(){
  let book = document.getElementById("book")   
  let date = document.getElementById("date")   

   if(book.value == "" && date.value ==""){
     alert("plaese enter valid data")
   }else{
    alert("Your Trip Has Been Book Happy journy")
   }
})


slide.forEach(function(slides,index){
  slides.style.left = `${index *100}%`
})

function myFunc(){
  slide.forEach(function(curVal){
    curVal.style.transform = `translate(-${count*100}%)`
  })
}

setInterval(function(){
  count++
  if(count == slide.length){
    count =0;
  }
    myFunc()
},2000)