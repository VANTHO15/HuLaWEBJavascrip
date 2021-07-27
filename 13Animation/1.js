document.addEventListener("DOMContentLoaded",function()
{
	var btn= document.getElementsByClassName("btn");
    var anh= document.getElementsByClassName("card");
    btn[0].onclick= function()
    {
        console.log("BTN");
        anh[0].classList.toggle("dichuyen");
    }
},false);