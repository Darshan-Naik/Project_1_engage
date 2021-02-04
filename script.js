
function sticky(){
    var head =document.querySelector("div");
    head.setAttribute("class", "sticky")
    
}
window.addEventListener("scroll", sticky)