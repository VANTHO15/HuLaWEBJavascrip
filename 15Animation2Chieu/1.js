document.addEventListener("DOMContentLoaded",function()
{
	var btn= document.getElementsByClassName("btn");
    var anh= document.getElementsByClassName("card");
    var chieu=-1;
    btn[0].onclick= function()
    {
        chieu =!chieu;
        if(chieu==0)
        {
            anh[0].classList.add("tienlen");
            anh[0].classList.remove("luive");
        }
        else if(chieu==1)
        {
            anh[0].classList.add("luive");
            anh[0].classList.remove("tienlen");
        }
    }
    
   
},false);