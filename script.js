
function sticky(){
    var head =document.querySelector("div");
    head.setAttribute("class", "sticky")
    
}

window.addEventListener("resize", sticky)