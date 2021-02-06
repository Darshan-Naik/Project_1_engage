
function sticky(){
    var head =document.querySelector("div");
    head.setAttribute("class", "sticky")
    
}
window.addEventListener("scroll", sticky)


// resourse
var box1 = document.getElementById("box1");
var box2 = document.getElementById("box2");
var box3 = document.getElementById("box3");
var box4 = document.getElementById("box4");
var box5 = document.getElementById("box5");
var box6 = document.getElementById("box6");
var box7 = document.getElementById("box7");
var box8 = document.getElementById("box8");

function changeBackground(){
    box1.style.background = "#f7f9f9";
    box1.style.border ="0px solid #f4f4f4";   
}
function changeBackground1(){
    box2.style.background = "#f7f9f9";
    box2.style.border ="0px solid #f4f4f4";   
}
function changeBackground2(){
    box3.style.background = "#f7f9f9";
    box3.style.border ="0px solid #f4f4f4";   
}
function changeBackground3(){
    box4.style.background = "#f7f9f9";
    box4.style.border ="0px solid #f4f4f4";   
}
function changeBackground4(){
    box5.style.background = "#f7f9f9";
    box5.style.border ="0px solid #f4f4f4";   
}
function changeBackground5(){
    box6.style.background = "#f7f9f9";
    box6.style.border ="0px solid #f4f4f4";   
}
function changeBackground6(){
    box7.style.background = "#f7f9f9";
    box7.style.border ="0px solid #f4f4f4";   
}
function changeBackground7(){
    box8.style.background = "#f7f9f9";
    box8.style.border ="0px solid #f4f4f4";   
}
function normalBackground1(){
    box1.style.background = "#fff";
    box1.style.border ="0px solid #fff";        
}
function normalBackground2(){
    box2.style.background = "#fff";
    box2.style.border ="0px solid #fff";        
}
function normalBackground3(){
    box3.style.background = "#fff";
    box3.style.border ="0px solid #fff";        
}
function normalBackground4(){
    box4.style.background = "#fff";
    box4.style.border ="0px solid #fff";        
}
function normalBackground5(){
    box5.style.background = "#fff";
    box5.style.border ="0px solid #fff";        
}
function normalBackground6(){
    box6.style.background = "#fff";
    box6.style.border ="0px solid #fff";        
}
function normalBackground7(){
    box7.style.background = "#fff";
    box7.style.border ="0px solid #fff";        
}
function normalBackground8(){
    box8.style.background = "#fff";
    box8.style.border ="0px solid #fff";        
}
    
box1.addEventListener("mouseover", changeBackground);
box1.addEventListener("mouseout",normalBackground1);
box2.addEventListener("mouseover", changeBackground1);
box2.addEventListener("mouseout",normalBackground2);
box3.addEventListener("mouseover", changeBackground2);
box3.addEventListener("mouseout",normalBackground3);
box4.addEventListener("mouseover", changeBackground3);
box4.addEventListener("mouseout",normalBackground4);
box5.addEventListener("mouseover", changeBackground4);
box5.addEventListener("mouseout",normalBackground5);
box6.addEventListener("mouseover", changeBackground5);
box6.addEventListener("mouseout",normalBackground6);
box7.addEventListener("mouseover", changeBackground6);
box7.addEventListener("mouseout",normalBackground7);
box8.addEventListener("mouseover", changeBackground7);
box8.addEventListener("mouseout",normalBackground8);
