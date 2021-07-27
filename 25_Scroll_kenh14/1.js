document.addEventListener("DOMContentLoaded",function(){
	var menu=document.getElementsByClassName('menu');
	var giua=document.getElementsByClassName('giua');
	var vitrikhoiGiua=giua[0].offsetTop;
	var trangthai=0;
	var trangthaikhoigiua=0;
	var vitricuoi=vitrikhoiGiua + 2000;
	//phần cuộn chuột cho menu
	window.addEventListener('scroll',function(){
		if(window.pageYOffset>100)
		{
			if(trangthai==0)
			{
				trangthai=1;
				menu[0].classList.add("menuden");
			}
		}
		else
		if(window.pageYOffset<100)
		{
			if(trangthai==1)
			{
				trangthai=0;
				menu[0].classList.remove("menuden");
			}
		}

		// phần chạy tới khối dừng lại
		if((window.pageYOffset>vitrikhoiGiua)&&(window.pageYOffset<vitricuoi))
		{
			if(trangthaikhoigiua==0)
			{
				trangthaikhoigiua=1;
				giua[0].classList.add("dungyen"); 
			}
		}
		else
			if((window.pageYOffset<vitrikhoiGiua) || (window.pageYOffset>vitricuoi))
		{
			if(trangthaikhoigiua==1)
			{
				trangthaikhoigiua=0;
				giua[0].classList.remove("dungyen");
			}
		}
	})
},false);