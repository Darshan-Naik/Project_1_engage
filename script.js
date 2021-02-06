
function sticky(){
    var head =document.querySelector("div");
    head.setAttribute("class", "sticky")
    
}
var cnt=0;
function navber(){
    var nav  =document.querySelector("#n_bar")
    var mobile=document.querySelector(".mobile_nav")


    if (cnt%2==0){
        nav.style.display = "none"
        mobile.style.display = "none"
  
    }else{
        nav.style.display = "flex"
        mobile.style.display = "block"

    }
   cnt++;
   console.log(nav)
}


window.addEventListener("scroll", sticky)

document.querySelector(".nav_icon").addEventListener("click",navber)

