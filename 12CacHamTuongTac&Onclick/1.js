document.addEventListener("DOMContentLoaded",function()
{
	
    var anh = document.getElementsByClassName("anh");
    var btn = document.getElementsByClassName("btn");
    console.log(anh);
    console.log(btn);
    var index =1;
    btn[0].onclick = function()
    {
        index ++;
        console.log(index);
        if(index == 5) index =1; 
        anh[0].outerHTML="<img class=\"anh\" src=\"images/gai" + index.toString()+ ".jpg\" alt=\"\">";
    }
},false);