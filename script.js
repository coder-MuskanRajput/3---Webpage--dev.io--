var menu = document.querySelector("h3");
var scr =  document.querySelector(".arrowScreen");
var nav = document.querySelector(".nav-part1")

var flag =0;
menu.addEventListener("click",function(){
    if (flag==0)
    {
    scr.style.top = 0;
    nav.style.color="black";
    menu.innerHTML='<i class="ri-arrow-drop-up-line"></i>'
    flag=1;
    }
    else
    {
    scr.style.top = "-100%";
    menu.innerHTML='<i class="ri-arrow-drop-down-line"></i>'
    nav.style.color="white";
    flag=0;
    }
})