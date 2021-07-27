document.addEventListener("DOMContentLoaded",function()
{
	var nut = document.getElementsByClassName("btn");
    for(var i =0;i<nut.length;i++)
    {
        nut[i].onclick = function()
        {
            var mk= this.getAttribute('data-matkhau');
            console.log(mk);
        }
    }
   
},false);