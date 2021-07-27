document.addEventListener("DOMContentLoaded",function(){
	var nut=document.getElementById('nut');
	console.log(nut);
	var menu=document.getElementsByClassName('menutrai');
	console.log(menu[0]);
	var den=document.getElementsByClassName('den');
	var trang=document.getElementsByClassName('mautrang');
	console.log(trang[0]);
	var ndto=document.getElementsByClassName('noidungto');


	nut.onclick=function(){
		den[0].classList.add('len');
	    //ndto[0].classList.add("dichphai"); 
		trang[0].classList.add("trangquay");
		menu[0].classList.remove("vetrai");
	}
	den[0].onclick= function()
	{
		den[0].classList.remove('len');
		//ndto[0].classList.remove("dichphai");
		trang[0].classList.remove("trangquay");
		menu[0].classList.add("vetrai");
	}
},false);