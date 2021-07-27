document.addEventListener("DOMContentLoaded",function()
{
    var tamgiac=document.getElementsByClassName("tamgiac");
    var tamgiac=tamgiac[0];
    var danhsach=document.getElementsByClassName("danhsach");
    var danhsach=danhsach[0];
 
    tamgiac.onclick=function()
    {
       this.classList.toggle("tamgiactrang");
       danhsach.classList.toggle("ra");
    }
},false);