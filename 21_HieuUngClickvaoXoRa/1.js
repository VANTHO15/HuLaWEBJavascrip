document.addEventListener("DOMContentLoaded",function(){
	var nut=document.getElementById('nut');
	console.log(nut);
	var menu=document.getElementsByClassName('menutrai');
	console.log(menu[0]);
	var den=document.getElementsByClassName('den');
	console.log(den[0]);
	var ndto=document.getElementsByClassName('noidungto');


	nut.onclick=function(){
		den[0].classList.add('len');
		ndto[0].classList.add("dichphai");
	}
	den[0].onclick= function()
	{
		den[0].classList.remove('len');
		ndto[0].classList.remove("dichphai");
	}
},false);